
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_for_huellitas'; 

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, nombre, apellido, fechaNacimiento, sexo, telefono 
  } = req.body;

  try {
    if (!email || !password || !nombre || !apellido || !fechaNacimiento || !sexo) {
      return res.status(400).json({ success: false, message: 'Por favor, completa todos los campos obligatorios.' });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ success: false, message: 'Formato de correo electrónico inválido.' });
    }

    if (password.length < 6) {
        return res.status(400).json({ success: false, message: 'La contraseña debe tener al menos 6 caracteres.' });
    }
    
    
    const existingUser = await UserModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'El correo electrónico ya está registrado.' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10); 

 
    const userId = await UserModel.createUser(
      email,
      hashedPassword,
      nombre,
      apellido,
      fechaNacimiento,
      sexo,
      telefono || null 
    );


    const token = jwt.sign({ id: userId, email: email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente.',
      token: token,
      user: { id: userId, email: email, nombre: nombre, apellido: apellido } 
    });

  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    next(error); 
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas.' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, message: 'Inicio de sesión exitoso.', token: token });

    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        next(error);
    }
};
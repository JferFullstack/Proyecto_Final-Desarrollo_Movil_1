
import pool from '../config/db'; 

class UserModel {
  static async findUserByEmail(email: string) {
    const [rows]: any = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  static async createUser(
    email: string,
    passwordHash: string,
    nombre: string,
    apellido: string,
    fechaNacimiento: string, 
    sexo: string,
    telefono: string | null 
  ) {
    const [result]: any = await pool.execute(
      `INSERT INTO users (email, password, nombre, apellido, fecha_nacimiento, sexo, telefono)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [email, passwordHash, nombre, apellido, fechaNacimiento, sexo, telefono]
    );
    return result.insertId;
  }
}

export default UserModel;
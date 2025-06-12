// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes';
import { authenticateToken } from './middleware/authMiddleware';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'una_clave_secreta_facil_para_desarrollo';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: '¡Bienvenido a la API de Huellitas! El servidor está funcionando.' });
});

app.use('/api', apiRoutes);

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenido, ${req.user?.email}! Has accedido a una ruta protegida.`, user: req.user });
});

app.use(errorHandler);

app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
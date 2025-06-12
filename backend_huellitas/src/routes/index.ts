// backend/src/routes/index.ts
import { Router } from 'express';
import authRoutes from './authRoutes';
// import petRoutes from './petRoutes'; // Si tuvieras más rutas

const router = Router();

router.use('/auth', authRoutes); // Todas las rutas de authRoutes ahora serán prefijadas con /auth (ej. /auth/register)
// router.use('/pets', petRoutes); // Ejemplo para futuras rutas de mascotas

export default router;
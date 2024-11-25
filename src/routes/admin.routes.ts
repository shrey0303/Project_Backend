import { Router } from 'express';
import { AdminController } from '../controllers/admin.controllers';
import { AdminService } from '../services/admin.service';
import { authenticateJWT, authorize } from '../middleware/auth.middleware';
import { Role } from '@prisma/client';

const router = Router();
const adminService = new AdminService();
const adminController = new AdminController(adminService);

router.use(authenticateJWT);
router.use(authorize(Role.ADMIN));

router.get('/users', (req, res) => adminController.getUsers(req, res));
router.put('/users/:id/role', (req, res) => adminController.updateUserRole(req, res));

export default router;

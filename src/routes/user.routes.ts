import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.use(authenticateJWT);

router.get('/profile', (req, res) => userController.getProfile(req, res));
router.put('/profile', (req, res) => userController.updateProfile(req, res));

export default router;
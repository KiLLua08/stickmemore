import express from 'express';
import { loginUser, registerUser, userProfile } from '../controllers/userController.js';
import { requireAuth, requireAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', requireAuth, userProfile);

export default router;

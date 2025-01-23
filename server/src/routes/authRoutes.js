import express from 'express';
import { login, logout, getUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/user', getUser);
router.post('/register', registerUser);

export default router;
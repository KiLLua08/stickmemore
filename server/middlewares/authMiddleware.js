import jwt from 'jsonwebtoken';
import { userModel } from '../models/User.js';

export const requireAuth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export const requireAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user);

        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
};

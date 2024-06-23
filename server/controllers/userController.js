import { userModel } from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    const hashedPassword = bcrypt.hashSync(String(password), 10);

    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully :)' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to login :(' });
  }
};


export const userProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};
import { Sticker } from '../models/Sticker.js'
import mongoose from 'mongoose';


export const getAllStickers = async (req, res) => {
    try {
      const stickers = await Sticker.find();
      res.json(stickers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

 export const getOneSticker = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid sticker ID' });
    }
  
    try {
      const sticker = await Sticker.findById(id);
      if (!sticker) {
        return res.status(404).json({ message: 'Sticker not found' });
      }
      res.json(sticker);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

 export const addSticker = async (req, res) => {
    const sticker = new Sticker({
      category: req.body.category,
      price: req.body.price,
      type: req.body.type,
      imageUrl: req.body.imageUrl,
    });
  
    try {
      const newSticker = await sticker.save();
      res.status(201).json(newSticker);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
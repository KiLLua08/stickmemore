import express from 'express'
import { getAllStickers, getOneSticker, addSticker } from '../controllers/stickerController.js';
const router = express.Router()

// Get all stickers
router.get('/allStickers', getAllStickers);

// Get a sticker by ID
router.get('/:id', getOneSticker);

// Create a new sticker
router.post('/addSticker', addSticker);

  export default router
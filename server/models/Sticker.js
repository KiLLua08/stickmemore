import mongoose from 'mongoose'

const StickerSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
  },
  imageUrl: {
    type: String,
  }
});


export const Sticker = mongoose.model('Sticker', StickerSchema)

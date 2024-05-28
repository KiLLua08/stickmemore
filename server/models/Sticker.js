import mongoose from 'mongoose'

const StickerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  }
});


export const Sticker = mongoose.model('Sticker', StickerSchema)

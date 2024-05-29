import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import stickerRoutes from './routes/stickerRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') })


const app = express();
const port = process.env.PORT
const DB_URL = process.env.MONGO_DB || 'mongodb+srv://rayen08yako:AjXThnWIsbdxOUbJ@cluster0.suugocn.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/user', userRoutes);
app.use('/api/stickers', stickerRoutes)

mongoose.connect(DB_URL)
  .then(() => {
    console.log('CONNECTED TO MONGODB :)');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT : ${port}`);
});
//AjXThnWIsbdxOUbJ rayen08yako
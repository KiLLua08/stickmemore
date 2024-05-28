import {loginUser, registerUser, userProfile} from "../controllers/userController.js";
import express from 'express'

const router = express.Router()

//register user 

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', userProfile)

export default router
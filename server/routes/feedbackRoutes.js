import express from 'express'
import {postFeedbacks} from "../controllers/feedbackController.js"

const router = express.Router()

router.post('/feedbacks', postFeedbacks)

export default router
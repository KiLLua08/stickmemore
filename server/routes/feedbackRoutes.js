import express from 'express'
import {getFeedbacks, postFeedback} from "../controllers/feedbackController.js"

const router = express.Router()

router.get('/feedbacks', getFeedbacks)

router.post('/feedback', postFeedback)

export default router
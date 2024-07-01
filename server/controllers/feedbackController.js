import Feedback from "../models/Feedback.js"

export const postFeedbacks = async (req,res) =>{
  const { email, text } = req.body
  const feedback = new Feedback({email : email, text : text})
  
  try {
    await feedback.save()
    res.status(201).send('thanks for your feedback !')
  } catch (error) {
    res.status(404).send(error)
  }
}
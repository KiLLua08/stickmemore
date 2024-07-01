import mongoose from 'mongoose'

const FeedbackSchema = mongoose.Schema({
    email : String,
    text : String,
},{timestamp : true})

const Feedback = mongoose.model('feedback', FeedbackSchema)

export default Feedback

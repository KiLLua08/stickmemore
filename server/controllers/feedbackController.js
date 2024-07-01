import Feedback from '../models/Feedback.js';
import nodemailer from 'nodemailer';

export const postFeedback = async (req, res) => {
  const { email, text } = req.body;
  const feedback = new Feedback({ email, text });

  try {
    await feedback.save();

    // Send email notification using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'StickMeMore : New Feedback Received',
      html : `<h1>Feedback from ${email}</h1><br/>
      <p>${text}</p>`
    };
//"belghithadem@gmail.com"
    await transporter.sendMail(mailOptions);
    // console.log(mailOptions.html)
    res.status(201).json({ message: 'Thanks for your feedback!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);

    // Check for specific nodemailer errors
    if (error.response) {
      console.error('Error response from email service:', error.response);
    }
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};


export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error retrieving feedbacks:', error);
    res.status(500).json({ error: 'Failed to retrieve feedbacks' });
  }
};

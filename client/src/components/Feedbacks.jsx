import React, { useState } from 'react';
import { RiMailSendLine } from "react-icons/ri";
import axios from 'axios';

function Feedbacks() {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/feed/feedback', { email, text });
      setMessage(response.data.message);
      setEmail('');
      setText('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('Failed to send feedback');
    }
  };

  return (
    <section className="newsletter py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Feedback</h2>
        <p className="mb-8">Give us your feedback so we can improve our service.</p>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            required
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Say something..."
            className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            <RiMailSendLine />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Feedbacks;

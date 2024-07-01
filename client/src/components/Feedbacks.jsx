import React, { useEffect, useState } from 'react'
import { RiMailSendLine } from "react-icons/ri";
import axios from 'axios';

function Feedbacks() {
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [clicked, setClicked] = useState(false)

  const fetchData = async () =>{
    const response = await axios.post('http://localhost:4000/api/feed/feedbacks')
    console.log(response)
  }
  useEffect(
    fetchData()
    ,[])
  return (
    <section className="newsletter py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Feedback</h2>
      <p className="mb-8">Give us your feedback so we can improve our service.</p>
      <form className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
          />
        <input 
          type="textarea" 
          name="textValue" 
          placeholder="Say something..." 
          className="p-2 w-full md:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500" 
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
  )
}

export default Feedbacks

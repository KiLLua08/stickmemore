import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate()

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateInput(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/user/login', formData);
      console.log(response.data.message);
      alert('User logged in successfully!');
      navigate('/home')
    } catch (error) {
      console.error(error.response.data.error);
      alert('Invalid email or password. Please try again.');
    }
  };

  const validateInput = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div className='flex justify-center flex-col items-center border border-blue-600 gap-8 p-10 m-2 rounded'>
      <h2 className=''>Login</h2>
      <form onSubmit={handleSubmit} className='flex justify-center flex-col gap-5'>
        <div>
          {formErrors.email && <span className='form-error'>{formErrors.email}</span>}
          <input
            className='border rounded border-yellow-300 p-2'
            type='text'
            name='email'
            placeholder='Enter email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          {formErrors.password && <span className='form-error'>{formErrors.password}</span>}
          <input
            className='border rounded border-yellow-300 p-2'
            type='password'
            name='password'
            placeholder='Enter password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='bg-green-400 rounded m-2 p-2 text-white'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

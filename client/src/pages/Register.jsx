import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when user starts typing
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const errors = validateInput(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/user/register', formData);
      console.log(response.data); // Handle success response
      alert('User registered successfully!');
    } catch (error) {
      console.error(error.response.data); // Handle error response
      alert('Failed to register. Please check your inputs.');
    }
  };

  const validateInput = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = 'Username is required';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must have at least 6 characters';
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className='flex justify-center flex-col items-center border border-blue-600 gap-8 p-10 m-2 rounded'>
      <h2 className=''>Register</h2>
      <form onSubmit={handleSubmit} className='flex justify-center flex-col gap-5'>
        <div>
          {formErrors.username && <span className='form-error'>{formErrors.username}</span>}
          <input
            className='border rounded border-yellow-300 p-2'
            type='text'
            name='username'
            placeholder='Enter username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
        <div>
          {formErrors.confirmPassword && (
            <span className='form-error'>{formErrors.confirmPassword}</span>
          )}
          <input
            className='border rounded border-yellow-300 p-2'
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='bg-red-400 rounded m-2 p-2 text-white'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

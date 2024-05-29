// Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
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
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateInput(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    try {
      await axios.post('http://localhost:4000/api/user/register', formData);
      toast.success('User registered successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => navigate('/login'), 3000); // Delay navigation to ensure the toast is visible
    } catch (error) {
      console.error(error.response.data);
      toast.error('Failed to register. Please check your inputs.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    <div className="flex items-center justify-center min-h-screen w-full">
      <ToastContainer />
      <div className="bg-transparent p-10 rounded-lg shadow-lg w-full max-w-sm border">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              className={`w-full px-4 py-3 border bg-transparent rounded-lg ${formErrors.username ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            {formErrors.username && <p className="text-red-500 text-xs mt-1">{formErrors.username}</p>}
          </div>
          <div>
            <input
              className={`w-full bg-transparent px-4 py-3 border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>
          <div>
            <input
              className={`w-full bg-transparent px-4 py-3 border rounded-lg ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
          </div>
          <div>
            <input
              className={`w-full bg-transparent px-4 py-3 border rounded-lg ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

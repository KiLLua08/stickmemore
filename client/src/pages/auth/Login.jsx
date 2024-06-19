import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from '../../assets/hero.png';
import { Puff } from 'react-loader-spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/api/user/login', formData);
      const { token } = response.data;

      localStorage.setItem('token', token);
      toast.success('You logged in successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => navigate('/home'), 3000);
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data.error : error.message);
      toast.error('Invalid email or password. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
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
    <div className="flex items-center justify-center w-full">
      <ToastContainer />
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="hidden md:flex w-1/2 bg-cover" style={{ backgroundImage: `url(${loginImage})` }}></div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                className={`w-full px-4 py-3 border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
                className={`w-full px-4 py-3 border rounded-lg ${formErrors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
            </div>
            <button type="submit" className="w-full py-3 flex justify-center align-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition duration-300">
              {isLoading ?
                <Puff
                  visible={true}
                  height="30"
                  width="30"
                  color="#05eaff"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                /> : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

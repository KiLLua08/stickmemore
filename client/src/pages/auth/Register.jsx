import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/user/userSlice.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerImage from '../../assets/hero.png'; // Add a suitable image to your assets
import { Puff } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateInput(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }
    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        toast.success('User registered successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/login');
      })
      .catch((err) => {
        toast.error('Failed to register. Please check your inputs.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const validateInput = (data) => {
    const errors = {};
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
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div className="flex items-center justify-center w-full">
      <ToastContainer />
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="hidden md:flex w-1/2 bg-cover" style={{ backgroundImage: `url(${registerImage})` }}></div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                className={`w-full px-4 py-3 border rounded-lg ${formErrors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className={`w-full px-4 py-3 border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
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
            </div>
            <div>
              <input
                className={`w-full px-4 py-3 border rounded-lg ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full py-3 flex justify-center align-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition duration-300">
              {loading ?
                <Puff
                  visible={true}
                  height="30"
                  width="30"
                  color="#05eaff"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                /> : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

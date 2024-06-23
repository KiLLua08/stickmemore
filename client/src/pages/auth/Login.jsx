import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/user/userSlice.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from '../../assets/hero.png';
import { Puff } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .unwrap()
      .then(() => {
        toast.success('You logged in successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/home');
      })
      .catch((err) => {
        toast.error('Invalid email or password. Please try again.', {
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

  return (
    <div className="flex items-center justify-center w-full">
      <ToastContainer />
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="hidden md:flex w-1/2 bg-cover" style={{ backgroundImage: `url(${loginImage})` }}>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">StickMeMore</h2>
          <p className="text-xl text-gray-600 text-center">Welcome Back!</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Login
              </button>
              {loading && (
                <Puff
                  height="25"
                  width="25"
                  radius="6"
                  color="blue"
                  ariaLabel="loading"
                />
              )}
            </div>
          </form>
          {error && (
            <p className="mt-4 text-red-500 text-sm">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

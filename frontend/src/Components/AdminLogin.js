import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const backend_url = "https://newton-notice-server.vercel.app"
// const localHost = "http://localhost:3003"


const AdminLogin = () => {
  const [message, setMessage] = useState('');
  const [loginDetails, setLoginDetails] = useState({
    AdminId: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails({
      ...loginDetails,
      [name]: name === 'AdminId' ? parseInt(value) : value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = `${backend_url}/admin/signin`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login Successful');
        alert("Admin login successful")
        navigate('/adminDashboard')

      } else {
        setMessage(data.message || 'Invalid ID or password');
      }
    } catch (err) {
      setMessage('Error occurred while logging in');
      console.error(err);
    }
  };

  return (
    <div className="relative flex min-h-screen">
      {/* Left Side: Background Image */}
      <div
        className="md:w-1/2 w-0 h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Side: Login Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white">
        <img src={logo} className="h-12 w-auto mb-8" alt="Logo" />

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">
            Admin Login
          </h1>
          <p className="md:text-lg text-sm text-gray-600 mb-6 animate-fadeIn">
            Please enter your Admin ID and Password
          </p>

          {/* Login Form */}
          <form className="space-y-6 animate-bounceIn" onSubmit={handleLogin}>
            <div>
              <input
                type="number"
                name="AdminId"
                value={loginDetails.AdminId}
                onChange={handleChange}
                placeholder='Admin ID'
                className="md:w-full w-10/12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={loginDetails.password}
                onChange={handleChange}
                placeholder="Password"
                className="md:w-full w-10/12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105 md:w-full w-10/12"
            >
              Login
            </button>
          </form>

          {/* Toggle between Admin and Student Login */}
          <div className="mt-6">
            <p className="text-lg font-light">
                Want to login as Student?
              <button
                onClick={() => navigate('/login')}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Click here
              </button>
            </p>
          </div>

          {/* Signup Option */}
          <div className="mt-4">
            <p className="text-lg font-light">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Sign up
              </button>
            </p>
          </div>

          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between Admin and Student login
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (isAdmin) {
      // Handle Admin login logic
      console.log("Admin Login");
    } else {
      // Handle Student login logic
      console.log("Student Login");
    }
    navigate('/notices');
  };

  return (
    <div className="relative flex min-h-screen">
      {/* Left Side: Background Image */}
      <div
        className="w-1/2 h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <img src={logo} className="h-12 w-auto mb-8" alt="Logo" />

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">
            {isAdmin ? 'Admin Login' : 'Student Login'}
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
            Please enter your {isAdmin ? 'Admin ID' : 'Student ID'} and Password
          </p>

          {/* Login Form */}
          <form className="space-y-4 animate-bounceIn" onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                placeholder={isAdmin ? "Admin ID" : "Student ID"}
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105 w-full"
            >
              Login
            </button>
          </form>

          {/* Switch between Admin and Student Login */}
          <div className="mt-6">
            <p className="text-lg font-light">
              {isAdmin ? 'Want to login as Student?' : 'Want to login as Admin?'}{' '}
              <button
                onClick={() => setIsAdmin(!isAdmin)}
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
        </div>
      </div>
    </div>
  );
};

export default Login;

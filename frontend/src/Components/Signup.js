import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen">
      {/* Left Side: Background Image */}
      <div
        className="w-1/2 h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Side: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <img src={logo} className="h-12 w-auto mb-8" alt="Logo" />

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">
            Sign Up
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
            Choose your role to get started.
          </p>

          {/* Admin and Student Signup Buttons */}
          <div className="space-x-4 mb-6 animate-bounceIn">
            <button
              onClick={() => navigate('/admin-signup')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
            >
              Admin Signup
            </button>

            <button
              onClick={() => navigate('/student-signup')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
            >
              Student Signup
            </button>
          </div>

          {/* Already have an account */}
          <div className="mt-6">
            <p className="text-lg font-light">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../Photos/logo.jpg";
import bg from "../Photos/1646134230phpSqwzFt.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-200"></div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between p-4 bg-transparent">
        <img src={logo} className="h-12 w-auto" alt="Logo" />
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/notices" className="text-white hover:text-gray-200">Notices</Link>
          <Link to="/events" className="text-white hover:text-gray-200">Events</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center flex-grow">
        <div className="relative z-10 text-center max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Newton School of Technology Notice Board
          </h1>
          <p className="text-lg text-blue-500 mb-6">
            Stay updated with the latest announcements, events, and information. Whether you're an admin, faculty, or student, log in to share and view important notices.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => navigate('/loginAdmin')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Log In as Admin
            </button>
            <button
              onClick={() => navigate('/loginStudent')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Log In as Student
            </button>
          </div>
          <p className="text-blue-500 mb-2">Don't have an account?</p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Gradient Background */}
      <div
        className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
          <img src={logo} className="h-12 w-auto" alt="Logo" />
          <nav className="space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 font-semibold">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 font-semibold">About</Link>
            <Link to="/notices" className="text-white hover:text-gray-300 font-semibold">Notices</Link>
            <Link to="/events" className="text-white hover:text-gray-300 font-semibold">Events</Link>
            <Link to="/login" className="text-white hover:text-gray-300 font-semibold">Login</Link>
            <Link to="/signup" className="text-white hover:text-gray-300 font-semibold">Sign Up</Link>
          </nav>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Newton School of Technology Notice Board
          </h1>
          <p className="text-xl font-light mb-6">
            Stay updated with the latest announcements, events, and information. Whether you're an admin, faculty, or student, explore the latest notices with ease.
          </p>

          {/* Get Started Button */}
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/notices" className="hover:underline">Notices</Link>
            <Link to="/events" className="hover:underline">Events</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </div>
          <p className="text-sm">© 2024 Newton School of Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

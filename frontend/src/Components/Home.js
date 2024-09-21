import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const Home = () => {
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle navbar visibility
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle state between true/false
  };

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
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6">
          <img src={logo} className="h-8 md:h-12 w-auto" alt="Logo" />
          <nav className="hidden md:flex space-x-4 md:space-x-6">
            <Link to="/" className="text-white text-sm md:text-base hover:text-gray-300 font-semibold">Home</Link>
            <Link to="/about" className="text-white text-sm md:text-base hover:text-gray-300 font-semibold">About</Link>
            <Link to="/login" className="text-white text-sm md:text-base hover:text-gray-300 font-semibold">Notices</Link>
            <Link to="/login" className="text-white text-sm md:text-base hover:text-gray-300 font-semibold">Login</Link>
            <Link to="/signup" className="text-white text-sm md:text-base hover:text-gray-300 font-semibold">Sign Up</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="text-white cursor-pointer md:hidden z-96" onClick={toggleNavbar}>
            {isNavbarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>

        {/* Mobile Navbar (Visible when toggled) */}
        <nav
          className={`absolute w-4/12 top-0 left-0 h-screen z-50 bg-blue-900 text-white flex flex-col items-center md:hidden transition-transform duration-300 ${
            isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Link to="/" className="p-4 hover:text-gray-300 font-semibold" onClick={toggleNavbar}>Home</Link>
          <Link to="/about" className="p-4 hover:text-gray-300 font-semibold" onClick={toggleNavbar}>About</Link>
          <Link to="/notices" className="p-4 hover:text-gray-300 font-semibold" onClick={toggleNavbar}>Notices</Link>
          <Link to="/login" className="p-4 hover:text-gray-300 font-semibold" onClick={toggleNavbar}>Login</Link>
          <Link to="/signup" className="p-4 hover:text-gray-300 font-semibold" onClick={toggleNavbar}>Sign Up</Link>
        </nav>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Newton School of Technology Notice Board
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Stay updated with the latest announcements, events, and information. Whether you're an admin, faculty, or student, explore the latest notices with ease.
          </p>

          {/* Get Started Button */}
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 md:py-8 z-50">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-4 md:space-x-8 mb-4">
            <Link to="/about" className="hover:underline text-sm md:text-base">About</Link>
            <Link to="/notices" className="hover:underline text-sm md:text-base">Notices</Link>
            <Link to="/login" className="hover:underline text-sm md:text-base">Login</Link>
            <Link to="/signup" className="hover:underline text-sm md:text-base">Sign Up</Link>
          </div>
          <p className="text-xs md:text-sm">© 2024 Newton School of Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

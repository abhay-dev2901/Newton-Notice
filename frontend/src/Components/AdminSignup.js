import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const AdminSignup = () => {
  const [adminDetails, setAdminDetails] = useState({
    adminId: '',
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle Admin Signup Logic
    console.log(adminDetails);
    navigate('/login');
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

      {/* Right Side: Admin Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <img src={logo} className="h-12 w-auto mb-8" alt="Logo" />

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">
            Admin Signup
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fadeIn">
            Please enter your details to create an Admin account
          </p>

          {/* Signup Form */}
          <form className="space-y-4 animate-bounceIn" onSubmit={handleSignup}>
            <div>
              <input
                type="text"
                name="adminId"
                value={adminDetails.adminId}
                onChange={handleChange}
                placeholder="Admin ID"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={adminDetails.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={adminDetails.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={adminDetails.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105 w-full"
            >
              Signup
            </button>
          </form>

          {/* Already have an account */}
          <div className="mt-6">
            <p className="text-lg font-light">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import logo from "../Photos/Newton x Rishihood.png";
import hero from "../Photos/RU-Website-HomeBanner-1.png";

const AdminSignup = () => {
  const backend_url = "https://newton-notice-server.vercel.app";
  // const localHost = "http://localhost:3003"
  const [adminDetails, setAdminDetails] = useState({
    adminId: 0,
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: name === 'adminId' ? parseInt(value) : value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ba}/admin/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminDetails),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Admin created Successfully");
        toast.success("Admin Signup successful"); // Show success toast
        navigate('/adminLogin');
      } else {
        setMessage(data.message || "Something went wrong");
        toast.error(data.message || "Something went wrong"); // Show error toast
      }
    } catch (err) {
      setMessage("Error occurred while Signing up");
      toast.error("Error occurred while Signing up"); // Show error toast
    }
  };

  return (
    <div className="relative flex min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
      {/* Left Side: Background Image */}
      <div
        className="md:w-1/2 w-0 h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Side: Admin Signup Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white">
        <img src={logo} className="h-12 w-auto mb-8" alt="Logo" />

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">
            Admin Signup
          </h1>
          <p className="md:text-lg text-sm text-gray-600 mb-6 animate-fadeIn">
            Please enter your details to create an Admin account
          </p>

          {/* Signup Form */}
          <form className="space-y-6 animate-bounceIn" onSubmit={handleSignup}>
            <div>
              <input
                type="number"
                name="adminId"
                value={adminDetails.adminId}
                onChange={handleChange}
                placeholder="Admin ID"
                className="md:w-full w-10/12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="md:w-full w-10/12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="md:w-full w-10/12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="md:w-full w-10/12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105 md:w-full w-8/12"
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
            <p className='text-lg text-red'>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;

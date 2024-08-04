import React from 'react';

const LoginAdmin = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-200"></div>

      {/* Login Form */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white bg-opacity-90 rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Login as Admin</h1>
        <form className="flex flex-col items-center space-y-4 w-full max-w-md">
          <div className="w-full">
            <label htmlFor="adminId" className="block text-gray-700 mb-2">Admin ID:</label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200 mt-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;




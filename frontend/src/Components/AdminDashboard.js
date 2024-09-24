import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="p-8 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-slideIn">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 animate-bounceIn">
          This feature is currently under construction.
        </p>

        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

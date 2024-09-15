import React from 'react';
import pic from "../Photos/IMG_5965_3-removebg-preview.png"

const About = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Banner Section */}
                <div className="bg-blue-600 text-white p-6 text-center">
                    <h1 className="text-3xl font-bold mb-2">About Newton Notice Board</h1>
                    <p className="text-lg">Keeping You Connected with Important Updates</p>
                </div>

                {/* Introduction Section */}
                <section className="p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Newton Notice Board is an intuitive platform designed to streamline the process of posting and viewing notices for students, faculty, and administrators. Whether it's academic updates, event announcements, or placement opportunities, our notice board ensures that you never miss important information. The app categorizes notices for easy access, provides search and bookmark functionality, and is tailored to serve the needs of our institution.
                    </p>
                </section>

                {/* Features Section */}
                <section className="bg-gray-50 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-blue-600">Seamless Notice Posting</h3>
                            <p className="text-gray-600">Admins can easily post new notices categorized under relevant sections.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-blue-600">Category-Based Organization</h3>
                            <p className="text-gray-600">Notices are organized by categories like Academic, Events, Placements, and more.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-blue-600">Search & Filter Notices</h3>
                            <p className="text-gray-600">Easily search for specific notices by subject, date, or category.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-blue-600">Bookmark Important Notices</h3>
                            <p className="text-gray-600">Save important notices to your bookmarks for quick access later.</p>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        At Newton Notice Board, our mission is to foster a well-connected academic community by making information easily accessible to everyone. Whether you're a student looking for the latest campus updates, a faculty member posting departmental news, or an admin sharing important deadlines, our goal is to simplify communication and keep everyone in the loop.
                    </p>
                </section>

                {/* Meet the Developer Section */}
                <section className="bg-gray-50 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Developer</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <img
                            src={pic}
                            alt="Developer"
                            className="rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-6"
                        />
                        <p className="text-gray-600 leading-relaxed">
                            Hi! I'm Abhay Pratap Rana, a passionate full-stack developer who thrives on building solutions that make life easier. Newton Notice Board was developed to create a simple, yet effective platform for our institution, where all notices can be managed efficiently. I'm constantly working to improve the platform and add new features to serve our community better.
                        </p>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-blue-600 text-white p-4 text-center">
                    <p>&copy; 2024 Newton Notice Board. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default About;


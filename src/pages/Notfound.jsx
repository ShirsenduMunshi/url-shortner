import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-[#b7d7a8] mb-4">404</h1>
      <p className="text-lg text-gray-400 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="px-6 py-3 bg-[#b7d7a8] text-[#0b1120] rounded-md font-semibold hover:bg-[#a3c59c] transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;



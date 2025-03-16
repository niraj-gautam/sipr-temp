import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F0EFF4]">
      <div className="text-center px-4">
        <AlertCircle className="w-16 h-16 text-[#8c1616] mx-auto mb-6" />
        <h1 className="text-4xl font-['Montserrat'] font-semibold mb-4">
          Page Not Found
        </h1>
        <p className="text-xl font-['Baskerville'] text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-[#8c1616] text-white hover:bg-[#7a1313] transition-colors font-['Montserrat']"
        >
          <Home className="w-5 h-5 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
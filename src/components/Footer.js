import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 backdrop-blur-lg py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="https://github.com/kadelcode" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayodele-kadiri-8bb64a23a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
            LinkedIn
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
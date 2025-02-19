import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center text-white z-10 bg-gray-600 backdrop-blur-sm shadow-lg">
      <Link to="/" className="font-bold text-xl">KADEL</Link>
      <div className="flex items-center space-x-4">
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
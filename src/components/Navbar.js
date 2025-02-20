import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-gray-900 via-purple-950/85 to-gray-500/50 p-4 flex justify-between items-center">
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
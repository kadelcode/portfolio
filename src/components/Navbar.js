import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon as MenuIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-40 backdrop-blur-md bg-gradient-to-r from-gray-900 via-purple-950/85 to-gray-500/50 p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">KADEL</Link>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden'> {/* Hidden on medium and larger screens */}
        <button onClick={toggleMobileMenu} className='text-white'>
          {isMobileMenuOpen ? (
            <XMarkIcon className='h-6 w-6' /> // Close icon
          ) : (
            <MenuIcon className='h-6 w-6' /> // Menu icon
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/projects" className='hover:text-gray-300 text-white'>
          Projects
        </Link>
        <Link to="/contact" className='hover:text-gray-300 text-white'>
          Contact
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-3xl p-4 flex flex-col items-center space-y-2 md:hidden">
          <Link to="/projects" className='hover:text-gray-300 text-white'>
            Projects
          </Link>
          <Link to="/contact" className='hover:text-gray-300 text-white'>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
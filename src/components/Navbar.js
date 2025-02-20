import { React, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon as MenuIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    /*if (isMobileMenuOpen) { // Only add listener when menu is open
      document.addEventListener('click', handleClickOutside);
    }*/

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up
    };
  }, []);

  return (
    <nav className="z-40 backdrop-blur-md bg-gray-800 p-4 flex justify-between items-center"
    ref={navbarRef}
    >
      <Link to="/" className="text-purple-400 font-audiowide font-bold text-xl">KADELCODE</Link>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden'> {/* Hidden on medium and larger screens */}
        <button onClick={toggleMobileMenu} className='text-white'>
          {isMobileMenuOpen ? (
            <XMarkIcon className='h-8 w-8' /> // Close icon
          ) : (
            <MenuIcon className='h-8 w-8' /> // Menu icon
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
        <div className="absolute top-14 left-0 w-full bg-gray-700 backdrop-blur-3xl p-4 flex flex-col items-center space-y-2 md:hidden" ref={dropdownRef} // Add ref to the dropdown
        >
          <Link to="/projects" className='hover:text-gray-300 text-white' onClick={closeMobileMenu}> {/* Close on link click */}
            Projects
          </Link>
          <Link to="/contact" className='hover:text-gray-300 text-white' onClick={closeMobileMenu}> {/* Close on link click */}
            Contact
          </Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
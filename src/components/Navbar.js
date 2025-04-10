import { React, useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { Bars3Icon as MenuIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown
  const navbarRef = useRef(null);
  const [navbarHeight, setNavBarHeight] = useState(0); // Store navbar height in state

  const dropdownVariants = {
    open: {
      y: 0, // Slide down
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      y: "-100%", // Slide up and out of view
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }
  
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

  useEffect(() => {
    // Calculate dropdown top position
    if (navbarRef.current) { // Reference the navbar element
      setNavBarHeight(navbarRef.current.offsetHeight); // Update state
    }
  }, []); // Empty dependency array - calculate on mount

  useEffect(() => {
    if (dropdownRef.current && isMobileMenuOpen && navbarHeight > 0) {
      dropdownRef.current.style.top = `${navbarHeight}px`;
    } else if (dropdownRef.current){
      dropdownRef.current.style.top = ``;
    }
  }, [isMobileMenuOpen, navbarHeight]); // Add navbarHeight as a dependency

  return (
    <nav className="z-40 h-16 px-3 fixed top-0 left-0 w-full text-xl backdrop-blur-lg dark:backdrop-blur-2xl text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 flex justify-between items-center"
    ref={navbarRef}
    >
      <Link to="/" className="text-purple-400 font-audiowide font-bold text-xl">KADELCODE</Link>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'> {/* Hidden on medium and larger screens */}
        <button onClick={toggleMobileMenu} className='dark:text-white text-black'>
          {isMobileMenuOpen ? (
            <XMarkIcon className='h-8 w-8' /> // Close icon
          ) : (
            <MenuIcon className='h-8 w-8' /> // Menu icon
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-7 text-black dark:text-white">
        <NavLink 
          to="/about" 
          className={({ isActive }) =>
            isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
          }
          end // Add 'end' prop for exact matching of the root path
        >
          About
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) =>
            isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
          }
          end
        >
          Projects
        </NavLink>


        <NavLink 
          to="/skills" 
          className={({ isActive }) =>
            isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
          }
          end
        >
          Skills
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) =>
            isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
          }
          end
        >
          Contact
        </NavLink>

        <DarkModeToggle />
      </div>

      {/* Mobile Menu (Dropdown) */} {/* Wrap with AnimatePresence for exit animations to correctly */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-14 left-0 w-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 backdrop-blur-3xl p-4 flex flex-col items-center space-y-2 md:hidden"
            ref={dropdownRef} // Ref for the dropdown
            style={{ top: 0 }} // Initial style to avoid flashing
            variants={dropdownVariants} // Add variants
            initial="closed" // Initial state
            animate="open" // Animate to open
            exit="closed" // Animation on exit
          >
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
              end
            > {/* Close on link click */}
              About
            </NavLink>

            <NavLink 
              to="/projects" 
              className={({ isActive }) =>
                isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
              end
            > {/* Close on link click */}
              Projects
            </NavLink>

            <NavLink 
              to="/skills" 
              className={({ isActive }) =>
                isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
              end
            > {/* Close on link click */}
              Skills
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                isActive ? 'text-purple-400 font-bold' : 'hover:text-gray-800 dark:hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
              end
            > {/* Close on link click */}
              Contact
            </NavLink>

            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
};

export default Navbar;
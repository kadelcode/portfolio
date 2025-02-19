import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-gray-800 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-white text-lg font-bold'>
                    MyWebsite
                </div>
                <div className='block md:hidden'>
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-white focus:outline-none'
                    >
                        <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke="currentColor"
                        viewBox='0 0 24 24'
                        xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth="2"
                            d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                            ></path>
                        </svg>

                    </button>
                </div>

                <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <div className='text-white'>
                        <a href='#' className='block md:inline-block mt-2 md:mt-0 mr-4'>
                            Home
                        </a>
                        <a href='#' className="block md:inline-block mt-2 md:mt-0 mr-4">
                            About
                        </a>
                        <a href='#' className='block md:inline-block mt-2 md:mt-0'>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
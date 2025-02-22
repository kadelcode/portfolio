import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='min-h-screen py-12 bg-gray-100 dark:bg-gray-800' // Added background and padding
        >
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold mb-6 text-center'>About Me</h2>
                <div className='flex flex-col md:flex-row gap-8'>{/* Flexbox for responsiveness */}
                    <div className='md:w-1/3'> {/* Image container */}
                        <img
                          src="/images/profile-picture.jpg"
                          alt='Ayodele'
                          className='rounded-lg shadow-lg mx-auto md:mx-0' // Centered on smaller screens
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <p className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Hi, I’m Ayodele Kadiri, a passionate Full-Stack Software Engineer with a strong background in 
                        Django, Node.js, React, and cloud technologies. I enjoy building scalable, high-performance
                        applications that enhance user experience and solve real-world problems.
                        </p>

                        <p>
                        I hold a B.Sc in Electrical Engineering and recently completed the ALX 
                        Software Engineering Program, where I honed my skills in backend and 
                        frontend development, DevOps, and cloud computing. Currently, 
                        I’m working on projects like:
                        </p>

                        <ul>
                            <li>
                            An e-commerce platform using Node.js (Express), React, PostgreSQL/MongoDB, 
                            JWT authentication, and Stripe for payments.
                            </li>

                            <li>
                            An educational platform for entrepreneurs, built with Django, featuring custom 
                            authentication, course management, community forums, and subscription-based access.
                            </li>
                        </ul>

                        <p>
                        I’m currently expanding my knowledge in DevOps, AWS, and networking fundamentals to become a 
                        well-rounded engineer. My goal is to become one of the best full-stack developers 
                        in the world by continuously learning, building impactful projects, and contributing to 
                        open-source communities.
                        </p>

                        <p>
                        When I’m not coding, I enjoy exploring new technologies, mentoring aspiring developers, 
                        and writing about my learning journey.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
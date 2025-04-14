import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='min-h-screen py-12 bg-gray-100 dark:bg-slate-900 dark:text-gray-50 transition-colors duration-300' // Added background and padding
        >
            <div className='mx-4'>
                <h2 className='text-3xl font-bold mb-6 text-center'>About Me</h2>
                <div className='flex flex-col md:flex-row gap-8'>{/* Flexbox for responsiveness */}
                    <div className='md:w-1/3'> {/* Image container */}
                        <img
                          src="/images/kadel-avatar.jpeg"
                          alt="Kadel's Avatar"
                          className='rounded-lg shadow-lg mx-auto md:mx-0' // Centered on smaller screens
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <motion.p
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        Hi, I’m Ayodele Kadiri, a passionate Full-Stack Software Engineer with a strong background in 
                        Django, Node.js, React, and cloud technologies. I enjoy building scalable, high-performance
                        applications that enhance user experience and solve real-world problems.
                        </motion.p><br />

                        <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        I hold a B.Sc in Electrical Engineering and recently completed the ALX 
                        Software Engineering Program, where I honed my skills in backend and 
                        frontend development, DevOps, and cloud computing. Currently, 
                        I’m working on projects like:
                        </motion.p><br />

                        <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 6 }}
                        className='text-gray-800 dark:text-gray-300 leading-relaxed list-item'>
                            <li className='list-disc ml-10'>
                            An e-commerce platform using Node.js (Express), React, PostgreSQL/MongoDB, 
                            JWT authentication, and Stripe for payments.
                            </li>

                            <li className='list-disc ml-10'>
                            An educational platform for entrepreneurs, built with Django, featuring custom 
                            authentication, course management, community forums, and subscription-based access.
                            </li>
                        </motion.ul><br />

                        <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 3}}
                        className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        I’m currently expanding my knowledge in DevOps, AWS, Web3 and networking fundamentals to become a 
                        well-rounded engineer. My goal is to become one of the best full-stack developers 
                        in the world by continuously learning, building impactful projects, and contributing to 
                        open-source communities.
                        </motion.p><br />

                        <motion.p
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ ease: 'easeIn', duration: 2}}
                        className='text-gray-800 dark:text-gray-300 leading-relaxed'>
                        When I’m not coding, I enjoy gaming, exploring new technologies, mentoring aspiring developers, 
                        and writing about my learning journey.
                        </motion.p><br />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About
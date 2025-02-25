import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            {/* Animated 404 Text */}
            <motion.h1
              className="text-4xl font-bold text-red-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                404 - Page Not Found
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
                Oops! The page you are looking for does not exist.
            </motion.p>

            {/* Animated Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Link
                  to="/"
                  className="mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2">
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
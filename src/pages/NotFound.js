import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
            to="/"
            className="mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
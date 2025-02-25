import React from "react";

const Spinner = () => {
    return (
        <div className="min-h-screen flex justify-center bg-white dark:bg-gray-800 bg-opacity-75 z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mt-52"></div>
        </div>
    );
};

export default Spinner;
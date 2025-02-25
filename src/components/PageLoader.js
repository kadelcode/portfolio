import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import animationData from "../assets/lottie_cublic_spinner.json";
import Lottie from "lottie-react";


const PageLoader = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");

        // Timeout to handle slow network cases
        const timeout = setTimeout(() => {
            setError("This page is taking too long to load. Please check your network.");
            setLoading(false);
        }, 10000) // 10 seconds timeout

        // Simulating network delay (replace with actual API call or fetching logic)
        setTimeout(() => {
            setLoading(false);
            clearTimeout(timeout);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [location.pathname]); // Runs on route change

    return (
        <>
            {loading && (
                <div className="min-h-screen flex justify-center bg-white dark:bg-gray-800 bg-opacity-75 z-50">
                    <Lottie animationData={animationData} loop={true}/>
                </div>
            )}
            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
            {!loading && children}
        </>
    );
};

export default PageLoader;
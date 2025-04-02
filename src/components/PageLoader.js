import React, { useState, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import animationData from "../assets/lottie_cubic_spinner.json";
import Lottie from "lottie-react";

const PageLoader = ({ children }) => {
    const location = useLocation();
    const navigationType = useNavigationType(); // Detects navigation type (PUSH, POP, REPLACE)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (navigationType !== "PUSH") return; // Only show loader on user-initiated navigation

        setLoading(true);
        setError("");

        const timeout = setTimeout(() => {
            setError("This page is taking too long to load. Please check your network.");
            setLoading(false);
        }, 10000); // 10 seconds timeout

        setTimeout(() => {
            setLoading(false);
            clearTimeout(timeout);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [location.pathname, navigationType]);

    return (
        <>
            {loading && (
                <div className="h-[calc(100vh-4rem)] overflow-hidden flex justify-center items-center bg-white dark:bg-gray-800 bg-opacity-75 z-50">
                    <div>
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                </div>
            )}
            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
            {!loading && children}
        </>
    );
};

export default PageLoader;

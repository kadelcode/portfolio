import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";


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
        }, 500); // Simulating a 1/2s page load

        return () => clearTimeout(timeout);
    }, [location.pathname]); // Runs on route change

    return (
        <>
            {loading && <Spinner />}
            {error && <div className="text-red-500 text-center mt-4">{error}</div>}
            {!loading && children}
        </>
    );
};

export default PageLoader;
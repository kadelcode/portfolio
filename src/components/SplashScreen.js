import React, { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import codeAnimation from '../assets/lottie_code.json';
import SplashText from "./SplashText";


const SplashScreen = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
            onFinish(); // Hide splash screen after animation
        }, 3000); // Adjust time as needed
    }, [onFinish]);

    return isVisible ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50 transition-opacity duration-500 dark:bg-gray-800">
            {/*<Lottie animationData={codeAnimation} loop={true} />*/}
            <SplashText />
        </div>
    ) : null;
};

export default SplashScreen;
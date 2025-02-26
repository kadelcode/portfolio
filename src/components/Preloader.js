import React from 'react';
import Lottie from 'lottie-react';
import lottieCodeData from '../assets/lottie_code.json';

const Preloader = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-900 flex justify-center items-center z-50'>
            <div className='w-52 h-52'>
                <Lottie
                animationData={lottieCodeData}
                loop={true}
                />
            </div>
        </div>
    )
}

export default Preloader;
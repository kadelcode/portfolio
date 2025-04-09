import { motion } from 'framer-motion'

const text = "Kadelcode";

const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        }
    })
};

export default function SplashText() {
    return (
        <div>
            <h1 className='text-purple-400 font-audiowide text-5xl font-bold'>
                {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={letterVariants}
                      className="inline-block"
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
}
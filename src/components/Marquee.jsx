import React from "react";
import { motion } from "framer-motion";
import "../styles/Marquee.css";

// Define Variants
const marqueeVariants = {
  loop: {
    x: [0, -235],
    transition: {
      x: {
        repeat: Infinity,
        duration: 20, // Increase the duration to slow it down
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="marquee opacity-60 mt-10">
      {/* Using framer motion */}
      <motion.div
        className="track flex flex-row gap-5"
        variants={marqueeVariants}
        animate="loop"
        initial="loop" // Add initial to start the animation immediately
      >
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/spur.png" alt="spur_logo" className="h-10" />
        <img src="src/assets/intersport.png" alt="spur_logo" className="h-10" />
      </motion.div>
    </div>
  );
};

export default Marquee;

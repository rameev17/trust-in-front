import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const MotionWrapper = ({ children }) => {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

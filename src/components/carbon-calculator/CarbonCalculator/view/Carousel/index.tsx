import { motion } from "framer-motion";
import React from "react";

const Carousel = ({
  step,
  children,
}: {
  step: number;
  children: React.ReactNode;
}) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "20%" : "-20%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "-20%" : "20%",
      opacity: 0,
    }),
  };
  return (
    <motion.div
      key={step}
      custom={step}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default Carousel;

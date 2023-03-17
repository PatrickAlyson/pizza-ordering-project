import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonHoverVariants, homeVariants } from "../utils/motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button variants={buttonHoverVariants} whileHover="whileHover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;

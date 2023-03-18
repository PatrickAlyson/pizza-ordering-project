import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonHoverVariants, containerHomeVariants } from "../utils/motion";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <motion.div
      className={styles.container}
      variants={containerHomeVariants}
      initial="hidden"
      animate="show"
      exit="exit"
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

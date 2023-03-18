import React from "react";
import { motion } from "framer-motion";
import {
  headerTitleVariants,
  svgVariances,
  pathVariants,
} from "../utils/motion";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <motion.svg
          className={styles.pizzaSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariances}
          initial="hidden"
          animate="show"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        className={styles.title}
        variants={headerTitleVariants}
        initial="hidden"
        animate="show"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;

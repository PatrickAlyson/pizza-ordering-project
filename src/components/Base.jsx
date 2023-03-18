import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "../styles/Base.module.css";

import {
  containerBaseVariants,
  nextBaseVariants,
  buttonHoverVariants,
  listHoverVariants,
} from "../utils/motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className={styles.container}
      variants={containerBaseVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={listHoverVariants}
              whileHover="whileHover"
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextBaseVariants}>
          <Link to="/toppings">
            <motion.button
              variants={buttonHoverVariants}
              whileHover="whileHover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;

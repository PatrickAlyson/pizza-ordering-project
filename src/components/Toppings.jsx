import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  listHoverVariants,
  buttonHoverVariants,
  containerToppingsVariants,
} from "../utils/motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerToppingsVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              variants={listHoverVariants}
              whileHover="whileHover"
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonHoverVariants} whileHover="whileHover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;

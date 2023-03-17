import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { containerOrderVariants, childVariants } from "../utils/motion";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerOrderVariants}
      initial="hidden"
      animate="show"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;

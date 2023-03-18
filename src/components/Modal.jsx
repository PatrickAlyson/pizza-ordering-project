import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { backdropVariances, modalVariants } from "../utils/motion";

import styles from "../styles/Modal.module.css";

function Modal({ showModal, setPizza }) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className={styles.backdrop}
          variants={backdropVariances}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div className={styles.modal} variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button onClick={() => setPizza({ base: "", toppings: [] })}>
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;

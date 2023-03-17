import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { backdropVariances, modalVariants } from "../utils/motion";

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariances}
          initial="hidden"
          animate="show"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;

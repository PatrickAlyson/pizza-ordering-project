export const containerOrderVariants = {
  hidden: {
    opacity: 0,
    x: "100vh",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const containerBaseVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

export const containerToppingsVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

export const nextBaseVariants = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export const headerTitleVariants = {
  hidden: {
    y: -250,
  },
  show: {
    y: 0,
    transition: { delay: 0.2, type: "spring", stiffness: 120 },
  },
};

export const containerHomeVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const buttonHoverVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

export const listHoverVariants = {
  whileHover: {
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: { type: "spring", stiffness: 300 },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const backdropVariances = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  show: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

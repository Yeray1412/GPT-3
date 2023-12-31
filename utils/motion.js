export const navMotion = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      stiffness: 150,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

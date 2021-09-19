import { motion } from "framer-motion";

import styles from "./loader.module.scss";

const loaderVariants = {
  anim_1: {
    y: [0, -25],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  anim_2: {
    y: [0, -35],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
        delay: 0.15,
      },
    },
  },
  anim_3: {
    y: [0, -50],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.loadingAnimContainer}>
        <motion.div
          className={styles.loaderObj}
          variants={loaderVariants}
          animate="anim_1"
        ></motion.div>
        <motion.div
          className={styles.loaderObj}
          variants={loaderVariants}
          animate="anim_2"
        ></motion.div>
        <motion.div
          className={styles.loaderObj}
          variants={loaderVariants}
          animate="anim_3"
        ></motion.div>
        <motion.div
          className={styles.loaderObj}
          variants={loaderVariants}
          animate="anim_2"
        ></motion.div>
        <motion.div
          className={styles.loaderObj}
          variants={loaderVariants}
          animate="anim_1"
        ></motion.div>
      </div>
      <h1>LOADING</h1>
    </motion.div>
  );
};

export default Loader;

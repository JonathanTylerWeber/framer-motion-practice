import { motion } from "motion/react";

export default function StaggerChildren() {
  const childVariants = {
    initial: { x: 50, opacity: 0 },
    start: { x: 0, opacity: 1 },
    tapState: { backgroundColor: "#0f0" },
  };

  return (
    <>
      <motion.div
        variants={{
          initial: { skewX: -10 },
          start: { skewX: 0 },
          hoverState: { scale: 1.05 },
        }}
        className="p-10 rounded-2xl bg-white flex items-center flex-col space-y-6"
        initial="initial"
        animate="start"
        whileHover="hoverState"
        whileTap="tapState"
        // transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
        transition={{
          delayChildren: 1, // delay before start of child animations
          staggerChildren: 0.2,
          staggerDirection: -1,
          when: "afterChildren",
          delay: 1, // delay before start of this div’s animation
        }}
      >
        <motion.div
          className="w-40 h-8 bg-orange-400 rounded-xl"
          variants={childVariants}
        />
        <motion.div
          className="w-40 h-8 bg-orange-400 rounded-xl"
          variants={childVariants}
        />
        <motion.div
          className="w-40 h-8 bg-orange-400 rounded-xl"
          variants={childVariants}
        />
      </motion.div>
    </>
  );
}

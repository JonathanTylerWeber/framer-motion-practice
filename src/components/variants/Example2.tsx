import { motion } from "motion/react";

export default function Example2() {
  const childVariants = {
    start: { rotate: -180 },
    hoverState: { borderRadius: "100px" },
    tapState: { backgroundColor: "#f00" },
  };

  return (
    <>
      <motion.div
        variants={{
          start: { rotate: 180, borderRadius: "30px" },
          hoverState: { borderRadius: "200px" },
          tapState: { backgroundColor: "#ffd700" },
        }}
        className="w-64 h-64 bg-white flex justify-center items-center"
        animate="start"
        whileHover="hoverState"
        whileTap="tapState"
      >
        <motion.div
          variants={childVariants}
          className="w-40 h-40 bg-orange-400 rounded-xl"
        />
      </motion.div>
    </>
  );
}

import { motion } from "motion/react";

export default function KeyExample() {
  return (
    <>
      <motion.div
        className="bg-white w-48 h-48 rounded-2xl justify-items-center items-center"
        animate={{
          scale: [0.5, 2, 0.5, 1],
        }}
        transition={{ duration: 3 }}
      ></motion.div>
    </>
  );
}

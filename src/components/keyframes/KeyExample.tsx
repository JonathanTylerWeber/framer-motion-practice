import { motion } from "motion/react";

export default function KeyExample() {
  return (
    <>
      <motion.div
        className="bg-white w-48 h-48 rounded-2xl justify-items-center items-center"
        animate={{
          x: [0, 200, 200, 0, 0],
          y: [0, 0, 200, 200, 0],
          // rotate: -360,
          // backgroundColor: ["#fa0", "#ff1493", "#fa0"],
        }}
        // transition={{ duration: 4, ease: "linear" }}
        transition={{ duration: 4, times: [0, 0.08, 0.16, 0.25, 1] }}
      ></motion.div>
    </>
  );
}

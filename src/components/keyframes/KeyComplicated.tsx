import { motion } from "motion/react";

export default function KeyExample() {
  return (
    <>
      <div className="w-[400px] h-[400px] relative">
        <motion.div
          className="bg-black w-48 h-48 rounded-full absolute justify-items-center items-center top-0"
          animate={{
            x: [0, 80, 80, 160],
            rotate: [0, 0, 180, 180],
          }}
          transition={{
            x: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              times: [0, 0.3, 0.7, 1],
              ease: "linear",
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              times: [0, 0.35, 0.65, 1],
              ease: "linear",
            },
          }}
        >
          <div className="w-24 h-24 rounded-xl bg-white absolute left-[-96px] top-[50px]"></div>
        </motion.div>

        <motion.div
          className="bg-black w-48 h-48 rounded-full absolute justify-items-center items-center top-96"
          animate={{
            x: [0, 80, 80, 160],
            rotate: [0, 0, 180, 180],
          }}
          transition={{
            x: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              times: [0, 0.3, 0.7, 1],
              ease: ["circIn", "linear", "circOut"],
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              times: [0, 0.35, 0.65, 1],
              ease: ["circIn", "linear", "circOut"],
            },
          }}
        >
          <div className="w-24 h-24 rounded-xl bg-white absolute left-[-96px] top-[50px]"></div>
        </motion.div>
      </div>
    </>
  );
}

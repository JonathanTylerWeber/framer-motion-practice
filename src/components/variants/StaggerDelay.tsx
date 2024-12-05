import { motion } from "motion/react";

export default function StaggerDelay() {
  const childVariants = {
    initial: { scale: 0, opacity: 0 },
    start: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: custom },
    }),
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="start"
        transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
        className="bg-white w-48 h-48 rounded-2xl grid grid-cols-3 justify-items-center items-center"
        style={{
          gridTemplateAreas: `
            "dot1 dot2 dot3"
            "dot4 dot5 dot6"
            "dot7 dot8 dot9"
          `,
        }}
      >
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot1" }}
          custom={0.5}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot2" }}
          custom={1}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot3" }}
          custom={0.5}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot4" }}
          custom={1}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot5" }}
          custom={1.5}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot6" }}
          custom={1}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot7" }}
          custom={0.5}
        />

        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot8" }}
          custom={1}
        />

        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full bg-orange-400"
          style={{ gridArea: "dot9" }}
          custom={0.5}
        />
      </motion.div>
    </>
  );
}

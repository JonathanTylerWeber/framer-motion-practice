import { motion } from "motion/react";

export default function StaggerDynamic() {
  const childVariants = {
    initial: () => ({
      scale: 0,
      opacity: 0,
      backgroundColor: `hsl(${Math.floor(Math.random() * 360)},80%, 50%)`,
    }),
    start: { scale: 1, opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="start"
        transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
        className="bg-white w-52 h-52 rounded-lg grid grid-cols-3 justify-items-center items-center"
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
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot1" }}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot4" }}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot7" }}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot8" }}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot9" }}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot6" }}
        />
        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot3" }}
        />

        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot2" }}
        />

        <motion.div
          variants={childVariants}
          className="w-10 h-10 rounded-full"
          style={{ gridArea: "dot5" }}
        />
      </motion.div>
    </>
  );
}

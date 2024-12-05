import { motion } from "framer-motion";

export function Example() {
  const variants = {
    initial: { scale: 0, opacity: 0 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    start: (custom: any) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: custom },
    }),
  };

  const dotStyle = {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "hsl(37, 100%, 57%)",
  };

  return (
    <div
      style={{
        width: 200,
        height: 200,
        borderRadius: 30,
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          backgroundColor: "transparent",
          position: "absolute",
          left: 25,
          top: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignContent: "space-between",
        }}
      >
        <motion.div
          style={dotStyle}
          custom={0.5}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.2}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.5}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.2}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={1}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.2}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.5}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.2}
          variants={variants}
          initial="initial"
          animate="start"
        />
        <motion.div
          style={dotStyle}
          custom={0.5}
          variants={variants}
          initial="initial"
          animate="start"
        />
      </motion.div>
    </div>
  );
}

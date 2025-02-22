import { motion, useMotionValue, useTransform } from "motion/react";

export default function ColorsInterpolation() {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["hsl(60, 75%, 50%)", "hsl(180, 75%, 50%)", "hsl(300, 75%, 50%)"]
  );

  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: background,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: "#fff",
          x,
          cursor: "grab",
        }}
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        whileTap={{ cursor: "grabbing" }}
      />
    </motion.div>
  );
}

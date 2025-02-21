import { motion, useMotionValue, useTransform } from "motion/react";

export function DragTransform() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
  const rotate = useTransform(x, [-150, 150], [-90, 90]);

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: "#fff",
        x: x,
        scale: scale,
        rotate: rotate,
        cursor: "grab",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileTap={{ cursor: "grabbing" }}
    />
  );
}

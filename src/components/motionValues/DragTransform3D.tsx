import { motion, useMotionValue, useTransform } from "motion/react";

export function DragTransform3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        background:
          "radial-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3))",
        perspective: 800,
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          left: -25,
          top: -25,
          position: "relative",
          x: x,
          y: y,
          rotateX: rotateX,
          rotateY: rotateY,
          cursor: "grab",
        }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.6}
        whileTap={{ cursor: "grabbing" }}
      />
    </div>
  );
}

import { useCycle, motion } from "motion/react";

export default function Variants() {
  const [cycle, next] = useCycle(
    "center",
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft"
  );

  const variants = {
    center: { x: 0, y: 0 },
    topLeft: { x: -100, y: -100 },
    topRight: { x: 100, y: -100 },
    bottomRight: { x: 100, y: 100 },
    bottomLeft: { x: -100, y: 100 },
  };

  return (
    <motion.div
      animate={cycle}
      variants={variants}
      onHoverStart={() => next()}
      className="w-48 h-16 text-2xl bg-white rounded-full flex justify-center items-center font-bold"
    >
      Log in
    </motion.div>
  );
}

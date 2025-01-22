import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, backInOut } from "framer-motion";

const items = [
  { distance: 0, color: "#fc6" },
  { distance: 100, color: "#f74" },
  { distance: 200, color: "#e44" },
  { distance: 300, color: "#b6c" },
  { distance: 400, color: "#75c" },
  { distance: 500, color: "#45b" },
  { distance: 600, color: "#fc6" },
  { distance: 700, color: "#f74" },
  { distance: 800, color: "#e44" },
  { distance: 900, color: "#b6c" },
  { distance: 1000, color: "#75c" },
  { distance: 1100, color: "#45b" },
];

export default function InOutRanges() {
  const scrollY = useMotionValue(0);

  const rotate = useTransform(scrollY, [0, -200], [0, 360]);
  const rotateWithEasing = useTransform(scrollY, [0, -200], [0, 360], {
    ease: backInOut,
  });
  const rotateWithoutClamp = useTransform(scrollY, [0, -200], [0, 360], {
    clamp: false,
  });

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  return (
    <div className="w-[730px] h-[400px] relative">
      {/* Left Pane */}
      <div className="absolute top-0 left-0 w-[365px] h-[400px] bg-gradient-to-b from-green-200 to-green-900">
        {/* Boxes */}
        <div className="absolute top-10 left-10 flex flex-col gap-10 items-start">
          <motion.div
            className="relative w-20 h-20 bg-white rounded-xl"
            style={{ rotate }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-[1px] -translate-y-10 w-[2px] h-10 bg-green-300 rounded" />
          </motion.div>
          <motion.div
            className="relative w-20 h-20 bg-yellow-300 rounded-xl"
            style={{ rotate: rotateWithEasing }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-[1px] -translate-y-10 w-[2px] h-10 bg-white rounded" />
          </motion.div>
          <motion.div
            className="relative w-20 h-20 bg-orange-400 rounded-xl"
            style={{ rotate: rotateWithoutClamp }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-[1px] -translate-y-10 w-[2px] h-10 bg-white rounded" />
          </motion.div>
        </div>
        {/* Text Labels */}
        <div className="absolute top-5 left-40 flex flex-col gap-0 text-white font-sans text-base leading-[88px]">
          <p>Default</p>
          <p>With easing function</p>
          <p>Clamp disabled</p>
        </div>
      </div>

      {/* Right Pane */}
      <motion.div
        className="absolute top-0 left-[365px] w-[365px] h-[400px] overflow-hidden cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex flex-col gap-10 items-center justify-start bg-gradient-to-b from-white to-gray-400 py-0 px-8 pb-10"
          drag="y"
          dragConstraints={{ top: -height + 400, bottom: 0 }}
          style={{ y: scrollY }}
          ref={ref}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-16 rounded-full font-sans font-medium text-white text-2xl leading-tight"
              style={{ backgroundColor: item.color }}
            >
              {item.distance}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

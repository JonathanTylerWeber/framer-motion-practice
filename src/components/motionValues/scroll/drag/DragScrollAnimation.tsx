import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

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
  { distance: 1200, color: "#fc6" },
  { distance: 1300, color: "#f74" },
];

export default function DragScrollAnimation() {
  const scrollY = useMotionValue(0);

  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setHeight(rect.height);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen p-0 m-0">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Buttons Section */}
        <div className="flex justify-evenly items-center w-full h-16 bg-green-600 text-gray-800 font-medium text-sm">
          <motion.div
            className="h-10 px-6 rounded-full bg-white flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onTap={() => animate(scrollY, 0, { duration: 1 })}
          >
            Scroll to top
          </motion.div>
          <motion.div
            className="h-10 px-6 rounded-full bg-white flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onTap={() =>
              animate(scrollY, -200, {
                type: "spring",
                stiffness: 300,
              })
            }
          >
            200
          </motion.div>
          <motion.div
            className="h-10 px-6 rounded-full bg-white flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onTap={() =>
              animate(scrollY, -400, { type: "spring", duration: 1 })
            }
          >
            400
          </motion.div>
          <motion.div
            className="h-10 px-6 rounded-full bg-white flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onTap={() =>
              animate(scrollY, -600, {
                duration: 1,
                ease: [1, -0.65, 0, 1.25],
              })
            }
          >
            600
          </motion.div>
        </div>

        {/* Scrollable Content Section */}
        <div className="relative w-full h-[640px] overflow-hidden mt-16">
          <motion.div
            className="flex flex-col items-center justify-start gap-10 px-8 py-10 bg-gradient-to-b from-white to-gray-300"
            drag="y"
            dragConstraints={{ top: -height + 640, bottom: 0 }}
            style={{ y: scrollY }}
            ref={ref}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full h-16 rounded-2xl flex justify-center items-center text-white text-xl font-semibold"
                style={{ backgroundColor: item.color }}
              >
                {item.distance}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

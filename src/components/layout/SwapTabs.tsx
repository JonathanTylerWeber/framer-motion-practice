import { motion } from "motion/react";
import { useState } from "react";

const tabs = ["Home", "Contact", "About"];

export default function SwapTabs() {
  const [selected, setSelected] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const active = hovered !== null ? hovered : selected;

  return (
    <>
      <div className="relative rounded-full bg-black/20 p-3 flex content-start items-start justify-start">
        {tabs.map((tab, i) => (
          <motion.div
            className="text-white relative p-3 px-10 font-sans text-xl font-bold cursor-pointer"
            key={i}
            onClick={() => setSelected(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {active === i && (
              <motion.div
                className="w-full h-full absolute top-0 left-0 z-0 rounded-full bg-blue-700 pointer-events-none"
                layoutId="selected"
                transition={{ type: "spring", stiffness: 500, damping: 50 }}
              />
            )}
            <p className="relative z-10">{tab}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

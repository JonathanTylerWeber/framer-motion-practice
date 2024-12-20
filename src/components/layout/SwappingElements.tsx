import { motion } from "motion/react";
import { useState } from "react";

const tabs = [
  { name: "Red", color: "#f00" },
  { name: "Purple", color: "#b1f" },
  { name: "Pink", color: "#f08" },
  { name: "Blue", color: "#05f" },
];

export default function SwappingElements() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [formerColor, setFormerColor] = useState(tabs[0].color);

  // Determine which tab is currently active (hovered or selected)
  const active = hovered !== null ? hovered : selected;

  return (
    <div className="rounded-[50px] bg-white/20 p-2.5 flex content-start items-start justify-start">
      {tabs.map(({ name, color }, i) => (
        <motion.div
          className="h-11 relative p-[3px] px-[20px] mr-[5px] font-sans text-[32px] font-bold leading-[38px] cursor-pointer"
          key={i}
          // Animate text color based on active tab
          initial={{ color: i === selected ? "#fff" : "#222" }}
          animate={{ color: i === active ? "#fff" : "#222" }}
          onTap={() => {
            setFormerColor(tabs[selected].color);
            setSelected(i);
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {name}
          {i === active && (
            <motion.div
              className="w-full h-full absolute top-0 left-0 z-[-1] rounded-[30px]"
              layoutId="selected"
              style={{ backgroundColor: color }}
              initial={{ backgroundColor: formerColor }}
              animate={{ backgroundColor: color }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

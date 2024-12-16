import { motion } from "motion/react";
import { useState } from "react";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div
        className={`w-[160px] h-[100px] bg-white bg-opacity-40 rounded-full p-[10px] cursor-pointer flex ${
          isOn ? "justify-end" : "justify-start"
        }`}
        onClick={() => setIsOn(!isOn)}
      >
        <motion.div
          className="w-[80px] h-[80px] bg-white rounded-full"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
    </>
  );
}

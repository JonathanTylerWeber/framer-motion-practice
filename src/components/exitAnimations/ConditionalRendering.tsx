import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ConditionalRendering() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      onTap={() => setIsChecked(!isChecked)}
      className="bg-white rounded-2xl cursor-pointer w-40 h-40 flex justify-center items-center"
    >
      <AnimatePresence>
        {isChecked && (
          <motion.div
            className="w-[150px] h-[150px] origin-bottom-left transform"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg>
              <path
                d="M 38 74.707 L 62.647 99.353 L 108.5 53.4"
                fill="transparent"
                strokeWidth="20"
                stroke="#40f"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

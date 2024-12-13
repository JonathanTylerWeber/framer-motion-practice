import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function MultipleChildren() {
  const [count, setCount] = useState(0);

  const buttonStyle =
    "w-[50px] h-[108px] bg-[#0af] absolute text-white text-[32px] font-semibold text-center leading-[108px] cursor-pointer";

  const segments = [];
  for (let i = 0; i < count; i++) {
    const backgroundColor =
      i > 5 ? (i > 7 ? "bg-red-600" : "bg-orange-400") : "bg-lime-500";

    segments.push(
      <motion.div
        className={`
        w-[50px]
        h-[14px]
        rounded-[5px]
        transform origin-bottom
        ${backgroundColor}
      `}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        key={i}
      />
    );
  }

  return (
    <motion.div className="w-52 h-72 rounded-xl bg-white relative">
      <motion.div
        whileTap={{ opacity: 0.6 }}
        onTap={() => {
          if (count < 9) {
            setCount(count + 1);
          }
        }}
        className={`rounded-t-md top-8 left-10 ${buttonStyle}`}
      >
        +
      </motion.div>
      <motion.div
        whileTap={{ opacity: 0.6 }}
        onTap={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setCount(0);
          }
        }}
        className={`${buttonStyle} rounded-b-md bottom-8 left-10`}
      >
        -
      </motion.div>
      <div className="w-14 h-56 absolute right-10 flex flex-col-reverse bottom-8 gap-y-3">
        <AnimatePresence>{segments}</AnimatePresence>
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import emoji from "react-easy-emoji";

const buttonStyle: MotionStyle = {
  width: 50,
  height: 50,
  borderRadius: 30,
  backgroundColor: "#944dff",
  position: "absolute",
  color: "#fff",
  fontSize: 32,
  fontWeight: 500,
  textAlign: "center",
  lineHeight: "45px",
  cursor: "pointer",
};

export function DifferentKey() {
  const [current, setCurrent] = useState(0);

  const emojis = ["⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🥎", "🎱"];

  return (
    <div style={{ width: 260, height: 120, position: "relative" }}>
      {/* Previous Button */}
      <motion.div
        style={{ ...buttonStyle, top: 35, left: 20 }}
        whileTap={{ scale: 0.9 }}
        onTap={() => {
          if (current > 0) {
            setCurrent(current - 1);
          } else {
            setCurrent(emojis.length - 1);
          }
        }}
      >
        {"<"}
      </motion.div>

      {/* Next Button */}
      <motion.div
        style={{ ...buttonStyle, top: 35, right: 20 }}
        whileTap={{ scale: 0.9 }}
        onTap={() => {
          if (current < emojis.length - 1) {
            setCurrent(current + 1);
          } else {
            setCurrent(0);
          }
        }}
      >
        {">"}
      </motion.div>

      {/* Emoji Display */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            top: 20,
            left: 90,
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: -180 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          key={current} // Changing the key triggers the exit animation
        >
          {emoji(emojis[current], {
            baseUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/",
            ext: ".svg",
            size: "",
            props: { style: { width: 80, height: 80 } },
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

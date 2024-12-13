import { useState } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import emoji from "react-easy-emoji";

export function ExitComplete() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [buttonsOpacity, setButtonsOpacity] = useState(1);

  const emojis = ["🌕", "🌔", "🌓", "🌒", "🌑", "🌘", "🌗", "🌖"];

  const variants = {
    initial: (direction: string) => ({
      rotateY: direction === "forward" ? -45 : 45,
      opacity: 0,
    }),
    animate: { rotateY: 0, opacity: 1 },
    exit: (direction: string) => ({
      rotateY: direction === "forward" ? 45 : -45,
      opacity: 0,
    }),
  };

  return (
    <div style={{ width: 270, height: 120, position: "relative" }}>
      <AnimatePresence
        initial={false}
        onExitComplete={() => setButtonsOpacity(1)}
        custom={direction}
      >
        <motion.div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: 10,
            left: 85,
            originZ: -100,
          }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={current}
          custom={direction}
          transition={{ duration: 1 }}
        >
          {emoji(emojis[current], {
            baseUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/",
            ext: ".svg",
            size: "",
            props: { style: { width: 100, height: 100 } },
          })}
        </motion.div>
      </AnimatePresence>
      <motion.div
        style={{ ...buttonStyle, top: 35, left: 0 }}
        whileTap={{ scale: 0.9 }}
        onTap={() => {
          setDirection("forward");
          if (current > 0) {
            setCurrent(current - 1);
          } else {
            setCurrent(emojis.length - 1);
          }
          setButtonsOpacity(0);
        }}
        animate={{ opacity: buttonsOpacity }}
      >
        {"<"}
      </motion.div>
      <motion.div
        style={{ ...buttonStyle, top: 35, right: 0 }}
        whileTap={{ scale: 0.9 }}
        onTap={() => {
          setDirection("back");
          if (current < emojis.length - 1) {
            setCurrent(current + 1);
          } else {
            setCurrent(0);
          }
          setButtonsOpacity(0);
        }}
        animate={{ opacity: buttonsOpacity }}
      >
        {">"}
      </motion.div>
    </div>
  );
}

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

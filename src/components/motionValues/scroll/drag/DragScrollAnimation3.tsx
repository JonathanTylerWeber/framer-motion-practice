import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function DragScrollAnimation3() {
  const offsetY = useMotionValue(0);

  const [opacityButton1, setOpacityButton1] = useState(1);
  const [opacityButton2, setOpacityButton2] = useState(1);

  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center bg-orange-400">
      <div className="w-[390px] flex flex-col justify-start items-center bg-white rounded-xl overflow-hidden">
        <motion.img src="Top@2x.png" className="w-[390px] h-[166px]" />
        <div className="w-[390px] h-[470px] overflow-hidden">
          <motion.img
            src="ScrollableContent@2x.png"
            drag="y"
            dragConstraints={{ top: -1296 + 470, bottom: 0 }}
            style={{ width: 390, y: offsetY }}
          />
        </div>
        <div className="h-[60px] w-full bg-white flex justify-evenly items-start text-white text-[15px] font-semibold pt-[20px] relative">
          <motion.div
            className="h-[40px] w-[160px] rounded-[20px] bg-[#0499ff] flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: opacityButton1 }}
            onTap={() => {
              if (offsetY.get() !== 0) {
                setOpacityButton1(0.3);
                animate(offsetY, 0, { duration: 1 }).then(() =>
                  setOpacityButton1(1)
                );
              }
            }}
          >
            Stardust
          </motion.div>
          <motion.div
            className="h-[40px] w-[160px] rounded-[20px] bg-[#0499ff] flex items-center justify-center cursor-pointer"
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: opacityButton2 }}
            onTap={() => {
              if (offsetY.get() !== -443) {
                setOpacityButton2(0.3);
                animate(offsetY, -443, { duration: 1 }).then(() =>
                  setOpacityButton2(1)
                );
              }
            }}
          >
            The Atlantic
          </motion.div>
        </div>
      </div>
    </div>
  );
}

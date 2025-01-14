// import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const offset = 341;

export default function DragSlider() {
  const handleX = useMotionValue(0);
  // handleX.on("change", (value) => console.log(value)); // Logging the current value

  const leftPanelWidth = useTransform(() => offset + handleX.get());
  const rightPanelWidth = useTransform(() => offset - handleX.get());

  // useEffect(() => console.log("That was a redraw."));

  // useEffect(() => {
  //   return handleX.on("change", (value) => {
  //     const leftPanelWidthValue = leftPanelWidth.get();
  //     const rightPanelWidthValue = rightPanelWidth.get();
  //     console.log("handleX:", value);
  //     console.log("leftPanelWidth:", leftPanelWidthValue);
  //     console.log("rightPanelWidth:", rightPanelWidthValue);
  //   });
  // }, [handleX, leftPanelWidth, rightPanelWidth]);

  return (
    <div className="relative w-[730px] h-[365px] bg-white">
      {/* Left panel */}
      <motion.div
        className="absolute top-[20px] left-[20px] h-[325px] rounded-l-[16px] bg-[#09f]"
        style={{
          width: leftPanelWidth,
        }}
      />
      {/* Right panel */}
      <motion.div
        className="absolute top-[20px] right-[20px] h-[325px] rounded-r-[16px] bg-[#63f]"
        style={{
          width: rightPanelWidth,
        }}
      />
      {/* Handle */}
      <motion.div
        className="absolute w-[60px] h-[60px] rounded-full bg-white top-[162px] left-[335px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)]"
        style={{
          x: handleX,
        }}
        drag="x"
        dragConstraints={{ left: -240, right: 240 }}
        dragElastic={0.2}
      >
        <div className="absolute left-[4px] top-[16px]">
          <FiChevronLeft color="#333" size={30} />
        </div>
        <div className="absolute left-[26px] top-[16px]">
          <FiChevronRight color="#333" size={30} />
        </div>
      </motion.div>
    </div>
  );
}

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Define allowed string values for positioning, including percentages, pixels, and numbers
type Position =
  | "start"
  | "center"
  | "end"
  | `${number}%`
  | `${number}px`
  | `${number}vw`
  | `${number}vh`
  | `${number}`; // This allows numeric strings such as "1", "0.75", "0"

// Define types for the props
interface ElementProps {
  startElement: Position;
  startViewport: Position;
  endElement: Position;
  endViewport: Position;
}

// Element Component with type-safe props and ref
function Element({
  startElement,
  startViewport,
  endElement,
  endViewport,
}: ElementProps) {
  const [progress, setProgress] = useState(0);

  // A ref to pass to the element
  const ref = useRef<HTMLDivElement>(null);

  // This element’s scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      `${startElement} ${startViewport}`,
      `${endElement} ${endViewport}`,
    ],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => setProgress(value));

  return (
    <motion.div
      ref={ref}
      className="w-[200px] h-[200px] bg-gradient-to-r from-[#ffdf3d] to-[#ff7406] rounded-[16px] relative"
    >
      {/* Vertical Bars */}
      <div
        className="w-[60px] h-[80px] bg-white/30 absolute"
        style={{ left: 53 }}
      >
        <p className="absolute text-[12px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Element
        </p>
      </div>
      <div
        className="w-[60px] h-[80px] bg-white/30 absolute"
        style={{ left: 123 }}
      >
        <p className="absolute text-[12px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Viewport
        </p>
      </div>

      {/* Horizontal Bars */}
      <div
        className="w-[200px] h-[19px] bg-white/30 absolute"
        style={{ top: 32 }}
      >
        <p className="absolute text-[12px] text-white top-[-9px] left-[8px]">
          Start
        </p>
        <p className="absolute text-[12px] text-black top-[-9px] left-[53px]">
          {startElement}
        </p>
        <p className="absolute text-[12px] text-black top-[-9px] left-[123px]">
          {startViewport}
        </p>
      </div>
      <div
        className="w-[200px] h-[19px] bg-white/30 absolute"
        style={{ top: 61 }}
      >
        <p className="absolute text-[12px] text-white top-[-9px] left-[8px]">
          End
        </p>
        <p className="absolute text-[12px] text-black top-[-9px] left-[53px]">
          {endElement}
        </p>
        <p className="absolute text-[12px] text-black top-[-9px] left-[123px]">
          {endViewport}
        </p>
      </div>

      {/* SVG Progress Circle */}
      <div className="absolute left-[55px] top-[95px] w-[90px] h-[90px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">
          <circle
            cx="45"
            cy="45"
            r="40"
            pathLength="1"
            style={{
              stroke: "rgba(255, 255, 255, 0.2)",
              strokeWidth: 10,
              fill: "none",
            }}
          />
          <motion.circle
            cx="45"
            cy="45"
            r="40"
            style={{
              stroke: "#fff",
              strokeWidth: 10,
              fill: "none",
              pathLength: scrollYProgress,
            }}
            transform="rotate(-90, 45 45)"
          />
          <text
            fill="#333"
            x="50%"
            y="45"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={20}
          >
            {progress.toFixed(2)}
          </text>
        </svg>
      </div>
    </motion.div>
  );
}

// Main App Component
export default function ScrollOffset() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center space-y-[100px] mt-[1000px] pb-[1000px]">
      {/* Flex container for elements */}
      <div className="flex justify-evenly w-full gap-8">
        <div className="flex flex-col items-center">
          <Element
            startElement="start"
            startViewport="end"
            endElement="end"
            endViewport="end"
          />
          <p className="text-[15px] text-[#333]">Version 1</p>
        </div>
        <div className="flex flex-col items-center">
          <Element
            startElement="end"
            startViewport="end"
            endElement="start"
            endViewport="start"
          />
          <p className="text-[15px] text-[#333]">Version 2</p>
        </div>
        <div className="flex flex-col items-center">
          <Element
            startElement="end"
            startViewport="end"
            endElement="end"
            endViewport="center"
          />
          <p className="text-[15px] text-[#333]">Version 3</p>
        </div>
        <div className="flex flex-col items-center">
          <Element
            startElement="end"
            startViewport="center"
            endElement="start"
            endViewport="start"
          />
          <p className="text-[15px] text-[#333]">Version 4</p>
        </div>
        <div className="flex flex-col items-center">
          <Element
            startElement="0%"
            startViewport="200px"
            endElement="0%"
            endViewport="0%"
          />
          <p className="text-[15px] text-[#333]">Version 5</p>
        </div>
        <div className="flex flex-col items-center">
          <Element
            startElement="1"
            startViewport="0.75"
            endElement="0"
            endViewport="0"
          />
          <p className="text-[15px] text-[#333]">Version 6</p>
        </div>
      </div>
    </div>
  );
}

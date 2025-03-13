import { useState } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { distance } from "@popmotion/popcorn";

const grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];
const size = 60;
const gap = 10;

interface ActiveType {
  row: number;
  col: number;
}

interface SquareProps {
  active: ActiveType;
  setActive: (active: ActiveType) => void;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const Square: React.FC<SquareProps> = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
}) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className="absolute rounded-full"
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        width: `${size}px`,
        height: `${size}px`,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    />
  );
};

export default function SpringDragCircles() {
  const [active, setActive] = useState<ActiveType>({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden bg-slate-700"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ "--base-hue": "360" }}
        initial={{ "--base-hue": "0" }}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        className="w-full h-full"
      >
        <motion.div
          className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${(size + gap) * 4 - gap}px`,
            height: `${(size + gap) * 4 - gap}px`,
            perspective: 500,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_, colIndex) => (
              <Square
                key={`${rowIndex}-${colIndex}`}
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

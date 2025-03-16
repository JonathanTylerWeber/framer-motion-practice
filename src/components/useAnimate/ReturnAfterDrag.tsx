import { motion, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";

const ReturnAfterDrag = () => {
  const [scope, animate] = useAnimate();
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-blue-500 overflow-hidden">
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          cursor: "grab",
        }}
        drag
        dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
        ref={scope}
        onDragEnd={() => {
          const id = setTimeout(
            () =>
              animate(
                scope.current,
                { x: 0, y: 0 },
                { type: "spring", duration: 0.8, bounce: 0.5 }
              ),
            2000
          );
          setTimeoutId(id);
        }}
        onDragStart={() => {
          if (timeoutId) clearTimeout(timeoutId);
        }}
        whileTap={{ cursor: "grabbing" }}
      />
      <div className="absolute top-2 right-2 flex justify-center items-center w-5 h-5 bg-black bg-opacity-40 rounded-lg cursor-pointer">
        {/* You can add an icon or text inside here */}
      </div>
    </div>
  );
};

export default ReturnAfterDrag;

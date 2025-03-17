import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

interface StaggeringTextProps {
  text: string;
}

const StaggeringText: React.FC<StaggeringTextProps> = ({ text }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("span", { opacity: 1, y: 50 }, { delay: stagger(0.1) });
  }, [animate]);

  return (
    <main className="w-full h-screen bg-gradient-to-br from-pink-500 to-red-500 flex justify-center items-center">
      <motion.h2 className="text-6xl text-white" style={{ y: -50 }} ref={scope}>
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block opacity-0">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </motion.h2>
    </main>
  );
};

export default StaggeringText;

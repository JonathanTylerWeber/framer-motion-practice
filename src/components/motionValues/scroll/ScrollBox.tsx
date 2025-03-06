import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollBox = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="w-screen h-[300vh] overflow-x-hidden bg-gradient-to-b from-[#40f] to-[#05f]">
      <div className="w-[150px] h-[150px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-full h-full overflow-hidden bg-white/20 rounded-[30px]"
          style={{ scale }}
        >
          <motion.div
            className="w-full h-full bg-white origin-bottom"
            style={{ scaleY: scrollYProgress }}
          />
        </motion.div>
      </div>
    </div>
  );
};

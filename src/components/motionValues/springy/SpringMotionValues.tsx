import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpringMotionValues() {
  const rotate = useSpring(0);
  const scale = useSpring(1, { stiffness: 300 });
  const backgroundColor = useMotionValue("#7d6");

  return (
    <div className="w-[730px] h-[365px] relative bg-gradient-to-b from-[#eee] to-[#ddd]">
      <div className="w-[365px] h-[365px] bg-gradient-to-b from-[#E99FF2] to-[#8C2CA5] flex items-center justify-center">
        <motion.div
          className="w-[149px] h-[149px] rounded-[30px]"
          style={{ rotate, scale, backgroundColor }}
          whileTap={{
            rotate: 90,
            scale: 0.5,
            backgroundColor: "#ffa500",
          }}
        />
      </div>
      <div className="absolute left-[425px] top-[60px] flex flex-col gap-[33px] justify-center items-start">
        <motion.div
          className="w-[60px] h-[60px] rounded-[12px] bg-[#7d6]"
          style={{ rotate }}
        />
        <motion.div
          className="w-[60px] h-[60px] rounded-[12px] bg-[#7d6]"
          style={{ scale }}
        />
        <motion.div
          className="w-[60px] h-[60px] rounded-[12px] bg-[#7d6]"
          style={{ backgroundColor }}
        />
      </div>
      <div className="absolute left-[514px] top-[60px] flex flex-col gap-[33px] text-[20px]">
        <p className="m-0 font-medium text-[#777] leading-[60px]">Rotate</p>
        <p className="m-0 font-medium text-[#777] leading-[60px]">Scale</p>
        <p className="m-0 font-medium text-[#777] leading-[60px]">
          Background color
        </p>
      </div>
    </div>
  );
}

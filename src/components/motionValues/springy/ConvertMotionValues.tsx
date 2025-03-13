import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function ConvertMotionValues() {
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);

  const springOfRotate = useSpring(rotate, { stiffness: 100 });
  const scaleToXposition = useTransform(scale, [1, 0.5], [0, 90]);
  const springOfXposition = useSpring(scaleToXposition, { stiffness: 100 });

  return (
    <div className="w-[730px] h-[365px] relative">
      {/* Left Pane */}
      <div className="w-[365px] h-[365px] bg-gradient-to-b from-[#1ed2fc] to-[#015fdf] flex items-center justify-center">
        <motion.div
          className="w-[149px] h-[149px] rounded-[30px] bg-[#7d6]"
          style={{ rotate, scale }}
          whileTap={{ rotate: 90, scale: 0.5 }}
        />
      </div>

      {/* Right Pane for Rotate */}
      <div className="w-[365px] h-[183px] bg-[#ebebeb] absolute top-0 left-[365px]">
        <p className="text-[#777] text-[20px] absolute left-[30px] top-[10px]">
          Rotate
        </p>
        <motion.div
          className="w-[60px] h-[60px] rounded-[12px] bg-[#7d6] absolute left-[31px] bottom-[31px]"
          style={{ rotate }}
        />
        <p className="text-[#999] text-[15px] absolute left-[137px] top-[50px]">
          x-position
        </p>
        <motion.div
          className="w-[4px] h-[30px] bg-[#999] rounded-[2px] absolute left-[234px]"
          style={{ top: 67, x: rotate }}
        />
        <p
          className="text-[#999] text-[15px] absolute left-[137px]"
          style={{ bottom: 14 }}
        >
          springy <br /> x-position
        </p>
        <motion.div
          className="w-[4px] h-[30px] bg-[#999] rounded-[2px] absolute left-[234px]"
          style={{ bottom: 31, x: springOfRotate }}
        />
      </div>

      {/* Right Pane for Scale */}
      <div className="w-[365px] h-[183px] absolute left-[365px] top-[183px] bg-[#e0e0e0]">
        <p className="text-[#777] text-[20px] absolute left-[30px] top-[10px]">
          Scale
        </p>
        <motion.div
          className="w-[60px] h-[60px] rounded-[12px] bg-[#7d6] absolute left-[31px] bottom-[31px]"
          style={{ scale }}
        />
        <p className="text-[#999] text-[15px] absolute left-[137px] top-[50px]">
          x-position
        </p>
        <motion.div
          className="w-[4px] h-[30px] bg-[#999] rounded-[2px] absolute left-[234px]"
          style={{ top: 67, x: scaleToXposition }}
        />
        <p
          className="text-[#999] text-[15px] absolute left-[137px]"
          style={{ bottom: 14 }}
        >
          springy <br /> x-position
        </p>
        <motion.div
          className="w-[4px] h-[30px] bg-[#999] rounded-[2px] absolute left-[234px]"
          style={{ bottom: 31, x: springOfXposition }}
        />
      </div>
    </div>
  );
}

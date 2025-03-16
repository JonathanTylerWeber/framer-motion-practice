import { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useAnimate,
  AnimationPlaybackControls,
  Easing,
} from "framer-motion";
import { FaPlayCircle, FaPauseCircle, FaStopCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { BsSkipEndCircleFill } from "react-icons/bs";

const AnimateControls = (): JSX.Element => {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const [scope4, animate4] = useAnimate();

  const animation1 = useRef<AnimationPlaybackControls | null>(null);
  const animation2 = useRef<AnimationPlaybackControls | null>(null);
  const animation3 = useRef<AnimationPlaybackControls | null>(null);
  const animation4 = useRef<AnimationPlaybackControls | null>(null);

  // Correct easing type
  const transition = useMemo(
    () => ({
      duration: 2,
      ease: "easeInOut" as Easing,
      repeat: Infinity,
      repeatType: "reverse" as const,
    }),
    []
  );

  useEffect(() => {
    animation1.current = animate1(scope1.current, { x: 320 }, transition);
    animation1.current?.pause();

    animation2.current = animate2(scope2.current, { x: 320 }, transition);
    animation2.current?.pause();

    animation3.current = animate3(scope3.current, { x: 320 }, transition);
    animation3.current?.pause();

    animation4.current = animate4(scope4.current, { x: 320 }, transition);
    animation4.current?.pause();
  }, [
    animate1,
    animate2,
    animate3,
    animate4,
    scope1,
    scope2,
    scope3,
    scope4,
    transition,
  ]);

  return (
    <div className="flex flex-col justify-start gap-10 w-full bg-gradient-to-r  from-cyan-700 to-indigo-600">
      <div className="flex gap-8">
        <div className="relative w-[400px] border-3 border-white rounded-[28px] p-2">
          <motion.div
            className="w-[80px] h-[80px] bg-white rounded-[20px]"
            ref={scope1}
          />
        </div>
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-lime-600 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation1.current?.play()}
          >
            <FaPlayCircle size={24} />
            <span className="ml-2">play()</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-orange-700 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation1.current?.pause()}
          >
            <FaPauseCircle size={24} />
            <span className="ml-2">pause()</span>
          </motion.div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="relative w-[400px] border-3 border-white rounded-[28px] p-2">
          <motion.div
            className="w-[80px] h-[80px] bg-white rounded-[20px]"
            ref={scope2}
          />
        </div>
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-lime-600 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation2.current?.play()}
          >
            <FaPlayCircle size={24} />
            <span className="ml-2">play()</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-blue-600 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation2.current?.cancel()}
          >
            <MdCancel size={28} className="ml-[-2px]" />
            <span className="ml-2">cancel()</span>
          </motion.div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="relative w-[400px] border-3 border-white rounded-[28px] p-2">
          <motion.div
            className="w-[80px] h-[80px] bg-white rounded-[20px]"
            ref={scope3}
          />
        </div>
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-lime-600 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation3.current?.play()}
          >
            <FaPlayCircle size={24} />
            <span className="ml-2">play()</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-purple-700 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation3.current?.complete()}
          >
            <BsSkipEndCircleFill size={24} />
            <span className="ml-2">complete()</span>
          </motion.div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="relative w-[400px] border-3 border-white rounded-[28px] p-2">
          <motion.div
            className="w-[80px] h-[80px] bg-white rounded-[20px]"
            ref={scope4}
          />
        </div>
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-lime-600 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation4.current?.play()}
          >
            <FaPlayCircle size={24} />
            <span className="ml-2">play()</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-[134px] h-[39px] bg-red-600 rounded-[20px] cursor-pointer px-2"
            whileTap={{ scale: 0.95 }}
            onTap={() => animation4.current?.stop()}
          >
            <FaStopCircle size={24} />
            <span className="ml-2">stop()</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimateControls;

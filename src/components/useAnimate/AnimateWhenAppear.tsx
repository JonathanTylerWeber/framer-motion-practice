import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const AnimateWhenAppear = () => {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  useEffect(() => {
    animate1(
      scope1.current,
      { x: [0, 200, 200, 0, 0], rotate: [0, 0, 360, 360, 0] },
      { duration: 4 }
    );
  }, [animate1, scope1]);

  return (
    <div className="relative w-[400px] h-[400px] bg-blue-500">
      <div
        ref={scope1}
        className="absolute w-[100px] h-[100px] bg-white rounded-[20px] left-[50px] top-[50px]"
      />
      <motion.div
        ref={scope2}
        className="absolute w-[100px] h-[100px] bg-white rounded-[20px] left-[50px] bottom-[50px] cursor-pointer"
        onTap={() =>
          animate2(
            scope2.current,
            { x: [0, 200, 200, 0, 0], rotate: [0, 0, 360, 360, 0] },
            { duration: 4 }
          )
        }
      />
    </div>
  );
};

export default AnimateWhenAppear;

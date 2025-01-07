import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function MotionValues() {
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);
  const backgroundColor = useMotionValue("orange");

  const [someState, setSomeState] = useState(0);

  console.log(someState);

  useMotionValueEvent(rotate, "change", (value) => setSomeState(value));

  return (
    <div className="flex flex-row space-x-52">
      <div className="flex justify-center items-center">
        <motion.div
          className="bg-orange-400 w-56 h-56 rounded-2xl"
          whileTap={{
            rotate: 90,
            scale: 0.5,
            backgroundColor: "green",
          }}
          style={{
            rotate,
            scale,
            backgroundColor,
          }}
        />
      </div>
      <div className="space-y-20 text-white w-60">
        <div>
          <motion.div
            className="bg-orange-400 w-24 h-24 rounded-2xl"
            style={{ rotate }}
          />
          <div>
            Rotate
            <p>
              <motion.span>{Math.floor(rotate.get())}</motion.span>°
            </p>
          </div>
        </div>
        <div>
          <motion.div
            className="bg-orange-400 w-24 h-24 rounded-2xl"
            style={{ scale }}
          />
          <div>
            Scale
            <motion.p>{`${Math.floor(scale.get() * 100)}%`}</motion.p>
          </div>
        </div>
        <div>
          <motion.div
            className="bg-orange-400 w-24 h-24 rounded-2xl"
            style={{ backgroundColor }}
          />
          <div>
            Background color
            <motion.p>{backgroundColor.get()}</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

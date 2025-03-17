import { useEffect, useRef } from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  AnimationPlaybackControls,
  MotionValue,
} from "framer-motion";

type CircleAnimationControlProps = object;

export const CircleAnimationControl: React.FC<
  CircleAnimationControlProps
> = () => {
  const [scope, animate] = useAnimate();
  const pathLength: MotionValue<number> = useMotionValue(1); // Properly typed as MotionValue<number>
  const circles = [...Array(36)];

  const animateCircles = useRef<AnimationPlaybackControls | null>(null);
  const circlesActive = useRef(false);

  const animateDivs = useRef<AnimationPlaybackControls | null>(null);
  const divsActive = useRef(false);

  const animateSections = useRef<AnimationPlaybackControls | null>(null);
  const sectionsActive = useRef(false);

  // Ref to handle the shrink animation
  const animateShrink = useRef<AnimationPlaybackControls | null>(null);
  const shrinkActive = useRef(false);

  useEffect(() => {
    animateCircles.current = animate(
      "circle",
      { pathLength: 0 },
      { duration: 4, repeat: Infinity, repeatType: "reverse" }
    );
    animateCircles.current?.pause();

    animateDivs.current = animate(
      "div",
      { rotate: 360 },
      { duration: 4, repeat: Infinity, ease: "linear" }
    );
    animateDivs.current?.pause();

    animateSections.current = animate(
      "section",
      { rotate: -360 },
      { duration: 4, repeat: Infinity, ease: "linear" }
    );
    animateSections.current?.pause();

    // Initialize shrink animation
    animateShrink.current = animate(
      ".class1",
      { scale: [1, 0.3] }, // Continuous shrink and grow effect
      { duration: 4, repeat: Infinity, repeatType: "reverse" }
    );
    animateShrink.current?.pause(); // Start with it paused
  }, [animate]);

  return (
    <>
      <div
        className="container grid grid-cols-9 gap-2 p-4 rounded-xl bg-slate-600"
        ref={scope}
      >
        {circles.map((_, i) => {
          const divOrSection = getRandomInt(2);

          const strokeColor = `hsl(${Math.floor(Math.random() * 360)},80%,50%)`;

          const class1or2 = getRandomInt(2);
          let className,
            fillColor = "none";
          if (class1or2 === 1) {
            className = "class1";
            fillColor = `hsl(${Math.floor(Math.random() * 360)},80%,50%)`;
          } else {
            className = "class2";
          }

          return divOrSection === 1 ? (
            <motion.div
              className={`${className} w-15 h-15`}
              key={i}
              animate={{
                scale: className === "class1" ? 1 : 1, // Always 1, shrinking is controlled by the ref
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {SVG(strokeColor, pathLength, fillColor)}
            </motion.div>
          ) : (
            <motion.section
              className={`${className} w-15 h-15`}
              key={i}
              animate={{
                scale: className === "class1" ? 1 : 1, // Same as above
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {SVG(strokeColor, pathLength, fillColor)}
            </motion.section>
          );
        })}
      </div>
      <div className="buttons w-full flex justify-evenly items-center mt-5 text-gray-800 font-medium text-sm">
        <motion.div
          className="button h-10 px-5 rounded-full bg-white flex items-center justify-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onTap={() => {
            if (animateCircles.current) {
              if (!circlesActive.current) {
                animateCircles.current.play();
              } else {
                animateCircles.current.pause();
              }
              circlesActive.current = !circlesActive.current;
            }
          }}
        >
          <code>&lt;circle&gt;</code>&nbsp;elements
        </motion.div>
        <motion.div
          className="button h-10 px-5 rounded-full bg-white flex items-center justify-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onTap={() => {
            if (animateDivs.current) {
              if (!divsActive.current) {
                animateDivs.current.play();
              } else {
                animateDivs.current.pause();
              }
              divsActive.current = !divsActive.current;
            }
          }}
        >
          Rotate&nbsp;<code>&lt;div&gt;</code>s
        </motion.div>
        <motion.div
          className="button h-10 px-5 rounded-full bg-white flex items-center justify-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onTap={() => {
            if (animateSections.current) {
              if (!sectionsActive.current) {
                animateSections.current.play();
              } else {
                animateSections.current.pause();
              }
              sectionsActive.current = !sectionsActive.current;
            }
          }}
        >
          Rotate&nbsp;<code>&lt;section&gt;</code>s
        </motion.div>
        <motion.div
          className="button h-10 px-5 rounded-full bg-white flex items-center justify-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onTap={() => {
            // Toggle the shrink animation
            if (animateShrink.current) {
              if (!shrinkActive.current) {
                animateShrink.current.play();
              } else {
                animateShrink.current.pause();
              }
              shrinkActive.current = !shrinkActive.current;
            }
          }}
        >
          Shrink&nbsp;<code>"class1"</code>
        </motion.div>
      </div>
    </>
  );
};

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

// Properly typing SVG function
function SVG(
  strokeColor: string,
  pathLength: MotionValue<number>,
  fillColor: string
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
      <motion.circle
        cx="30"
        cy="30"
        r="25"
        style={{
          stroke: strokeColor,
          strokeWidth: 7,
          fill: fillColor,
          pathLength: pathLength,
        }}
      />
    </svg>
  );
}

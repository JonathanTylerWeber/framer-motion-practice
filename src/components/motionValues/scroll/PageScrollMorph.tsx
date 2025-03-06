import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PageScrollMorph() {
  // Global scroll progress and distance
  const { scrollYProgress, scrollY } = useScroll();

  // Converting ‘scrollYProgress’ to other values
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [20, 100, 20]
  );
  const left = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc(0vw + 20px)", "calc(100vw + -230px)"]
  );
  const gradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(90deg, #f08 0%, #70f 50%, #09f 100%)",
      "linear-gradient(360deg, rgb(255, 51, 102) 0%, rgb(255, 204, 0) 30%, rgb(0, 204, 136) 100%)",
    ]
  );

  // States to display copies of the Motion values
  const [currentProgress, setCurrentProgress] = useState(
    scrollYProgress.get().toFixed(2)
  );
  const [currentY, setCurrentY] = useState(0);
  const [currentLeft, setCurrentLeft] = useState(left.get());

  // Update states on motion value changes
  useEffect(() => {
    const unsubscribeProgress = scrollYProgress.on("change", (value) =>
      setCurrentProgress(value.toFixed(2))
    );
    const unsubscribeY = scrollY.on("change", (value) =>
      setCurrentY(Math.round(value))
    );
    const unsubscribeLeft = left.on("change", (value) => setCurrentLeft(value));

    return () => {
      unsubscribeProgress();
      unsubscribeY();
      unsubscribeLeft();
    };
  }, [left, scrollY, scrollYProgress]); // Only run on mount

  return (
    <div className="font-sans text-left max-w-[600px] mt-5 mb-10 mx-auto">
      {/* Progress Circle */}
      <div className="w-14 h-14 bg-white fixed top-[10px] right-[10px] z-[1] rounded-full shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56">
          <motion.path
            d="M 28 5 C 40.703 5 51 15.297 51 28 C 51 40.703 40.703 51 28 51 C 15.297 51 5 40.703 5 28 C 5 15.297 15.297 5 28 5 Z"
            fill="transparent"
            strokeWidth="2.05"
            stroke="#70f"
            strokeLinecap="round"
            style={{ pathLength: scrollYProgress }}
          />
          <text x="12" y="33" fill="#70f">
            {currentProgress}
          </text>
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-6 bg-[#70f] fixed bottom-0 left-0 right-0 z-[1] flex justify-center items-center">
        <p className="text-center text-white text-base">scrollY: {currentY}</p>
      </div>

      <h1 className="text-2xl font-bold">Page scroll</h1>
      <p className="text-lg font-extralight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at eros
        eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium, sit
        amet commodo erat dapibus.
      </p>
      <p className="text-lg font-extralight">
        Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor vel
        tellus sodales vehicula a at dui. Nam interdum condimentum dolor, quis
        gravida dolor dapibus ac. Aliquam metus est, sagittis eget convallis
        eget, ornare a lorem.
      </p>
      <p className="text-lg font-extralight">
        Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
        vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
        tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
        iaculis felis, ut maximus ipsum ligula at purus.
      </p>

      {/* Motion Box */}
      <div className="w-[200px] h-[200px] relative">
        <motion.div
          className="w-[200px] h-[200px] absolute flex justify-center items-center"
          style={{
            borderRadius,
            left,
            background: gradient,
          }}
        >
          <p className="text-center text-white text-base">{currentLeft}</p>
        </motion.div>
      </div>

      <p className="text-lg font-extralight">
        Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
        bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
        fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
        scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
      </p>
      <p className="text-lg font-extralight">
        Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
        nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
      </p>
      <p className="text-lg font-extralight">
        Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
        vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
        pellentesque.
      </p>
      <p className="text-lg font-extralight">
        Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
        vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus mollis
        feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
      </p>
      <p className="text-lg font-extralight">
        Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue. Sed
        sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut lectus
        eros, consequat at rhoncus et, ultricies at nunc.
      </p>
    </div>
  );
}

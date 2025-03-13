import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

export default function DragScrollAnimation2() {
  const pageWidth = 330;
  const offset = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Box 1 animations
  const box1_y = useTransform(offset, [0, -pageWidth], [0, 400]);

  // Box 2 animations
  const box2_rotate = useTransform(offset, [0, -pageWidth], [0, 360]);
  const box2_y = useTransform(offset, [-pageWidth, -pageWidth * 2], [0, -300]);

  // Box 3 animations
  const box3_rotateX = useTransform(
    offset,
    [-pageWidth, -pageWidth * 2],
    [0, -180]
  );
  const box3_y = useTransform(offset, [-pageWidth, -pageWidth * 2], [0, 120]);

  // Button opacity animations
  const opacityPrevious = useTransform(
    offset,
    [0, -pageWidth, -pageWidth * 2],
    [0, 1, 1]
  );

  const opacityNext = useTransform(
    offset,
    [0, -pageWidth, -pageWidth * 2],
    [1, 1, 0]
  );

  const handleDrag = () => {
    const currentOffset = offset.get();

    // Calculate which page is closest
    const pagePositions = [0, -pageWidth, -pageWidth * 2];

    // Find the closest page position
    let closestPage = pagePositions[0];
    let smallestDistance = Math.abs(currentOffset - pagePositions[0]);

    for (let i = 1; i < pagePositions.length; i++) {
      const distance = Math.abs(currentOffset - pagePositions[i]);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestPage = pagePositions[i];
      }
    }

    // Animate to the closest page with a spring animation
    animate(offset, closestPage, {
      type: "spring",
      duration: 0.5,
      bounce: 0.2,
    });
  };

  const goToPreviousPage = () => {
    const currentOffset = offset.get();
    if (currentOffset === -pageWidth) {
      animate(offset, 0, {
        type: "spring",
        duration: 2,
        bounce: 0.6,
      });
    } else if (currentOffset === -pageWidth * 2) {
      animate(offset, -pageWidth, {
        type: "spring",
        duration: 2,
        bounce: 0.6,
      });
    }
  };

  const goToNextPage = () => {
    const currentOffset = offset.get();
    if (currentOffset === 0) {
      animate(offset, -pageWidth, {
        type: "spring",
        duration: 2,
        bounce: 0.6,
      });
    } else if (currentOffset === -pageWidth) {
      animate(offset, -pageWidth * 2, {
        type: "spring",
        duration: 2,
        bounce: 0.6,
      });
    }
  };

  return (
    <div className="w-[330px] h-[700px] relative select-none overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex w-[990px] h-full overflow-hidden rounded-lg"
        style={{ x: offset }}
        drag="x"
        dragConstraints={{ left: -pageWidth * 2, right: 0 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        onDragEnd={handleDrag}
      >
        {/* Page 1 */}
        <div className="w-[330px] h-full bg-[#f74] flex justify-center items-center relative">
          <motion.div
            className="w-[145px] h-[145px] bg-white rounded-[20px] absolute top-[120px] left-[90px] flex justify-center items-center text-[90px] font-bold text-gray-500"
            style={{ y: box1_y }}
          >
            1
          </motion.div>
        </div>

        {/* Page 2 */}
        <div className="w-[330px] h-full bg-[#75c] flex justify-center items-center relative">
          <motion.div
            className="w-[145px] h-[145px] bg-white rounded-[20px] absolute top-[275px] left-[90px] flex justify-center items-center text-[90px] font-bold text-gray-500"
            style={{ y: box2_y, rotate: box2_rotate }}
          >
            2
          </motion.div>
        </div>

        {/* Page 3 */}
        <div
          className="w-[330px] h-full bg-[#6b6] flex justify-center items-center relative"
          style={{ perspective: "600px" }}
        >
          <motion.div
            className="w-[270px] h-[145px] bg-white rounded-[20px] absolute top-[-145px] left-[30px] flex justify-center items-center text-[90px] font-bold text-gray-500 origin-bottom"
            style={{
              rotateX: box3_rotateX,
              y: box3_y,
            }}
          >
            <motion.p style={{ rotateX: 180 }}>3</motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation buttons */}
      <div className="w-full absolute bottom-[30px] flex justify-evenly items-center text-gray-800 text-base font-medium">
        <motion.div
          className="h-[40px] w-[80px] px-[18px] rounded-[20px] bg-white flex items-center justify-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={goToPreviousPage}
          style={{ opacity: opacityPrevious }}
        >
          &lt; Back
        </motion.div>
        <motion.div
          className="h-[40px] w-[80px] px-[18px] rounded-[20px] bg-white flex items-center justify-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={goToNextPage}
          style={{ opacity: opacityNext }}
        >
          Forward &gt;
        </motion.div>
      </div>
    </div>
  );
}

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-black">
      <div
        ref={ref}
        className="w-[200px] h-[300px] border-2 border-dotted border-red-500 relative"
      >
        <figure className="progress sticky top-0">
          <svg
            id="progress"
            width="75"
            height="75"
            viewBox="0 0 100 100"
            className="transform -translate-x-[100px] rotate-[-90deg]"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-500 opacity-20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-500"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default function ScrollTrackElement() {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  );
}

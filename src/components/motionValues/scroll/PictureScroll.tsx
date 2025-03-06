import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const barrios = [
  { name: "Palermo", img: "Palermo@2x.jpg" },
  { name: "San Nicolás", img: "SanNicolás@2x.jpg" },
  { name: "San Telmo", img: "SanTelmo@2x.jpg" },
  { name: "La Boca", img: "LaBoca@2x.jpg" },
  { name: "Nuñez", img: "Nuñez@2x.jpg" },
  { name: "Recoleta", img: "Recoleta@2x.jpg" },
  { name: "Puerto Madero", img: "PuertoMadero@2x.jpg" },
  { name: "Caballito", img: "Caballito@2x.jpg" },
];

interface ImageProps {
  name: string;
  img: string;
}

function Image({ name, img }: ImageProps) {
  // Create a ref to attach to this element
  const ref = useRef(null);

  // Get the scroll progress for this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Convert scroll progress into motion values for the image
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.96, 1],
    [0.5, 1, 1, 0.5]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.96, 1],
    [0.2, 1, 1, 0.1]
  );
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.96, 1],
    [10, 0, 0, 10]
  );
  const blur = useMotionTemplate`blur(${blurValue}px)`;

  // Convert scroll progress for the text
  const x = useTransform(scrollYProgress, [0, 0.3], [1000, 0]);
  const opacityTxt = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const shadowBlur = useTransform(scrollYProgress, [0.3, 0.5], [10, 0]);
  const textShadow = useMotionTemplate`2px 2px ${shadowBlur}px #fff`;

  return (
    <motion.div
      ref={ref}
      // .picture: width 650px, height 325px, 20px rounded, overflow hidden, and relative position
      className="w-[650px] h-[325px] rounded-[20px] overflow-hidden relative"
      style={{ scale, opacity, filter: blur }}
    >
      <motion.img src={img} alt={name} style={{ width: 650 }} />
      <motion.h1
        // h1: using Pacifico, 48px text, red (#e44), absolutely positioned at left 21px, top 210px
        style={{
          x,
          opacity: opacityTxt,
          textShadow,
          fontFamily: "Pacifico, cursive",
        }}
        className="absolute left-[21px] top-[210px] text-[48px] text-[#e44]"
      >
        {name}
      </motion.h1>
    </motion.div>
  );
}

export default function PictureScroll() {
  return (
    // .App: flex container, column layout, centered items
    <div className="flex flex-col justify-start items-center">
      {/* .barrios: flex column with top padding of 40px, bottom padding of 400px, and gap of 34px */}
      <div className="flex flex-col justify-start items-start pt-[40px] pb-[400px] gap-[34px]">
        {barrios.map((barrio, i) => (
          <Image name={barrio.name} img={barrio.img} key={i} />
        ))}
      </div>
    </div>
  );
}

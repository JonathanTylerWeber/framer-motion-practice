import { motion, useScroll, useTransform } from "framer-motion";

const ScrollNav = () => {
  const { scrollY } = useScroll();

  // Animate the navigation's background and height based on scroll position
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,183,255,0)", "rgba(0,183,255,1)"]
  );
  const navHeight = useTransform(scrollY, [0, 100], [120, 60]);

  // Generate 100 boxes
  const boxCount = Array.from({ length: 100 });

  return (
    <div className="font-[Open_Sans] text-center">
      {/* Navigation */}
      <motion.div
        style={{ background, height: navHeight }}
        className="w-full fixed top-0 left-0 right-0 z-[15] flex items-center justify-around px-6 text-[13px] font-bold tracking-[0.02rem] text-[#151515]"
      >
        <div
          id="logo"
          className="bg-[#151515] w-[30px] h-[30px] rounded-full mr-auto"
        ></div>
        <ul className="flex items-center list-none">
          <li className="mx-3 bg-[#151515] w-[30px] h-[10px] rounded-[5px]"></li>
          <li className="mx-3 bg-[#151515] w-[30px] h-[10px] rounded-[5px]"></li>
          <li className="mx-3 bg-[#151515] w-[30px] h-[10px] rounded-[5px]"></li>
        </ul>
      </motion.div>

      {/* Content */}
      {/* Add top padding equal to maximum nav height so content isn't hidden */}
      <div id="content">
        <div className="hero">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80"
            alt="Hero"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {boxCount.map((_, index) => (
            <div
              key={index}
              className="bg-[rgba(21,21,21,0.5)] w-[30%] h-[100px] rounded-[10px] m-[1.5%] inline-block"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollNav;

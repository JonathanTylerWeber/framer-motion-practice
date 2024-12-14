import { motion, useCycle } from "framer-motion";

export function ParentChild() {
  const [current, cycle] = useCycle("off", "on");

  return (
    <div className="w-[200px] h-[200px] rounded-[100px] bg-[#f0f0f0] flex items-center justify-center">
      <motion.div
        className="w-[51px] h-[31px] rounded-[16px] relative cursor-pointer"
        style={{ backgroundColor: "rgba(120,120,128,.16)" }}
        initial={false}
        animate={current}
        onTapStart={() => cycle()}
      >
        <motion.div
          className="w-full h-full rounded-[16px] bg-[#34C759]"
          variants={{ off: { scale: 0 }, on: { scale: 1 } }}
          transition={{ ease: "easeInOut" }}
        />
        <motion.div
          className="w-[27px] h-[27px] rounded-[16px] bg-white absolute top-[2px] left-[2px]"
          // style={{
          //   boxShadow:
          //     "0 0 0 0.5px rgba(0,0,0,.04), 0 3px 8px 0 rgba(0,0,0,.15), 0 3px 1px 0 rgba(0,0,0,.06)",
          // }}
          variants={{ off: { x: 0 }, on: { x: 20 } }}
          transition={{ ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

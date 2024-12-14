import { useCycle, motion } from "motion/react";

export function MoreProperties() {
  const [current, next] = useCycle(
    {
      borderColor: "#32cd32",
      boxShadow: "0px 0px 0px 3px #fff",
    },
    {
      borderColor: "#f00",
      boxShadow: "0px 0px 20px 3px #fff",
    }
  );

  return (
    <motion.div
      style={{
        width: 200,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        boxShadow: "0px 0px 0px 3px #fff",
        border: "5px solid #32cd32",
      }}
      whileTap={{ scale: 0.98 }}
      animate={current}
      onTap={() => next()}
    />
  );
}

import { useCycle, motion } from "motion/react";

export function BasicCycle() {
  const [count, nextNumber] = useCycle(
    "Uno",
    "Dos",
    "Tres",
    "Cuatro",
    "Cinco",
    "Seis",
    "Siete",
    "Ocho",
    "Nueve",
    "Diez"
  );

  return (
    <motion.div
      className="h-32 w-32 bg-white flex justify-center items-center rounded-2xl text-2xl"
      whileTap={{ scale: 0.95 }}
      onTap={() => nextNumber()}
    >
      {count}
    </motion.div>
  );
}

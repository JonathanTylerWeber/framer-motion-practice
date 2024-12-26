import { useCycle, motion, LayoutGroup } from "motion/react";

export default function App() {
  const [screen, cycleScreen] = useCycle(1, 2, 3);

  const handleTap = () => {
    cycleScreen();
  };

  return (
    <LayoutGroup>
      <motion.div
        className="flex items-center justify-center w-screen h-screen bg-gray-100 cursor-pointer"
        onTap={handleTap}
      >
        {screen === 1 && <Screen1 />}
        {screen === 2 && <Screen2 />}
        {screen === 3 && <Screen3 />}
      </motion.div>
    </LayoutGroup>
  );
}

function Screen1() {
  return (
    <motion.div
      className="relative h-full w-full bg-[#09f] rounded-lg shadow-lg"
      initial={{ backgroundColor: "#fb0" }}
      animate={{ backgroundColor: "#09f" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layoutId="box"
        className="absolute w-32 h-32 bg-white rounded-xl z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
}

function Screen2() {
  return (
    <motion.div
      className="relative h-full w-full bg-[#09f] rounded-lg shadow-lg"
      initial={{ backgroundColor: "#09f" }}
      animate={{ backgroundColor: "#63f" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layoutId="box"
        className="absolute w-32 h-32 bg-white rounded-full z-10"
        style={{
          top: "15%",
          right: "22.5%",
        }}
      />
    </motion.div>
  );
}

function Screen3() {
  return (
    <motion.div
      className="relative h-full w-full bg-[#63f] rounded-lg shadow-lg"
      initial={{ backgroundColor: "#63f" }}
      animate={{ backgroundColor: "#fb0" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layoutId="box"
        className="absolute w-32 h-32 bg-white rounded-xl z-10"
        style={{
          bottom: "15%",
          left: "22.5%",
          rotate: -45,
        }}
      />
    </motion.div>
  );
}

import { useCycle, motion } from "motion/react";

export function SpecificValue() {
  const [color, nextColor] = useCycle(
    ["White", "#fff"],
    ["GhostWhite", "#f8f8ff"],
    ["Gainsboro", "#dcdcdc"],
    ["LightGray", "#d3d3d3"],
    ["Silver", "#c0c0c0"],
    ["DarkGray", "#a9a9a9"],
    ["Gray", "#808080"],
    ["DimGray", "#696969"],
    ["Black", "#000000"]
  );

  return (
    <motion.div
      style={{
        width: 200,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        boxShadow: "0px 0px 0px 3px #fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ backgroundColor: color[1] }}
      onTap={() => nextColor()}
      onHoverEnd={() => nextColor(0)}
    >
      {color[0]}
    </motion.div>
  );
}

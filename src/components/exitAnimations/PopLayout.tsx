import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PopLayout() {
  const count = useRef(3);
  const [items, setItems] = useState([0, 1, 2, 3]);

  function removeItem(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setTimeout(() => {
      count.current++;
      setItems([...newItems, count.current]);
    }, 300);
  }

  return (
    <div
      style={{
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        gap: 30,
      }}
    >
      <div className="w-[180px] h-[320px] flex flex-col gap-2.5">
        <h2 style={{ color: "#fff" }}>Sync</h2>
        <AnimatePresence mode="sync">
          {items.map((id, index) => (
            <motion.div
              className="h-[40px] w-100 bg-orange-400 rounded-full"
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              key={id}
              onTap={() => removeItem(index)}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="w-[180px] h-[320px] flex flex-col gap-2.5">
        <h2 style={{ color: "#fff" }}>Pop layout</h2>
        <AnimatePresence mode="popLayout">
          {items.map((id, index) => (
            <motion.div
              className="h-[40px] w-100 bg-orange-400 rounded-full"
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              key={id}
              onTap={() => removeItem(index)}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className="w-[180px] h-[320px] flex flex-col gap-2.5">
        <h2 style={{ color: "#fff" }}>Wait</h2>
        <AnimatePresence mode="wait">
          {items.map((id, index) => (
            <motion.div
              className="h-[40px] w-100 bg-orange-400 rounded-full"
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              key={id}
              onTap={() => removeItem(index)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

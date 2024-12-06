import { useState } from "react";
import "./App.css";
import { Refresh } from "./components/variants/Refresh";
import KeyComplicated from "./components/keyframes/KeyComplicated";
// import StaggerDelay from "./components/variants/StaggerDelay";
// import StaggerDynamic from "./components/variants/StaggerDynamic";
// import StaggerChildren from "./StaggerChildren";
// import { Example } from "./Example";
// import Example2 from "./Example2";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      {/* <Example key={count} /> */}
      {/* <Example2 key={count} /> */}
      {/* <StaggerChildren key={count} /> */}
      {/* <StaggerDynamic key={count} /> */}
      {/* <StaggerDelay key={count} /> */}
      <KeyComplicated key={count} />
    </>
  );
}

export default App;

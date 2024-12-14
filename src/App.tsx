import { useState } from "react";
import "./App.css";
import { Refresh } from "./components/Refresh";
import { ParentChild } from "./components/useCycle/ParentChild";
// import Variants from "./components/useCycle/Variants";
// import { SpecificValue } from "./components/useCycle/SpecificValue";
// import { BasicCycle } from "./components/useCycle/BasicCycle";
// import { MoreProperties } from "./components/useCycle/MoreProperties";
// import { ExitComplete } from "./components/exitAnimations/ExitComplete";
// import { PopLayout } from "./components/exitAnimations/PopLayout";
// import MultipleChildren from "./components/exitAnimations/MultipleChildren";
// import { DifferentKey } from "./components/exitAnimations/DifferentKey";
// import KeyComplicated from "./components/keyframes/KeyComplicated";
// import StaggerDelay from "./components/variants/StaggerDelay";
// import StaggerDynamic from "./components/variants/StaggerDynamic";
// import StaggerChildren from "./StaggerChildren";
// import { Example } from "./Example";
// import Example2 from "./Example2";
// import ConditionalRendering from "./components/exitAnimations/ConditionalRendering";

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
      {/* <KeyComplicated key={count} /> */}
      {/* <ConditionalRendering key={count} /> */}
      {/* <MultipleChildren key={count} /> */}
      {/* <DifferentKey key={count} /> */}
      {/* <PopLayout key={count} /> */}
      {/* <ExitComplete key={count} /> */}
      {/* <BasicCycle key={count} /> */}
      {/* <MoreProperties key={count} /> */}
      <ParentChild key={count} />
    </>
  );
}

export default App;

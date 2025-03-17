import { useState } from "react";
import "./App.css";
import { Refresh } from "./components/Refresh";
import { Calendar } from "./components/useAnimate/Calendar";
// import StaggeringText from "./components/useAnimate/StaggeringText";
// import AnimateControls from "./components/useAnimate/AnimateControls";
// import { CircleAnimationControl } from "./components/useAnimate/CircleAnimationControl";
// import ReturnAfterDrag from "./components/useAnimate/ReturnAfterDrag";
// import AnimateWhenAppear from "./components/useAnimate/AnimateWhenAppear";
// import DragScrollAnimation3 from "./components/motionValues/drag/DragScrollAnimation3";
// import SpringMotionValues from "./components/motionValues/springy/SpringMotionValues";
// import ConvertMotionValues from "./components/motionValues/springy/ConvertMotionValues";
// import SpringyUseScroll from "./components/motionValues/springy/SpringyUseScroll";
// import SpringDragCircles from "./components/motionValues/springy/SpringDragCircles";
// import DragScrollAnimation from "./components/motionValues/scroll/drag/DragScrollAnimation";
// import DragScrollAnimation2 from "./components/motionValues/scroll/drag/DragScrollAnimation2";
// import PictureScroll from "./components/motionValues/scroll/PictureScroll";
// import ScrollOffset from "./components/motionValues/scroll/ScrollOffset";
// import ScrollTrackElement from "./components/motionValues/scroll/ScrollTrackElement";
// import { ScrollBox } from "./components/motionValues/scroll/ScrollBox";
// import ElementScroll from "./components/motionValues/scroll/ElementScroll";
// import ScrollNav from "./components/motionValues/scroll/ScrollNav";
// import { SVGPathLength } from "./components/motionValues/SVGPathLength";
// import ColorsInterpolation from "./components/motionValues/ColorsInterpolation";
// import TrackingCursor from "./components/motionValues/TrackingCursor";
// import PageScroll from "./components/motionValues/scroll/PageScroll";
// import PageScrollMorph from "./components/motionValues/scroll/PageScrollMorph";
// import { DragTransform } from "./components/motionValues/DragTransform";
// import { DragTransform3D } from "./components/motionValues/DragTransform3D";
// import InOutRanges from "./components/motionValues/InOutRanges";
// import AddNewElement from "./components/layout/AddNewElement";
// import MotionValues from "./components/motionValues/MotionValues";
// import DragSlider from "./components/motionValues/DragSlider";
// import MagicMotion from "./components/layout/MagicMotion";
// import SwapTabs from "./components/layout/SwapTabs";
// import SwappingElements from "./components/layout/SwappingElements";
// import Switch from "./components/layout/Switch";
// import { ParentChild } from "./components/useCycle/ParentChild";
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
      {/* <ParentChild key={count} /> */}
      {/* <Switch key={count} /> */}
      {/* <SwappingElements key={count} /> */}
      {/* <SwapTabs key={count} /> */}
      {/* <MagicMotion key={count} /> */}
      {/* <AddNewElement key={count} /> */}
      {/* <MotionValues key={count} /> */}
      {/* <DragSlider key={count} /> */}
      {/* <InOutRanges key={count} /> */}
      {/* <DragTransform key={count} /> */}
      {/* <DragTransform3D key={count} /> */}
      {/* <SVGPathLength key={count} /> */}
      {/* <ColorsInterpolation key={count} /> */}
      {/* <TrackingCursor key={count} /> */}
      {/* <PageScroll key={count} /> */}
      {/* <PageScrollMorph /> */}
      {/* <ScrollNav /> */}
      {/* <ScrollBox /> */}
      {/* <ElementScroll /> */}
      {/* <PictureScroll /> */}
      {/* <ScrollOffset /> */}
      {/* <ScrollTrackElement /> */}
      {/* <DragScrollAnimation /> */}
      {/* <DragScrollAnimation2 /> */}
      {/* <DragScrollAnimation3 /> */}
      {/* <SpringMotionValues /> */}
      {/* <ConvertMotionValues /> */}
      {/* <SpringyUseScroll /> */}
      {/* <SpringDragCircles /> */}
      {/* <ReturnAfterDrag key={count} /> */}
      {/* <AnimateWhenAppear key={count} /> */}
      {/* <AnimateControls key={count} /> */}
      {/* <CircleAnimationControl key={count} /> */}
      {/* <StaggeringText key={count} text="Staggering text" /> */}
      <Calendar key={count} />
    </>
  );
}

export default App;

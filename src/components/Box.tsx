import { useEffect } from "react";
import { useMousePosition } from "../utils/useMousePosition";

export const Box = () => {
  const { x } = useMousePosition();
  useEffect(() => {
    const element = document.getElementById("box");
    let boxes = element.getElementsByTagName("div");

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(" +
        (x / 40 - i * 2) +
        "deg) skew(0deg, 0deg)";
    }
  });
  return (
    <div className="box" id="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

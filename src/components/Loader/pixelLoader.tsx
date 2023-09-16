import { useLayoutEffect } from "react";
import { Overlay } from "../../utils/overlay";
import { random } from "../../utils/functions";

export const PixelLoader = () => {
  useLayoutEffect(() => {
    const overlayEl = document.querySelector(".overlay");
    console.log(overlayEl);
    const overlay = new Overlay(overlayEl, {
      rows: 10,
      columns: 20,
    });
    overlay.show({
      transformOrigin: "50% 0%",
      duration: 1,
      ease: [0.6, -0.05, 0.25, 0.96],
      stagger: (index) =>
        0.03 * (overlay.cells.flat()[index].row + random(0, 5)),
    });
    setTimeout(() => {
      overlay.hide({
        transformOrigin: "50% 100%",
        duration: 1,
        ease: [0.6, -0.05, 0.25, 0.96],
        stagger: (index) =>
          0.03 * (overlay.cells.flat()[index].row + random(0, 5)),
      });
    }, 3000);
  });
  return <div className="overlay"></div>;
};

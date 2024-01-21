import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import MouseSVG from "../images/mouse.svg";
import gsap from "gsap";

function Mouse() {
  useEffect(() => {
    gsap.to(".mouse-root", {
      rotate: -360,
      ease: "linear",
      repeat: -1,
      duration: 5,
    });

    const handleCursorMove = (e) => {
      gsap.to(".mouse-root", {
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };

    const handleCursorEnter = (e) => {
      gsap.to(".mouse-root", {
        scale: 0,
      });
    };

    const handleCursorLeave = (e) => {
      gsap.to(".mouse-root", {
        scale: 1,
      });
    };

    const hoverables = document.querySelectorAll(".hoverable");
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", handleCursorEnter);
      hoverable.addEventListener("mouseleave", handleCursorLeave);
    });

    window.addEventListener("mousemove", handleCursorMove);
    // window.addEventListener("mouseenter", handleCursorMove);
    // window.addEventListener("mouseleave", handleCursorMove);

    return () => window.removeEventListener("mousemove", handleCursorMove);
  }, []);
  return (
    <div className="mouse-root fixed top-0 z-[1000] origin-center pointer-events-none">
      <img
        src={MouseSVG}
        className="w-[42px] mix-blend-difference bg-blend-difference"
      />
    </div>
  );
}

export default Mouse;

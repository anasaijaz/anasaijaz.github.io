import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import Sparkle from "../images/divider.svg";

const Marquee = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const container = useRef();

  useEffect(() => {
    const tween = gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });
  }, []);

  return (
    <div
      ref={container}
      className=" p-[30px 0px] text-[40px] overflow-hidden relative"
    >
      <div className="marquee__inner flex w-fit flex-auto flex-row">
        {Array(10)
          .fill(0)
          .map((_) => (
            <div className="marquee__part flex items-end flex-shrink-0">
              <p className="">
                <span className="text-[32px] font-[prompt] font-semibold tracking-widest">
                  Let's Connect
                </span>
              </p>
              <div className="arrow m-[0 1em] grid place-content-center">
                <img src={Sparkle} className="h-[48px] mx-10" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Marquee;

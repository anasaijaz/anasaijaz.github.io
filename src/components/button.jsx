import React, { useEffect, useRef, useState } from "react";

const Button = ({ children, style }) => {
  const btnRef = useRef(null);
  const [btnCoord, setBtnCoord] = useState([0, 0]);
  const [shadowCoordinates, setShadowCoordinates] = useState([0, 0]);

  useEffect(() => {
    if (btnRef !== null && btnRef.current !== null) {
      const btn = btnRef.current;
      setBtnCoord([
        btn.getBoundingClientRect().left,
        btn.getBoundingClientRect().top,
      ]);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const centerX = btnCoord[0];
      const centerY = btnCoord[1];
      const coord = [0, 0];
      if (event.pageX > centerX) {
        coord[0] = 1;
      }
      if (event.pageX < centerX) {
        coord[0] = -1;
      }
      if (event.pageY - window.scrollY < centerY) {
        coord[1] = -1;
      }
      if (event.pageY - window.scrollY > centerY) {
        coord[1] = 1;
      }

      if (
        coord[0] !== shadowCoordinates[0] ||
        coord[1] !== shadowCoordinates[1]
      )
        setShadowCoordinates(coord);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shadowCoordinates, btnCoord]);

  const signX = shadowCoordinates[0] > 0 ? "" : "-";
  const signY = shadowCoordinates[1] > 0 ? "" : "-";

  const shadow = `${signX}translate-x-${Math.abs(
    shadowCoordinates[0]
  )} ${signY}translate-y-${Math.abs(shadowCoordinates[1])}`;

  return (
    <a
      href="#_"
      className={`relative w-full inline-block px-4 py-2 font-medium group ${style}`}
    >
      <span
        className={`absolute inset-0 w-full h-full transition duration-200 ease-out transform ${shadow} bg-black group-hover:-translate-x-0 group-hover:-translate-y-0`}
      ></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span
        ref={btnRef}
        className="relative text-black group-hover:text-white text-center mx-auto block"
      >
        {children}
      </span>
    </a>
  );
};

export default Button;

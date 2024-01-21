import React from "react";

const Button = ({ children, style }) => {
  return (
    <a
      href="#_"
      className={`relative w-full inline-block px-4 py-2 font-medium group ${style}`}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white text-center mx-auto block">
        {children}
      </span>
    </a>
  );
};

export default Button;

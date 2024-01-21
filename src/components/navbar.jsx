import React from "react";
import Layout from "./layout";
import Link from "./Link";

const Navbar = () => {
  return (
    <Layout>
      <div className="py-10 flex md:flex-row flex-col justify-center items-center">
        <h3 className="font-semibold text-2xl flex-grow">ANAS AIJAZ</h3>
        <div className="z-50">
          <ul className="flex gap-5">
            <a href="#about">
              <Link label="About" />
            </a>

            <a href="#skills">
              <Link label="Skills" />
            </a>
            <a href="#work">
              <Link label="Work" />
            </a>
            <a href="#contact">
              <Link label="Contact" />
            </a>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Navbar;

import * as React from "react";
import {
  Button,
  Checkers,
  Layout,
  Navbar,
  PriceTable,
  SkillBalls,
  Spacer,
  VideoPill,
} from "./components";
import { Marquee } from "./components";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Potrait from "./images/potrait.png";
import Group from "./images/bg-1.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Mouse from "./components/mouse";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Quote from "./images/quote.svg";
import Lets from "./images/lets.png";
import Sparkle from "./images/star.svg";
import Project1 from "./images/projects/1.jpg";
import Project2 from "./images/projects/2.png";
import Project3 from "./images/projects/3.png";
import Project4 from "./images/projects/4.png";
import { HomePage, SketchesPage } from "./pages";
import { Route, Router, Routes } from "react-router-dom";

const IndexPage = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="root bg-black min-h-screen text-white font-[antonio]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sketches" element={<SketchesPage />} />
      </Routes>
    </main>
  );
};

///       SECTIONS USED IN THIS PAGE

export default IndexPage;

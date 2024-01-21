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
      <HeroSection />
      <div className="my-12" />
      <Mouse />
      <div className="pt-10">
        <Marquee />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />

      <div className="py-24 relative bg-white rounded-3xl text-black">
        <h1 className="text-center font-[prompt] attractor">
          Let's meet and get started
        </h1>
        <img
          src={Sparkle}
          className="sparkle w-[30px] md:w-[100px] absolute top-1/4 left-3/4 -translate-x-3/4 origin-center"
        />
        <img
          src={Sparkle}
          className="sparkle w-[30px] md:w-[50px] absolute top-1/2 left-1 translate-x-3/4 origin-center"
        />
        <img
          src={Sparkle}
          className="sparkle w-[30px] md:w-[50px] absolute top-1/2 right-1 -translate-x-3/4 origin-center"
        />
        <img
          src={Sparkle}
          className="sparkle w-[30px] md:w-[100px] absolute top-1/4 left-1/4 origin-center -translate-x-1/4"
        />
      </div>
    </main>
  );
};

///       SECTIONS USED IN THIS PAGE
function HeroSection() {
  return (
    <Layout style="hero-root">
      <div className="flex relative md:flex-row flex-col items-start">
        <div className="flex flex-1 flex-col gap-8">
          <h1 className="md:text-9xl text-7xl">
            Need a website for <span className="text-amber-600">Business?</span>
          </h1>
          <div className="flex items-center gap-3">
            <VideoPill videoUrl="https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6556aad6c6c3d81d6cd07e63_pexels-rostislav-uzunov-10613972%20(360p)-transcode.mp4" />
            <div className="relative z-20 w-[40px] h-[40px] md:w-[100px] md:h-[100px] bg-green-600 rounded-full grid place-content-center hover:bg-green-800 hoverable cursor-pointer transition-all">
              <a href="https://wa.me/+917073312466">
                <FaWhatsapp fontSize="52px" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:h-auto flex-1 h-[300px] md:mt-0 mt-[300px]">
          <div className="h-full overflow-hidden">
            <img
              src={Potrait}
              className="z-10 absolute w-[300px] md:w-[600px] right-0 -bottom-[0px]  drop-shadow-2xl"
            />
            <img
              src={Group}
              className="left-0 md:right-0 absolute md:relative -bottom-[10px] w-[300px] md:w-[600px]  z-0 bg-image animate-[spin_30000ms_linear_900ms_forwards_infinite]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function AboutSection() {
  return (
    <Layout>
      <div className="py-24 ">
        <div className="text-black bg-white md:bg-transparent rounded-3xl md:rounded-[70px] px-4 md:px-24 py-20 relative overflow-hidden z-20">
          <Checkers />

          <div className="w-full md:w-[700px] m-auto">
            <p className="text-sm font-medium  text-center">[About]</p>
            <h2 className="text-center font-thin text-xl w-full md:w-3/4 mx-auto pt-16">
              Hi I am Anas aijaz an Indian based developer, Looking for Cool new
              job oppurtunities as web designer and web developer
            </h2>
            <h1 className="text-center my-44 text-4xl md:text-8xl">
              As a Web designer I am dedicated to transforming ordinary websites
              into eye candies.
            </h1>
            <h2 className="text-center font-thin text-xl w-3/4 mx-auto">
              After year of experience in web development and web design I am
              the only person you need for your next big project
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function SkillsSection() {
  return (
    <div>
      <SkillBalls />
    </div>
  );
}

function ServicesSection() {
  return (
    <Layout>
      <p className="text-sm my-12 font-semibold font-[prompt] text-center">
        [Services]
      </p>

      <div className="flex justify-center flex-row">
        <PriceTable />
        <PriceTable />
        <PriceTable />
      </div>

      <div className="justify-between flex py-14">
        <p className="text-sm">[2019]</p>
        <p className="text-sm">[Web Design]</p>
        <p className="text-sm">[Front End]</p>
        <p className="text-sm">[WebFlow development]</p>
        <p className="text-sm">[2024]</p>
      </div>
    </Layout>
  );
}

function ProjectsSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.utils.toArray(".project").forEach((container) => {
      const img = container.querySelector("img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      });

      tl.fromTo(
        img,
        {
          yPercent: -20,
          ease: "none",
        },
        {
          yPercent: 10,
          ease: "none",
        },
        "<"
      );
    });
  }, []);

  return (
    <div className="project-root">
      <div className="image-container">
        <p className="text-sm font-medium  text-center py-16">[Projects]</p>

        <p className="text-center font-[prompt] pb-4 block md:hidden">
          Venture Capital Dashboard
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="project flex-grow h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              className="w-full absolute object-cove top-0r"
              src={Project1}
            />
          </div>

          <p className="text-center font-[prompt] pb-4 block md:hidden">
            NITK Racing
          </p>

          <div className="project flex-grow h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              className="h-full absolute object-cover top-0"
              src={Project2}
            />
          </div>
        </div>

        <Layout style="hidden md:block">
          <div className="grid grid-cols-2 pb-10">
            <p className="py-3 tracking-widest text-[outfit]">
              Venture Capital Dashboard
            </p>
            <p className="py-3">NITK Racing</p>
          </div>
        </Layout>

        <p className="text-center font-[prompt] pb-4 block md:hidden">
          Titan Appreciation Tree
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="project flex-grow h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              className=" h-full absolute object-cover top-0"
              src={Project3}
            />
          </div>{" "}
          <p className="text-center font-[prompt] pb-4 block md:hidden">
            Clothing e-commerce
          </p>
          <div className="project flex-grow h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              className="h-full absolute object-cover top-0"
              src={Project4}
            />
          </div>
        </div>

        <Layout style="hidden md:block">
          <div className="grid grid-cols-2 pb-10">
            <p className="py-3">Titan Appreciation Tree</p>
            <p className="py-3">Clothing e-commerce</p>
          </div>
        </Layout>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="root py-24">
      <Layout style="testimonials">
        <p className="text-sm font-medium  text-center py-16">
          [What they say]
        </p>

        <div className="flex flex-row relative">
          <div className="basis-full md:basis-3/4 flex flex-row gap-4">
            <div className="absolute top-4 right-0 w-[40px] md:w-auto md:relative">
              <img src={Quote} />
            </div>
            <div>
              <h2 className="text-3xl md:text-6xl font-[prompt] font-bold leading-snug">
                Incredible eye for detail! Exceeded expectations. Websites are a
                masterpiece.
              </h2>

              <p className="font-[prompt] pt-10 text-xl">BG Rozask</p>

              <p className="font-[prompt] pt-5 text-xl text-gray-400">7sNFT</p>
              <p className="font-[prompt]  text-xl text-gray-400">Founder</p>
            </div>
          </div>

          <div className="basis-1/4 hidden md:block">
            <div className="flex flex-col w-full items-center">
              <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
              <div className="-my-20 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
              <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="basis-1/4 block md:hidden py-10">
          <div className="flex flex-row w-full items-center">
            <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
            <div className="-my-20 h-[200px] w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
            <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

function ContactSection() {
  return (
    <Layout>
      <p className="text-sm font-medium  text-center py-16">[Contact]</p>

      <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-6 md:min-h-screen items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-[prompt] font-bold leading-snug">
            Let's Catch up
          </h2>
          <h2 className="text-4xl md:text-6xl text-right font-[prompt] font-bold leading-snug">
            And Start
          </h2>
          <h2 className="text-4xl md:text-6xl font-[prompt] font-bold leading-snug">
            Creating together
          </h2>
        </div>
        <div className="grid place-items-center">
          <div className="flex gap-10 z-50 relative">
            <a href="https://wa.me/+917073312466" className="hoverable">
              <FaWhatsapp
                fontSize={48}
                className=" hover:fill-green-600 transition-all"
              />
            </a>
            <a href="" className="hoverable">
              <FaInstagram
                fontSize={48}
                className=" hover:fill-pink-600 transition-all"
              />
            </a>

            <a href="https://linkedin.com/in/anasaijaz" className="hoverable">
              <FaLinkedin
                fontSize={48}
                className="hover:fill-blue-700 transition-all"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="justify-between flex py-14">
        <p className="text-sm">[2019]</p>
        <p className="text-sm">[Web Design]</p>
        <p className="text-sm">[Front End]</p>
        <p className="text-sm">[2024]</p>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>Home Page</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=Prompt:wght@100&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

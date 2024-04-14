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
} from "../components";
import { Marquee } from "../components";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Potrait from "../images/potraitb.png";
import Group from "../images/bg-1.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Mouse from "../components/mouse";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Quote from "../images/quote.svg";
import Lets from "../images/lets.png";
import Sparkle from "../images/star.svg";
import Project1 from "../images/projects/1.jpg";
import Project2 from "../images/projects/2.png";
import Project3 from "../images/projects/3.png";
import Project4 from "../images/projects/4.png";

function HomePage() {
  return (
    <div>
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
        <h1 className="text-center font-[prompt] attractor text-5xl">
          Let's meet and get started
        </h1>
        <img
          src={Sparkle}
          className="sparkle w-[30px] md:w-[100px] absolute top-1/4 left-3/4 -translate-x-1/2 origin-center"
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
          className="sparkle w-[30px] md:w-[100px] absolute top-1/4 left-1/4 origin-center -translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default HomePage;

/// SECTIONS IN THIS PAGE

function HeroSection() {
  return (
    <Layout style="hero-root">
      <div className="flex relative md:flex-row flex-col items-start">
        <div className="flex flex-1 flex-col gap-8">
          <h1 className="md:text-9xl text-7xl md:text-left ">
            Need a website for <span className="text-amber-600">Business?</span>
          </h1>
          <div className="flex items-center gap-3">
            <VideoPill videoUrl="https://assets-global.website-files.com/65523f13f8e3b9b3419c2a70/6556aad6c6c3d81d6cd07e63_pexels-rostislav-uzunov-10613972%20(360p)-transcode.mp4" />
            <div className="relative z-20 w-[40px] h-[40px] md:w-[100px] md:h-[100px] bg-green-600 rounded-full grid place-content-center hover:bg-green-800 hoverable cursor-pointer transition-all">
              <a href="https://wa.me/+917073312466">
                <FaWhatsapp fontSize="52px" />
              </a>
            </div>
            <div className="relative rounded-full overflow-hidden">
              <img
                src={Potrait}
                className="z-10 absolute top-0 left-1/2 -translate-x-1/2 w-[40px]  drop-shadow-2xl"
              />
              <img
                src={Group}
                className="w-[50px] md:hidden block z-0 bg-image animate-[spin_30000ms_linear_900ms_forwards_infinite]"
              />
            </div>
          </div>
        </div>
        <div className="md:h-auto flex-1 relative h-[300px] md:mt-0 mt-[100px] md:block hidden">
          <div className="h-full  rounded-full">
            <img
              src={Potrait}
              className="z-10 absolute w-[300px] rounded-full md:w-[600px] right-1/2 bottom-9  translate-x-1/2  drop-shadow-2xl"
            />
            <img
              src={Group}
              className="left-0 md:right-0 absolute md:relative -bottom-[10px] w-[300px] md:w-full  z-0 bg-image animate-[spin_30000ms_linear_900ms_forwards_infinite]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function AboutSection() {
  return (
    <Layout id="about">
      <div className="py-24 ">
        <div className="text-black bg-white md:bg-transparent rounded-3xl md:rounded-[70px] px-4 md:px-24 py-20 relative overflow-hidden z-20">
          <Checkers />

          <div className="w-full md:w-[700px] m-auto">
            <p className="text-sm font-medium  text-center">[About]</p>
            <h2 className="text-center font-thin text-xl w-full md:w-3/4 mx-auto pt-16">
              Hi I am Anas aijaz an India based developer, Looking for Cool new
              job oppurtunities as web designer and developer
            </h2>
            <h1 className="text-center my-44 text-4xl md:text-8xl">
              As a Web designer I am dedicated to transforming ordinary websites
              into eye candies.
            </h1>
            <h2 className="text-center font-thin text-xl w-3/4 mx-auto">
              After year of experience in web development and design I am the
              only person you need for your next big project
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function SkillsSection() {
  return (
    <Layout id="skills">
      <SkillBalls />
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
          trigger: ".image-container",
          scrub: true,
          start: "top 50%",
          end: "bottom -50%",
        },
      });

      tl.fromTo(
        img,
        {
          yPercent: -20,
          ease: "none",
        },
        {
          yPercent: 20,
          ease: "none",
        },
        "<"
      );
    });
  }, []);

  return (
    <div id="projects" className="project-root">
      <div className="image-container">
        <p className="text-sm font-medium  text-center py-16">[Projects]</p>

        <p className="text-center font-[prompt] pb-4 block md:hidden">
          Venture Capital Dashboard
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="project flex-grow h-[300px] md:h-[400px] overflow-hidden relative">
            <img
              className="w-full absolute object-cove top-0r"
              src={Project1}
            />
            <div className="absolute top-1/2 left-1/2">
              <Button style={"w-[100px]"}>Hire me</Button>
            </div>
          </div>

          <p className="text-center font-[prompt] pb-4 block md:hidden">
            NITK Racing
          </p>

          <div className="project flex-grow h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              className="h-full absolute object-cover top-0"
              src={Project2}
            />
            <div className="absolute top-1/2 left-1/2">
              <Button style={"w-[100px]"}>Hire me</Button>
            </div>
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
            <div className="absolute top-1/2 left-1/2">
              <Button style={"w-[100px]"}>Hire me</Button>
            </div>
          </div>{" "}
          <p className="text-center font-[prompt] pb-4 block md:hidden">
            Cybersecurity Landing page
          </p>
          <div className="project flex-grow h-[300px] md:h-[400px] relative overflow-hidden">
            <img
              className="h-full absolute object-cover top-0"
              src={Project4}
            />
            <div className="absolute top-1/2 left-1/2">
              <Button style={"w-[100px]"}>Hire me</Button>
            </div>
          </div>
        </div>

        <Layout style="hidden md:block">
          <div className="grid grid-cols-2 pb-10">
            <p className="py-3">Titan Appreciation Tree</p>
            <p className="py-3">Cybersecurity Landing</p>
          </div>
        </Layout>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div id="testimonials" className="root py-24">
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
              <div
                className={`-my-20 h-[200px] z-50 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://media.licdn.com/dms/image/C5603AQE2fTgc2yp7Yw/profile-displayphoto-shrink_400_400/0/1517405211684?e=2147483647&v=beta&t=vRC2dFOZE5iADZLngFN61RxugHgsv4D5F7xQnmcc4RQ')] rounded-full`}
              ></div>
              <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="basis-1/4 block md:hidden py-10">
          <div className="flex flex-row w-full items-center">
            <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
            <div
              className={`-my-20 h-[200px] z-50 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://media.licdn.com/dms/image/C5603AQE2fTgc2yp7Yw/profile-displayphoto-shrink_400_400/0/1517405211684?e=2147483647&v=beta&t=vRC2dFOZE5iADZLngFN61RxugHgsv4D5F7xQnmcc4RQ')] rounded-full`}
            ></div>
            <div className="h-[200px] opacity-25 w-[200px] bg-cover bg-center bg-no-repeat  bg-[url('https://images.pexels.com/photos/10498570/pexels-photo-10498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-full"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

function ContactSection() {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
        defaults: {
          duration: 2,
          scrollTrigger: {
            trigger: ".wrapper",
            pin: false,
          },
        },
      });
      timeline.from(".intro", {
        opacity: 0,
        stagger: 0.2,
      });
    },
    { scope: ".contact" }
  );

  return (
    <Layout id="contact">
      <div className="contact">
        <div className="wrapper">
          <p className="text-sm font-medium  text-center py-16">[Contact]</p>

          <div className="flex flex-col md:flex-row gap-10 md:gap-6 md:min-h-screen items-center">
            <div>
              <h2 className="intro text-4xl md:text-6xl font-[prompt] font-bold leading-snug">
                Let's Catch up
              </h2>
              <h2 className="intro text-4xl md:text-6xl text-right font-[prompt] font-bold leading-snug">
                And Start
              </h2>
              <h2 className="intro text-4xl md:text-6xl font-[prompt] font-bold leading-snug">
                Creating together
              </h2>
            </div>
            <div className="grid place-items-center flex-grow">
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

                <a
                  href="https://linkedin.com/in/anasaijaz"
                  className="hoverable"
                >
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
        </div>
      </div>
    </Layout>
  );
}

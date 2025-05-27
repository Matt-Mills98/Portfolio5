import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ExpCard from "./Components/ExpCard";
import resume from "./assets/MMills_Resume_2025.pdf";
import { projectCards, experienceCards } from "./Data/Data";

function BodyPanel({ color }) {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

  const about = useRef();
  const exp = useRef();
  const proj = useRef();
  const { contextSafe } = useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".content",
          start: "top top",
          end: `bottom top`,
          pin: ".leftMenu",
          scrub: 0.3,
        },
      });
      about.current = gsap.to("#aboutText", {
        paused: true,
        duration: 0.5,
        scrambleText: {
          text: `[LEARN ABOUT ME]`,
          speed: 0.5,
        },
      });
      exp.current = gsap.to("#expText", {
        paused: true,
        duration: 0.5,
        scrambleText: {
          text: `[WHERE I'VE WORKED]`,
          speed: 0.5,
        },
      });
      proj.current = gsap.to("#projText", {
        paused: true,
        duration: 0.5,
        scrambleText: {
          text: `[SOME FUN PROJECTS]`,
          speed: 0.5,
        },
      });
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".content",
            start: "top top",
            end: `bottom top`,
            scrub: true,
          },
        })
        .fromTo(
          ".cursor-glow",
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0 }
        )
        .to("#navLine1", { scaleX: 2, width: "4.5rem", duration: .3 }, 0)
        .fromTo(
          "#aboutHeader",
          { color: "#71717a" },
          { color: color, duration: .3 },
          0
        )
        .to("#navLine1", { scaleX: 1, width: "2.5rem", duration: 2 }, 4)
        .to("#aboutHeader", { color: "#71717a" }, 4)

        .to("#navLine2", { scaleX: 2, width: "4.5rem", duration: 2 }, 4)
        .fromTo(
          "#expHeader",
          { color: "#71717a" },
          { color: color, duration: 2 },
          4
        )
        .to("#navLine2", { scaleX: 1, width: "2.5rem", duration: 2 }, 16)
        .to("#expHeader", { color: "#71717a", duration: 2 }, 16)

        .to("#navLine3", { scaleX: 2, width: "4.5rem", duration: 2 }, 16)
        .fromTo("#projHeader", { color: "#71717a" }, { color: color }, 16)

        .to("#navLine3", { scaleX: 1, width: "2.5rem", duration: 2 }, 31)
        .to("#projHeader", { color:  "#71717a" }, 31);
      console.log(tl.duration());
    },
    { dependencies: [color], revertOnUpdate: true }
  );
  const navigate = contextSafe((pos) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: pos, offsetY: 50 },
      ease: "power2.inOut",
      autoKill: true,
    });
  }, []);
  const hover = (pos) => {
    if (pos === "about") {
      about.current.play();
    } else if (pos === "exp") {
      exp.current.play();
    } else {
      proj.current.play();
    }
  };
  const buttonLeave = (pos) => {
    if (pos === "about") {
      about.current.reverse();
    } else if (pos === "exp") {
      exp.current.reverse();
    } else {
      proj.current.reverse();
    }
  };
  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
      document
        .getElementsByClassName("content")[0]
        .addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
  };
  return (
    <div
      id={"bodyPanel"}
      className="w-full h-full overflow-hidden bg-zinc-900 flex justify-center max-w-screen"
    >
      <div
        className="cursor-glow pointer-events-none z-30 transition duration-300  fixed inset-0 flex justify-center sm:px-8 lg:visible md:collapse"
        style={{
          background: `radial-gradient(1500px at ${useMousePosition().x}px ${
            useMousePosition().y
          }px, ${color}10, transparent 65%)`,
        }}
      ></div>
      <div className="max-w-[1200px] overflow-hidden">
        <div
          id="content"
          className="content w-full h-full flex align-center text-left py-20"
        >
          <div className="leftMenu xl:w-1/3 lg:w-1/3 w-0 h-full lg:mx-4 xl:mx-0 lg:visible collapse overflow-hidden">
            <h1 className="text-white font-[Inter] font-bold font-sans text-6xl py-2">
              Matt Mills
            </h1>
            <h2
              className="font-[Inter] font-medium font-sans text-xl py-2"
              style={{ color: color }}
            >
              Software Engineer
            </h2>
            <div className="flex flex-col py-24">
              <button
                id="aboutHeader"
                className="text-zinc-500 aboutHeader font-[Inter] font-light font-sans text-lg text-left cursor-pointer flex flex-nowrap"
                onClick={() => {
                  navigate("#scrollBody");
                }}
                onMouseEnter={() => {
                  hover("about");
                }}
                onMouseLeave={() => {
                  buttonLeave("about");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-8 px-2"
                  id="navLine1"
                >
                  <path
                    className=""
                    id="navLine1Path"
                    d="M0 10 L24 10"
                    stroke="#71717a"
                    strokeWidth={2}
                  />
                </svg>
                <p id="aboutText">ABOUT</p>
              </button>
              <button
                id="expHeader"
                className="expHeader text-zinc-500 font-[Inter] font-light font-sans text-lg text-left cursor-pointer flex flex-nowrap"
                onClick={() => {
                  navigate("#navigate-exp1");
                }}
                onMouseEnter={() => {
                  hover("exp");
                }}
                onMouseLeave={() => {
                  buttonLeave("exp");
                }}
                onMouseOver={() => {
                  hover("exp");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-8 px-2"
                  id="navLine2"
                >
                  <path
                    className=""
                    id="navLine2Path"
                    d="M0 10 L24 10"
                    stroke="#71717a"
                    strokeWidth={2}
                  />
                </svg>
                <p id="expText">EXPERIENCE</p>
              </button>
              <button
                id="projHeader"
                className="text-zinc-500 font-[Inter] font-light font-sans text-lg text-left cursor-pointer flex flex-nowrap"
                onClick={() => {
                  navigate("#navigate-proj1");
                }}
                onMouseEnter={() => {
                  hover("proj");
                }}
                onMouseLeave={() => {
                  buttonLeave("proj");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-8 px-2"
                  id="navLine3"
                >
                  <path
                    className=""
                    id="navLine3Path"
                    d="M0 10 L24 10"
                    stroke="#71717a"
                    strokeWidth={2}
                  />
                </svg>
                <p id="projText">PROJECTS</p>
              </button>
            </div>
          </div>

          <div
            id="scrollBody"
            className="body xs:w-full sm:w-full md:w-full lg:w-5/6 xl:w-2/3  h-full bg-zinc-900 overflow-hidden"
          >
            <div className="w-full bg-zinc-900 xl:px-20 lg:px-12 md:px-6 sm:px-2 xs:px-2">
              <div className="py-10 px-4">
                <p className="text-zinc-400 font-[Inter] font-light font-sans  text-sm sm:text-sm md:text-base lg:text-base xl:text-base tracking-wide">
                  I'm a software engineer with roughly 4 years of experience. I
                  primarily enjoy frontend development as this allows me to
                  express my creativity and artistic capabilities. That being
                  said, I have experience in writing APIs as well as writing
                  database scripts and stored procedures. &nbsp;
                </p>
                <p className="text-zinc-400 font-[Inter] font-light font-sans  text-sm sm:text-sm md:text-base lg:text-base xl:text-base mt-3 tracking-wide">
                  I'm constantly learning new things and experimenting with new
                  technologies. This allows me to both stay current with new
                  tech advances and improve my understanding of software
                  engineering as a whole. Most recently, I've been growing my
                  ability with GSAP, ThreeJS, and consistently improving my JS
                  fundamentals. &nbsp;
                </p>
                <p className="text-zinc-400 font-[Inter] font-light font-sans  text-sm sm:text-sm md:text-base lg:text-base xl:text-base mt-3 tracking-wide">
                  Outside of coding, I recently purchased a condo in King of
                  Prussia, where I have been learning different DIY skills such
                  as woodworking for furniture and restoration,
                  professional-like painting of walls and cabinets, electrical,
                  and plumbing. I find it pretty interesting how engineering
                  principles and problem-solving abilities can apply to many
                  issues found in home ownership. It has been an enjoyable
                  experience so far. &nbsp;
                </p>
                <p className="text-zinc-400 font-[Inter] font-light font-sans  text-sm sm:text-sm md:text-base lg:text-base xl:text-base mt-3 tracking-wide">
                  In my free time, I enjoy reading fantasy novels, painting with
                  oil and acrylic mediums, exercise, coding, and playing video
                  games. &nbsp;
                </p>
              </div>
              <div className="w-full h-full py-10 overflow-hidden">
                {experienceCards.map((card) => (
                  <ExpCard color={color} card={card}></ExpCard>
                ))}
              </div>
              <div className="w-full flex justify-end overflow-hidden">
                <a
                  href={resume}
                  className="font-[Inter] font-medium font-sans  text-md text-right duration-300 hover:bg-zinc-800 duration-300 hover:shadow-md rounded-full p-4"
                  style={{ color: color }}
                >
                  ...View Full Resume
                </a>
              </div>
              <div className="w-full h-full py-10 overflow-hidden">
                {projectCards.map((card) => (
                  <ExpCard color={color} card={card}></ExpCard>
                ))}
              </div>
              <div className="w-full flex justify-end overflow-hidden">
                <a
                  href={"https://github.com/Matt-Mills98"}
                  className="font-[Inter] font-medium font-sans text-md text-right duration-300 hover:bg-zinc-800 duration-300 hover:shadow-md rounded-full p-4"
                  style={{ color: color }}
                >
                  ...View GitHub Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyPanel;

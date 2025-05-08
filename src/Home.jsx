import MmillsLogo from "./MmillsModel";
import "./index.css";
import { useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "./Footer";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import Menu from "./Menu";

export default function Home({ color, accentColors, setColor }) {
  const [loadMmills, setMmills] = useState(true);

  const main = useRef();

  const { contextSafe } = useGSAP(() => {
    const items = gsap.utils.toArray(".mmillsTitle");
    items.forEach((item) => {
      var split = new SplitText(item, { type: "chars" });
      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: "#Mmills",
          start: "clamp(top top)",
          endTrigger: "#aboutPanel",
          end: "clamp(top center)",
          scrub: 1,
          // markers: true
        },
        stagger: { from: "center", each: 0.03 },
        width: 50,
        alpha: 0,
      });
    });

    gsap
      .timeline()
      .to(".scrollArrow", {
        scrollTrigger: {
          trigger: "#Mmills",
          start: "clamp(top top)",
          endTrigger: "#aboutPanel",
          end: "+=25",
          scrub: 1,
        },
        duration: 1,
        autoAlpha: 0,
      })
      .fromTo(
        ".scrollArrowSVG",
        {
          autoAlpha: 0,
          y: 550,
        },
        {
          autoAlpha: 1,
          delay: 0,
          ease: "none",
          duration: 0.8,
          repeat: -1,
          y: -550,
        }
      )
      .fromTo(
        ".scrollArrow",
        {
          duration: 1,
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
        },
        "+=5"
      );
  }, []);
 
  return (
    <ErrorBoundary
      fallback={
        <div className="w-full h-full flex justify-center items-center text-white">
          This website uses WebGL. If you are seeing this, it is likely your
          browser does not support WebGL or some other error occurred.
        </div>
      }
    >
      <main ref={main}>
        <div id="containerTop">
          <section
            id="Mmills"
            className="panel min-h-screen w-screen flex items-center justify-center max-w-100v sticky top-0"
          >
            <div className="max-w-100v w-full flex items-center justify-center min-h-screen h-screen">
              {loadMmills && <MmillsLogo color={color} />}
            </div>
            <Menu accentColors={accentColors} setColor={setColor}></Menu>

            <div
              id="mmillsContainer"
              className="absolute md:flex-nowrap md:flex justify-center"
            >
              <p className="mmillsTitle text-white font-Poppins text-3xl mx-2 font-medium pt-2 opacity-90 text-center whitespace-nowrap select-none ">
                [ MATT MILLS ]
              </p>
              <p className="mmillsTitle text-white font-Poppins text-3xl mx-2 font-extralight pt-2 opacity-90 text-center whitespace-nowrap select-none">
                [ SOFTWARE ENGINEER ]
              </p>
            </div>
            <div className="scrollArrow absolute bottom-10 right-0 flex justify-center -rotate-90">
              <svg
                viewBox="0 0 603 504"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 -rotate-90 "
                fill={color}
              >
                <path
                  className="scrollArrowSVG"
                  d="M2 219.5L213 1L431.5 219.5L312 206.5C312 206.5 355.5 476.5 312 476.5C268.5 476.5 213 476.5 213 476.5C213 476.5 165 476.5 116.5 476.5C68 476.5 116.5 206.5 116.5 206.5L2 219.5Z"
                />
              </svg>
              <p className="text-white font-Poppins text-md mx-2 pt-2 opacity-70">
                SCROLL
              </p>
            </div>
            <div className="scrollArrow absolute bottom-10 left-0 flex justify-center -rotate-90">
              <svg
                viewBox="0 0 603 504"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 -rotate-90 "
                fill={color}
              >
                <path
                  className="scrollArrowSVG"
                  d="M2 219.5L213 1L431.5 219.5L312 206.5C312 206.5 355.5 476.5 312 476.5C268.5 476.5 213 476.5 213 476.5C213 476.5 165 476.5 116.5 476.5C68 476.5 116.5 206.5 116.5 206.5L2 219.5Z"
                />
              </svg>
              <p className="text-white  font-Poppins text-md mx-2  pt-2  opacity-70 ">
                SCROLL
              </p>
            </div>
          </section>
          <section
            id="aboutPanel"
            className="panel relative h-full w-screen bg-black"
          >
            <div id="Footer" className="h-full w-auto">
              <Footer color={color} />
            </div>
          </section>
        </div>
      </main>
    </ErrorBoundary>
  );
}

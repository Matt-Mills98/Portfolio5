import React from "react";
import "./index.css";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function ColorPicker(props) {
  const { accentColors, setColor } = props;

  gsap.registerPlugin(MotionPathPlugin);
  const logoMotion = useRef();

  // Assuming you have a circle path defined as #circlePath
  const { contextSafe } = useGSAP(() => {
    logoMotion.current = gsap
      .timeline()
      .to(
        "#Dropper",
        {
          duration: 0.4,
          morphSVG: "M3 4 L24 4",
          stroke: "#FFF",
          rotate: 45,
          strokeWidth: "2.3",
          ease: "power1.inOut",
        },
        0
      )
      .to(
        "#lowerHamburgerLine1",
        {
          duration: 0.4,
          opacity: 1,
          morphSVG: "M3 20 L24 20",

          rotate: -45,
          strokeWidth: "2.3",
          ease: "power1.inOut",
        },
        0
      );

    const items = gsap.utils.toArray(".circleColors");

    items.forEach((item, index) => {
      const radius = 75; // Adjust as needed
      const angle = (index / items.length) * Math.PI * 1;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      logoMotion.current
        .fromTo(
          item,
          { x: x, y: y, autoAlpha: 0, scale: 0 },
          {
            scale: 1,
            x: x,
            y: y,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power1.inOut",
          },
          0.2
        )
        .reverse();
    });
  }, []);
  const logoMotionIsActive = contextSafe(() => {
    return logoMotion.current.isActive();
  });
  const logoMotionRemovePause = contextSafe(() => {
    return logoMotion.current.removePause(0.4);
  });
  const logoMotionPlay = contextSafe(() => {
    return logoMotion.current.play();
  });
  const logoMotionReversed = contextSafe(() => {
    return !logoMotion.current.reversed();
  });
  const logoMotionReverse = contextSafe(() => {
    return !logoMotion.current.reverse();
  });
  const logoMotionPaused = contextSafe(() => {
    return logoMotion.current.paused();
  });

  return (
    <div className="gsapContainer absolute top-7 right-6 rounded-xl flex flex-col z-20">
      <div
        onClick={() => {
          if (!logoMotionIsActive()) {
            logoMotionPaused() || !logoMotionReversed()
              ? logoMotionPlay()
              : logoMotionReverse();
          }
        }}
        className={`transition  cursor-pointer  h-8 w-8`}
      >
        <a className="flex justify-center items-center font-medium block h-full w-full rounded p-0 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="#FFF"
          >
            <path
              id="Dropper"
              d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"
            />
          </svg>
          <div className="absolute">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              id="lowerHamburger1"
            >
              <path
                className="opacity-0"
                id="lowerHamburgerLine1"
                d="M1 20 L23 20"
                stroke="#FFF"
              />
            </svg>
          </div>
        </a>
      </div>
      <div
        id="colorDropdown"
        className="rotationCircle absolute top-7 right-6 rotate-60"
      >
        {accentColors?.map((color) => (
          <div
            key={`select-${color}`}
            onClick={() => {
              setColor(color);
              if (logoMotionPaused() || !logoMotionReversed()) {
                logoMotionPlay();
              } else {
                logoMotionRemovePause();
                logoMotionReverse();
              }
            }}
            className={`circleColors w-6 h-6 absolute rounded cursor-pointer`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
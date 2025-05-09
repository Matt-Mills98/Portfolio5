import React from "react";
import "./index.css";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import resume from "./assets/MMills_Resume_2024.pdf";

function Menu(props) {
  const { accentColors, setColor } = props;

  const menuOptions = [
    {
      id: "LinkedIn",
      asset: "/LinkedIn.png",
      link: "https://www.linkedin.com/in/matt-mills-633b00214/",
    },
    {
      id: "Resume",
      asset: "/PDFIcon.png",
      link: resume,
    },
    {
      id: "Email",
      asset: "/MailIcon.png",
      link: "mailto:mattmills32013@gmail.com",
    },
    {
      id: "GitHub",
      asset: "/GithubIcon.png",
      link: "https://github.com/Matt-Mills98",
    },
  ];

  gsap.registerPlugin(MotionPathPlugin);
  const tl = useRef();
  const logoMotion = useRef();

  // Assuming you have a circle path defined as #circlePath
  const { contextSafe } = useGSAP(() => {
    logoMotion.current = gsap
      .timeline()
      .to(
        "#MmillsLogo",
        {
          duration: 0.4,
          morphSVG: "M100 80 L500 80",
          stroke: "#FFF",
          strokeWidth: "50",
          ease: "power1.inOut",
        },
        0
      )
      .fromTo(
        "#lowerHamburger",
        {
          fill: "#FFFFFF",
          scaleY: 0,
          opacity: 0,
          y: -10,
        },
        {
          fill: "#FFFFFF",
          duration: 0.2,
          scaleY: 1,
          opacity: 1,
          y: 0,
        },
        0.4
      )
      .addPause(0.6)
      .to(
        "#middleHamburgerLine",
        {
          opacity: 0,
        },
        0.6
      )
      .to(
        "#MmillsLogo",
        {
          duration: 0.2,
          scaleX: 1.25,
          rotate: 45,
        },
        0.6
      )
      .to(
        "#lowerHamburgerLine",
        {
          duration: 0.2,
          scaleX: 1.25,
          rotate: -45,
        },
        0.6
      );
    const items = gsap.utils.toArray(".circleItems");

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
            duration: 0.6,
            ease: "power1.inOut",
          },
          0.6
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

  /*const onMouseEnter = ({ currentTarget }) => {
    let q = gsap.utils.selector(currentTarget);
    gsap.to(q("#strike"), { width: "100%" });
  };

  const onMouseLeave = ({ currentTarget }) => {
    let q = gsap.utils.selector(currentTarget);
    gsap.to(q("#strike"), { width: "0px" });
  };

  const className =
    "appButton flex justify-center items-start font-Poppins font-medium leading-3 text-white relative";
  const strikeClass =
    "bg-white h-[2px]  absolute top-[40%] left-0 right-0 mr-auto ml-auto w-0";
  const menuStrikeClass =
    "bg-white h-[4px]  absolute top-[45%] left-0 right-0 mr-auto ml-auto w-0 ";
  const menuItemClass =
    "appButton flex justify-center font-Poppins text-3xl text-white relative my-6";
*/

  return (
    <div className="gsapContainer absolute top-6 left-6 rounded-xl flex flex-col z-20">
      <div
        onMouseEnter={() => {
          if (logoMotionPaused() && !logoMotionReversed()) {
            logoMotionReverse();
          } else if (
            !logoMotionPaused() &&
            !logoMotionReversed() &&
            !logoMotionIsActive()
          ) {
            logoMotionPlay();
          }
        }}
        onMouseLeave={() => {
          if (!logoMotionIsActive()) {
            if (logoMotionPaused() && logoMotionReversed()) {
              logoMotionReverse();
            } else if (logoMotionPaused() && !logoMotionReversed()) {
              logoMotionReverse();
            }
          }
        }}
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
            viewBox="0 0 603 504"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="#FFF"
          >
            <path
              id="MmillsLogo"
              d="M174.25 297.706C174.25 297.706 93.0894 38.0463 46.8677 1.70922C0.645985 -34.6279 -16.4596 520.649 18.8435 503.616C54.1466 486.583 69.0687 170.904 69.0687 170.904C69.0687 170.904 165.151 484.69 190.992 424.885C216.832 365.081 237.214 222.76 237.214 222.76C237.214 222.76 344.215 424.885 355.497 386.277C366.78 347.669 388.981 207.241 388.981 207.241C388.981 207.241 464.682 363.188 473.781 334.421C482.88 305.654 490.523 222.76 490.523 222.76C490.523 222.76 488.703 220.868 575.687 251.527C662.672 282.186 516.364 161.063 490.523 142.137C464.682 123.212 449.76 251.527 449.76 251.527C449.76 251.527 399.9 142.137 375.879 99.7438C351.858 57.3505 335.116 297.706 335.116 297.706C335.116 297.706 239.033 80.4397 224.111 55.4579C209.189 30.4761 174.25 297.706 174.25 297.706Z"
            />
          </svg>
          <div className="absolute">
            <svg
              viewBox="0 0 603 504"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 opacity-0"
              id="lowerHamburger"
            >
              <path
                id="middleHamburgerLine"
                d="M100 250 L500 250"
                stroke="#FFF"
                strokeWidth="50"
              />
              <path
                id="lowerHamburgerLine"
                d="M100 420 L500 420"
                stroke="#FFF"
                strokeWidth="50"
              />
            </svg>
          </div>
        </a>
      </div>
      <div
        id="colorDropdown"
        className="rotationCircle absolute top-7 left-6 rotate-340"
      >
        {menuOptions?.map((option) => (
          <div
            key={`select-${option.id}`}
            onClick={() => {
              if (logoMotionPaused() || !logoMotionReversed()) {
                logoMotionPlay();
              } else {
                logoMotionRemovePause();
                logoMotionReverse();
              }
            }}
            className={`circleItems w-8 h-8 absolute cursor-pointer`}
          >
            <a href={option.link}>
              <img src={option.asset}></img>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

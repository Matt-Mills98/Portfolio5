import React, { useRef, useState } from "react";
import "../index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ExpCard({ color, card }) {
  const navigate = useRef();
  const [open, setOpen] = useState(false);
  const { contextSafe } = useGSAP(() => {
    navigate.current = gsap
      .timeline()
      .fromTo(
        `#navigate-${card?.id}`,
        {
          drawSVG: 0,
        },
        {
          drawSVG: 100,
          ease: "power3.inOut",
          duration: 0.5,
        }
      )
      .to(`#svg-${card?.id}`, { stroke: color, strokeWidth: 2 }, 0.1)
      .reverse();
  }, [color]);

  const onMouseEnter = () => {
    navigate.current.play();
  };

  const onMouseLeave = () => {
    navigate.current.reverse();
  };

  return (
    <>
      <div
        id={card?.id}
        className="rounded-lg relative z-20 grid grid-cols-1 gap-0 md:grid md:grid-cols-4 md:gap-24 hover:bg-zinc-800 duration-300 hover:shadow-md p-4 overflow-hidden"
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        aria-label={card?.label}
      >
        <div className="md:visible collapse">
          <p
            className={`text-left text-zinc-400 text-md text-nowrap font-[Inter] font-mid font-sans `}
          >
            {card?.date}
          </p>
        </div>
        <div className="mx-2 text-center md:text-right md:col-span-3">
          <h3 className="text-left text-xl text-white font-[Inter] font-medium font-sans">
            {card?.title}
          </h3>
          <a
            style={{ color: color }}
            href={card?.link}
            target="_blank"
            className="flex justify-left items-center gap-2"
          >
            <h4 className="text-left text-lg font-[Inter]  font-sans">
              {card?.subTitle}
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#52525b"
              className="size-5"
              id={`svg-${card?.id}`}
            >
              <path
                id={`navigate-${card?.id}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5 m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            <span
              onClick={() => {
                if (card?.type === "proj") {
                  setOpen(true);
                }
              }}
              className="absolute h-full w-full z-10 top-0 left-0 cursor-pointer"
            ></span>
          </a>
          <p
            className={`text-left text-sm text-zinc-400 font-[Inter] font-light font-sans mt-2 tracking-wide`}
          >
            {card?.description}
          </p>
          <div className="flex flex-wrap">
            {card?.stack?.map((tool) => (
              <div
                className="rounded-full text-zinc-900 text-xs p-2 mr-2 mt-4 text-nowrap font-[Inter] font-black font-sans"
                style={{ backgroundColor: color }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpCard;

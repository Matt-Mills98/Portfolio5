import Home from "./Home";

import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import Observer from "gsap/Observer";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  MorphSVGPlugin,
  ScrambleTextPlugin,
  SplitText,
  useGSAP,
  Draggable,
  InertiaPlugin,
  Observer,
);

export default function App() {
  const accentColors = [
    "#EF4444",
    "#F97316",
    "#F59E0B",
    "#EAB308",
    "#84CC16",
    "#22C55E",
    "#10B981",
    "#14B8A6",
    "#06B6D4",
    "#0EA5E9",
    "#6366F1",
    "#A855F7",
    "#EC4899",
    "#F43F5E",
    "#94A3B8",
    "#CCCCAA",
  ];

  const [color, setColor] = useState(
    localStorage.getItem("accentColor") ?? "#CCCCAA"
  );

  const setAccentColor = (color) => {
    localStorage.setItem("accentColor", color);
    setColor(color);
  };

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Home
      color={color}
      accentColors={accentColors}
      setColor={setAccentColor}
    ></Home>
  );
}

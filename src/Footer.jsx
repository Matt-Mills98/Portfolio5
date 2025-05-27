import React from "react";
import "./index.css";
import { menuOptions } from "./Data/Data";
function Footer(props) {
  return (
    <div className={`w-full text-zinc-400 h-full bg-zinc-900 text-center p-6`}>
      <div id="menuFooter" className="flex gap-2 justify-center items-center">
        © Matt Mills 2025
        {menuOptions?.map((option) => (
          <a aria-label={option.label} title={option.label} href={option.link}>
            {option.child}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;

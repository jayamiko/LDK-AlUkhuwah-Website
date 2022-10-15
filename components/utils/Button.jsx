import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({
  path,
  blank = true,
  text,
  icon,
  arrow = true,
  color = "bg-cyan-500",
  onSubmit,
}) {
  return (
    <>
      {path ? (
        <Link href={path}>
          <a target={blank ? "_blank" : "_self"}>
            <button
              className={`w-full h-10 rounded-md shadow-md text-white ${color} font-semibold hover:scale-105 text-xs sm:text-sm xl:text-base`}
            >
              {text}
              {arrow && (
                <FontAwesomeIcon
                  icon={icon}
                  className="ml-2 text-white text-base sm:text-lg mr-2"
                ></FontAwesomeIcon>
              )}
            </button>
          </a>
        </Link>
      ) : (
        <button
          className="w-24 h-12 rounded-md bg-cyan-500 shadow-md text-white font-semibold hover:scale-105"
          onSubmit={onSubmit}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default Button;

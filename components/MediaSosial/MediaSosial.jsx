import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediasosial } from "../../data/data";

function MediaSosial() {
  return (
    <div className="flex my-auto w-fit space-x-2">
      {mediasosial.map((sosmed) => {
        return (
          <>
            <a
              index={sosmed.id}
              href={sosmed.link}
              className={`flex items-center justify-center hover:brightness-110 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 hover:scale-110`}
              style={{
                background: `${sosmed.color}`,
              }}
            >
              <FontAwesomeIcon
                icon={sosmed.icon}
                className="text-white text-sm md:text-base xl:text-xl"
              ></FontAwesomeIcon>
            </a>
          </>
        );
      })}
    </div>
  );
}

export default MediaSosial;

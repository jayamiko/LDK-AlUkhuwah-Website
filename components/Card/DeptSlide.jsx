import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faStarAndCrescent,
  faCalendarTimes,
  faArrowLeft,
  faArrowRight,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { departement } from "../../data/data";

export default function DepartementCard() {
  const [stateStart, setStateStart] = useState(0);
  const [stateEnd, setStateEnd] = useState(1);

  function next() {
    if (stateEnd !== departement.length) {
      setStateStart(stateStart + 1);
      setStateEnd(stateEnd + 1);
    }
  }

  function prev() {
    if (stateStart !== 0) {
      setStateStart(stateStart - 1);
      setStateEnd(stateEnd - 1);
    }
  }

  return (
    <>
      <div className="h-full w-full mx-auto rounded-2xl bg-black opacity-50 bg-no-repeat bg-cover bg-center brightness-50"></div>
      <div className="absolute h-full w-[90%] sm:w-[91%] md:w-[93%] lg:w-[95%] xl:w-[96%] mx-auto rounded-2xl">
        {departement.slice(stateStart, stateEnd).map((item) => {
          return (
            <>
              <div className="w-full h-1/2 shadow-md rounded-xl">
                <div className="relative h-full rounded-xl">
                  <Image
                    src={item.logo}
                    alt="logo-departemen"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="w-full h-fit brightness-125">
                <p className="mt-2 mb-0 font-bold pl-1 text-center lg:text-left text-sm text-primary">
                  Departemen LDK Al-Ukhuwah
                </p>
                <h1 className="mt-0 mb-2 uppercase text-egg-green text-center lg:text-left text-2xl font-black tracking-wide">
                  {item.title}
                  <FontAwesomeIcon
                    icon={faStarAndCrescent}
                    className="ml-2 text-egg-green text-2xl"
                  ></FontAwesomeIcon>
                </h1>

                <p className="px-2 text-white text-center text-sm lg:text-base italic text-edu lg:text-center line-clamp-3">
                  {item.desc}
                </p>

                {/* <div className="text-white flex justify-center items-center px-2 gap-2">
                  <div className="w-fit flex items-center text-sm">
                    <FontAwesomeIcon 
                      icon={faUserGroup}
                      className="mr-2 text-primary"
                    ></FontAwesomeIcon>
                    <span>+{item.members} Anggota</span>
                  </div>
                  <div className="w-fit first-line:flex items-center text-sm">
                    <FontAwesomeIcon 
                      icon={faStarAndCrescent}
                      className="capitalize mr-2 text-emerald-600"
                    ></FontAwesomeIcon>
                    <span>{item.category}</span>
                  </div>
                  <div className="w-fit flex items-center text-sm">
                    <FontAwesomeIcon 
                      icon={faCalendarTimes}
                      className="mr-2 text-red-500"
                    ></FontAwesomeIcon>
                    <span>+{item.programs} Program</span>
                  </div>
                </div> */}
                <div className="py-4 px-2 text-white flex justify-center gap-2">
                  <div
                    className="flex items-center hover:text-red-600 hover:font-semibold cursor-pointer w-fit"
                    onClick={() => prev()}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={`${stateStart === 0 && "text-gray-500"} mr-2`}
                    ></FontAwesomeIcon>
                    <span className={`${stateStart === 0 && "text-gray-500"}`}>
                      Prev
                    </span>
                  </div>
                  <div className="flex items-center hover:font-semibold  cursor-pointer w-fit">
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      className="animate-spin text-cyan-500"
                    ></FontAwesomeIcon>
                  </div>
                  <div
                    className="flex items-center hover:text-green-500 hover:font-semibold cursor-pointer w-fit"
                    onClick={() => next()}
                  >
                    <span
                      className={`${
                        stateEnd === departement.length && "text-gray-500"
                      }`}
                    >
                      Next
                    </span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={`${
                        stateEnd === departement.length && "text-gray-500"
                      } ml-2`}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

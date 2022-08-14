import React from "react";
// import Link from "next/link"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp, faMeetup } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faCloudSun, faComments } from "@fortawesome/free-solid-svg-icons"
import Button from "../utils/Button";

const CourseCard = ({resultQuery}) => {
  return (
      <>
        <div className="gap-3 sm:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {resultQuery.slice(0, 6).map((item, index) => (
              <div key={index} className="border-2 sm:border-none rounded-md p-2 overflow-hidden mb-4 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/50">
                <div className="h-48 sm:h-64 md:h-64 md:max-h-64 relative">
                  <Image 
                    src={item.cover}
                    layout="fill"
                    objectFit="cover"
                    alt="content-mentoring"
                    className="rounded-md"
                    />
                </div>
                <div className="p-1">
                  <div className="text-sm flex justify-between my-2">
                    <span className="text-xs sm:text-base text-orange-400 italic">
                      <FontAwesomeIcon 
                        icon={faCloudSun}
                        className="mr-2"
                      ></FontAwesomeIcon>
                      <label>{item.date}</label>
                    </span>
                    <span className="text-xs sm:text-sm text-emerald-700">
                      <FontAwesomeIcon 
                        icon={faComments}
                        className="mr-2"
                      ></FontAwesomeIcon>
                      <label><b>23</b> Reviews</label>
                    </span>
                    {/* <span className="text-xs sm:text-base text-amber-400">
                      <FontAwesomeIcon 
                        icon={faStar}
                        className="mr-2"
                      ></FontAwesomeIcon>
                      <label>Umum</label>
                    </span> */}
                  </div>
                  <h1 className="text-cyan-500 text-xl m-0 font-bold">{item.title}</h1>
                  <span className="text-xs sm:text-sm font-edu">{item.desc}</span>
                  <div className="w-full my-3">
                    <Button path="/" text="Lihat Detail" icon={faArrowRight} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </>
  );
};

export default CourseCard;
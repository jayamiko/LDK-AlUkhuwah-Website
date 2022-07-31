import React from "react";
import { blog } from "../../data/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

const CourseCard = () => {
  return (
    <>
        <div className="container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blog.slice(0, 6).map((val, index) => (
              <div key={index} className="p-2 overflow-hidden mb-4 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/50">
                <div className="h-64 max-h-64 relative">
                  <Image 
                    src={val.cover} 
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    className="rounded-md"
                    />
                </div>
                <div className="p-1">
                  <div className="text-sm flex justify-between my-2">
                    <span className="text-gray-700">
                      <i className="fa fa-user"></i>
                      <label>{val.type}</label>
                    </span>
                    <span className="text-orange-400 italic">
                      <i className="fa fa-calendar-alt"></i>
                      <label>{val.date}</label>
                    </span>
                  </div>
                  <h1 className="text-cyan-500 text-xl m-0 font-bold">{val.title}</h1>
                  <span className="text-sm font-edu">{val.desc}</span>
                  <div className="mt-4 mb-2 flex justify-between">
                    <button className="bg-whatsapp flex items-center text-white font-bold cursor-pointer py-2 px-4 rounded-md max-w-sm">
                      <FontAwesomeIcon 
                        icon={faWhatsapp}
                        className="text-white text-3xl mr-2"
                        ></FontAwesomeIcon>
                        Gabung Grup WhatsApp
                    </button>
                    <span className="font-edu flex items-end cursor-pointer text-egg-green hover:font-bold">
                      Lihat Detail
                      <FontAwesomeIcon 
                        icon={faArrowRight}
                        className="text-egg-green ml-2"
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </>
  );
};

export default CourseCard;
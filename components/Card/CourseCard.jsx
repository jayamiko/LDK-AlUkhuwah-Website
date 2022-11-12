import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ resultData, search }) => {
  console.log(search);
  return (
    <>
      <div className="gap-2 sm:gap-4 grid grid-cols-2 lg:grid-cols-3">
        {resultData
          .slice(0, search ? resultData.length : resultData.length - 1)
          .reverse()
          .map((item, index) => (
            <>
              <Link href={item.link}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  <div
                    key={index}
                    className="rounded-md p-2 overflow-hidden mb-4 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/50"
                  >
                    <div className="h-40 sm:h-64 md:h-64 md:max-h-64 relative">
                      <Image
                        src="/images/photography.png"
                        layout="fill"
                        objectFit="cover"
                        alt={`dokumentasi ${item.title}`}
                        className="rounded-md"
                      />
                    </div>
                    <div className="p-1">
                      <h1 className="font-roboto font-bold text-cyan-500 text-base sm:text-lg md:text-xl m-0 text-center">
                        {item.title}
                      </h1>
                      <div className="text-sm flex items-center justify-between my-2">
                        <h1 className="text-slate-400 text-[10px] sm:text-sm m-0 font-bold">
                          {item.program}
                        </h1>
                        <span className="text-[10px] sm:text-sm text-yellow-500">
                          <FontAwesomeIcon
                            icon={faPhotoFilm}
                            className="sm:mr-2"
                          ></FontAwesomeIcon>
                          <label>
                            <b>{item.count}</b> Dokumen
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          ))}
      </div>
    </>
  );
};

export default CourseCard;

import React from "react";
import { alUkhuwah, kampus } from "../../pages/_app";
import { tags } from "../../data/data";

function TitlePage(props) {
  return (
    <div className="container mx-auto px-4 z-40 h-fit text-slate-100 flex flex-col items-end justify-end py-10">
      <div className="w-full lg:w-1/2">
        <div className="w-full flex flex-col items-center lg:items-end">
          <h1 className="uppercase m-0 text-4xl font-titan tracking-wide">
            {props.title}
          </h1>
          <span className="w-full text-center shadow-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-widest">
            {alUkhuwah} {kampus}
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end py-2 space-x-2 w-full">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="text-xs sm:text-sm shadow-md">{tag.name}</span>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
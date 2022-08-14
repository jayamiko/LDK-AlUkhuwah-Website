import React from "react";
import { alUkhuwah, kampus } from "../../pages/_app";
import { tags } from "../../data/data";

function TitlePage(props) {
  return (
    <div className="relative z-40 h-screen container mx-auto px-4 sm:px-0 text-slate-100 flex flex-col items-end justify-end py-10">
      <div className="w-full lg:w-1/2">
        <div className="w-full lg:text-right">
          <h1 className="uppercase m-0 text-4xl font-titan tracking-wide">
            {props.title}
          </h1>
          <span className="shadow-lg text-sm sm:text-base lg:text-lg xl:text-xl w-full tracking-widest">
            {alUkhuwah} {kampus}
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end space-x-2 w-full">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="text-sm shadow-md">{tag.name}</span>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
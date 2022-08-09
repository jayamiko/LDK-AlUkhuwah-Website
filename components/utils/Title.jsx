import React from "react";
import { alUkhuwah, kampus } from "../../pages/_app";
import { tags } from "../../data/data";

function TitlePage(props) {
  return (
    <div className="relative z-40 h-screen container mx-auto px-4 sm:px-0 text-slate-200 flex flex-col items-end justify-end py-10">
      <h1 className="uppercase text-4xl font-titan tracking-wide">
        {props.title}
      </h1>
      <span className="text-base lg:text-lg xl:text-xl w-3/5 text-right md:w-full tracking-widest my-1">
        {alUkhuwah} {kampus}
      </span>
      <div className="flex flex-wrap justify-end space-x-2 w-2/5">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="text-sm">{tag.name}</span>
          )
        })}
      </div>
    </div>
  );
}

export default TitlePage;
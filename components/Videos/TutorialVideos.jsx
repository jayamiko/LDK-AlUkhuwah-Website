import React from "react";
import { youtubes } from "../../data/video/video";

function TutorialVideos() {
  return (
    <div className="container mx-auto">
      <h1 className="font-mountains text-cyan-500 text-center lg:text-6xl">
        Tutorial Videos
      </h1>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
        {youtubes.map((youtube, index) => {
          return (
            <div key={index} className="h-[300px] sm:h-[350px]">
              <iframe
                width="100%"
                height="100%"
                src={youtube.src}
                title={youtube.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h5 className="mb-6">{youtube.title}</h5>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TutorialVideos;

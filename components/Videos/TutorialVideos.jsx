import React from "react";
import { youtubes } from "../../data/video/video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp, faMeetup } from "@fortawesome/free-brands-svg-icons"
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

function TutorialVideos() {
  return (
    <div className="container mx-auto">
      <h1 className="font-mountains text-cyan-500 text-center lg:text-6xl">
        Tutorial Videos
      </h1>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
        {youtubes.map((youtube, index) => {
          return (
            <div key={index}>
              <iframe
                width="100%"
                height="300px"
                src={youtube.src}
                title={youtube.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="border-b flex flex-col md:flex-row justify-between mt-1">
                <h5 className="md:mb-6 md:w-3/5">{youtube.title}</h5>
                <div className="h-fit flex items-center md:justify-end text-xs sm:text-sm text-cyan-500">
                  <FontAwesomeIcon
                    icon={faVideoCamera}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  <label className="h-fit">{youtube.channel}</label>
                </div>
              </div>
              <i className="text-xs h-fit text-slate-400">
                {youtube.note && `Notes: ${youtube.note}`}
              </i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TutorialVideos;

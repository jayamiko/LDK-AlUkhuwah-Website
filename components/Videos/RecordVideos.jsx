import React, { useState, useEffect } from "react";
import { meetings } from "../../data/video/video";
import TabFilter from "../utils/TabFilter";

function RecordVideos() {
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    setResultData(meetings);
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="font-mountains text-cyan-500 text-center lg:text-6xl">
        Record Meeting
      </h1>
      <TabFilter
        resultQuery={meetings}
        resultData={resultData}
        setResultData={setResultData}
      />
      <div>
        {resultData.length ? (
          <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
            {resultData.map((youtube, index) => {
              return (
                <div key={index} className="h-[280px] sm:h-[300px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={youtube.src}
                    title={youtube.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h4>{youtube.title}</h4>
                  <hr />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="border border-black flex justify-center items-center"
            style={{ height: "50vh" }}
          >
            <span className="text-slate-400">Belum Ada Record Meeting</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecordVideos;

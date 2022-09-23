import React from "react";
import Timer from "./Timer/Timer";
import styles from "./index.module.css";
import MediaSosial from "../MediaSosial/MediaSosial";

export default function ComingSoonPage() {
  return (
    <div className={`${styles.comingSoon} flex items-center`}>
      <div className="container mx-auto h-fit text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
          Coming Soon
        </h1>
        <h2 className="text-white tracking-wider text-2xl sm:text-4xl lg:text-6xl">
          LDK Al-Ukhuwah <p className="block sm:inline">UNISMA Bekasi</p>
        </h2>
        <Timer />
        <div className="w-full flex justify-center my-3">
          <MediaSosial />
        </div>
      </div>
    </div>
  );
}

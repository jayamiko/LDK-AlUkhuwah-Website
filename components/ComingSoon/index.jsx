import React from "react";
import Timer from "./Timer/Timer";
import styles from "./index.module.css";
import MediaSosial from "../MediaSosial/MediaSosial";

export default function ComingSoonPage() {
  return (
    <div className={`${styles.comingSoon} flex items-center`}>
      <div className="container mx-auto h-fit text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
          Coming Soon
        </h1>
        <h2 className="text-white tracking-wider italic text-lg sm:text-2xl md:text-4xl lg:text-6xl">
          LDK Al-Ukhuwah UNISMA Bekasi
        </h2>
        <Timer date="Oct 26, 2022 12:00:00" />
        <div className="w-full flex justify-center my-3">
          <MediaSosial />
        </div>
      </div>
    </div>
  );
}

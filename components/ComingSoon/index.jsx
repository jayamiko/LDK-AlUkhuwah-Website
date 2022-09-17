import React from "react";
import Timer from "./Timer/Timer";
import styles from "./index.module.css";
import MediaSosial from "../MediaSosial/MediaSosial";

export default function ComingSoonPage() {
  return (
    <div className={`${styles.comingSoon}`}>
      <div className="containerBox text-white">
        <h1 className="lg:min-h-[110px] text-5xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
          Coming Soon
        </h1>
        <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl">
          LDK Al-Ukhuwah UNISMA Bekasi
        </h2>
        <Timer />
        <div className="w-full flex justify-center my-3">
          <MediaSosial />
        </div>
      </div>
    </div>
  );
}

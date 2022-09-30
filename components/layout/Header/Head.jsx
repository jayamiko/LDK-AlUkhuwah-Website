import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UKM, kampus } from "../../../pages/_app";
import styles from "./Header.module.css";
import MediaSosial from "../../MediaSosial/MediaSosial";

const HeadTop = () => {
  return (
    <>
      <section
        className={`${styles.head} container mx-auto md:flex space-x-3 hidden`}
      >
        <Link href={`/`}>
          <a>
            <Image
              src="/ldk-icon.png"
              width={150}
              height={125}
              alt="logo-ldk"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div className="w-full flex justify-between">
          <div className="flex flex-col my-auto">
            <h1 className="font-titan uppercase lg:text-3xl xl:text-4xl leading-8 xl:leading-6">
              {UKM}
            </h1>
            <span className="font-edu tracking-wide text-xl">{kampus}</span>
          </div>

          <MediaSosial />
        </div>
      </section>
    </>
  );
};

export default HeadTop;

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeadTop from "../../components/layout/Header/Head";
import { kampus, UKM } from "../_app";
import Timer from "../../components/ComingSoon/Timer/Timer";
import styles from "../pendaftaran/pendaftaran.module.css";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/utils/Button";

const Webinar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head>
        <title>Special Webinar</title>
        <meta
          name="description"
          content="Special Webinar LDK Al-Ukhuwah UNISMA BEKASI"
        />
      </Head>
      <section
        id="webinar"
        className="h-screen 2xl:h-fit bg-center bg-cover bg-[url('/images/webinar/talkshow.jpg')] z-10"
      >
        <div className="h-fit flex flex-col md:px-5 lg:m-0 w-full z-50">
          <HeadTop />
          <header
            className={`${styles.bgHeader} w-full md:container mx-auto md:inline items-center m-0 overflow-hidden md:rounded-3xl`}
          >
            <nav
              className={click ? "flex" : "flex justify-between items-center"}
            >
              <div
                className={
                  click
                    ? "hidden"
                    : `${styles.start} md:p-0 w-full float-right max-h-32 h-full lg:hidden`
                }
              >
                <div
                  className={click ? "hidden" : "md:hidden flex items-center"}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/ldk-icon.png"
                        width={150}
                        height={150}
                        className="w-20 sm:w-28 md:w-40"
                        alt="logo-ldk"
                      />
                    </a>
                  </Link>
                  <div className="w-full justify-between">
                    <div className="flex flex-col my-auto uppercase">
                      <h4 className="font-roboto text-base sm:text-xl md:text-2xl 2xl:text-3xl w-full font-bold">
                        {UKM}
                      </h4>
                      <span className="text-xs sm:text-sm md:text-base font-edu font-bold tracking-wide">
                        {kampus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={click ? "w-full font-roboto md:hidden" : "hidden"}
              >
                <div
                  className={
                    click ? "flex md:hidden text-white items-center" : "hidden"
                  }
                >
                  <Link href="">
                    <a>
                      <Image
                        src="/images/ldk-icon.png"
                        width={150}
                        height={150}
                        className="w-20 sm:w-28 md:w-40"
                        alt="logo-ldk"
                      />
                    </a>
                  </Link>
                  <div className="w-full flex justify-between">
                    <div className="flex flex-col my-auto uppercase">
                      <h4 className="text-xl w-full sm:text-3xl sm:w-full md:text-4xl lg:text-5xl font-bold">
                        {UKM}
                      </h4>
                      <span className="text-xs sm:text-sm font-edu font-bold tracking-wide md:text-base">
                        {kampus}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <ul
                  className={
                    click ? `${styles.mobileNav} space-y-2` : "flex md:hidden"
                  }
                  onClick={() => setClick(false)}
                >
                  {menu.map((menus, index) => {
                    return (
                      <li key={index}>
                        <Link href={menus.path}>
                          <a className={styles.linkMenu}>{menus.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
              {/* <button
                className={`mr-3 p-2 h-fit md:hidden`}
                onClick={() => setClick(!click)}
              >
                {click ? (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-white text-2xl mt-10"
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-white text-2xl"
                  ></FontAwesomeIcon>
                )}
              </button> */}
            </nav>
          </header>
        </div>
        <div className="py-4 lg:py-0">
          <div className="container mx-auto px-5 flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
              <Image
                src="/images/webinar/webinar.jpg"
                width={420}
                height={420}
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 items-center">
              <div className="w-full text-white flex flex-col items-center lg:items-start">
                <p className="font-titan text-shadow-black uppercase m-0 text-2xl">
                  Special Webinar!
                </p>
                <h1 className="font-wolf text-shadow-white text-cyan-500 m-0 px-4 text-8xl lg:text-9xl">
                  Talk Show
                </h1>
                <i className="lg:text-shadow-black">
                  {"Persiapan Memasuki Dunia Kampus"}
                </i>
                <div className="w-full lg:w-1/2 my-2">
                  <Button
                    path="https://forms.gle/9XwV91H46qzy1KXs8"
                    blank={true}
                    text="Register Now"
                    icon={faRegistered}
                  />
                  <Timer date="Sep 26, 2022 20:00:00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;

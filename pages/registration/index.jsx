import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UKM, kampus } from "../_app";
import moment from "moment";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { menu } from "../../data/data";
import { schedule } from "../../data/schedule/schedule";
import { codingLogos } from "../../data/logos/logos";
import styles from "../../components/layout/Header/Header.module.css";
import Head from "next/head";
import HeadTop from "../../components/layout/Header/Head";
import Link from "next/link";
import FullCalendarComp from "../../components/Calendar/Calendar";
import TutorialVideos from "../../components/Videos/TutorialVideos";
import RecordVideos from "../../components/Videos/RecordVideos";

const RegistrationPage = () => {
  const [event, setEvent] = useState({});
  const [click, setClick] = useState(false);
  let date = new Date();
  let start = new Date();

  start.setFullYear(2022, 9, 15);

  function statusEvent(start) {
    if (start > date) {
      return "Coming Soon";
    } else if (start < date) {
      return "Sudah Selesai";
    } else if (date === start) {
      return "Sedang Berlangsung";
    }
  }

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("pdf/Silabus.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "pdf/Silabus.pdf";
        alink.click();
      });
    });
  };

  const eventData = schedule.map((event) => {
    return {
      title: event.title,
      type: statusEvent(event.start),
      date: event.start,
    };
  });

  function getEventUpComing() {
    const filterEventbyType = eventData.filter(
      (event) => event.type === "Coming Soon"
    );
    const result = filterEventbyType[0];
    setEvent(result);
  }

  useEffect(() => {
    getEventUpComing();
  }, []);

  return (
    <>
      <Head>
        <title>LDK UNISMA - Forum Coding</title>
        <meta
          name="LDK Forum Coding"
          content="Forum Coding LDK Al-Ukhuwah UNISMA BEKASI"
        />
      </Head>
      <section className="coverRegistration">
        <HeadTop />
        <header
          className={`${styles.bgHeader} w-full md:container mx-auto md:inline items-center m-0 overflow-hidden md:rounded-3xl`}
        >
          <nav
            className={
              click ? "flex py-2" : "flex py-2 justify-between items-center"
            }
          >
            {/* <ul
              className={
                click
                  ? `${styles.mobileNav} hidden z-50 py-8 px-5 mb-5`
                  : "m-auto h-full hidden md:flex justify-between space-x-10 uppercase py-10 px-5"
              }
              onClick={() => setClick(false)}
            >
              {menu.map((menus, index) => {
                return (
                  <li key={index}>
                    <Link href={menus.path}>
                      <a
                        className={`${styles.linkMenu} font-bold hover:font-extrabold text-white hover:scale-105 text-base`}
                      >
                        {menus.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul> */}
            <div
              className={
                click
                  ? "hidden"
                  : `${styles.start} md:p-0 w-full float-right max-h-32 h-full lg:hidden`
              }
            >
              <div className={click ? "hidden" : "md:hidden flex items-center"}>
                <Link href={`/`}>
                  <a>
                    <Image
                      src="/ldk-icon.png"
                      width={100}
                      height={100}
                      className="w-20 sm:w-28 md:w-40"
                      alt="logo-ldk"
                    />
                  </a>
                </Link>
                <div className="w-full justify-between ml-2">
                  <div className="flex flex-col my-auto uppercase">
                    <h4 className="font-roboto text-lg sm:text-2xl md:text-3xl 2xl:text-4xl w-5/6 sm:w-full font-bold">
                      {UKM}
                    </h4>
                    <span className="text-xs sm:text-sm md:text-base font-edu font-bold tracking-wide">
                      {kampus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={click ? "w-full font-roboto md:hidden" : "hidden"}>
              <div
                className={
                  click ? "flex md:hidden text-white items-center" : "hidden"
                }
              >
                <Link href={`/`}>
                  <a>
                    <Image
                      src="/ldk-icon.png"
                      width={100}
                      height={100}
                      className="w-20 sm:w-28 md:w-40"
                      alt="logo-ldk"
                    />
                  </a>
                </Link>
                <div className="w-full flex justify-between ml-2">
                  <div className="flex flex-col my-auto uppercase">
                    <h4 className="font-roboto text-lg sm:text-2xl md:text-3xl 2xl:text-4xl w-full font-bold">
                      {UKM}
                    </h4>
                    <span className="text-xs sm:text-sm font-edu font-bold tracking-wide md:text-base">
                      {kampus}
                    </span>
                  </div>
                </div>
              </div>
              <ul
                className={click ? `mt-2 space-y-2` : "flex md:hidden"}
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
              </ul>
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
        <div>
          <div className="h-[80vh] mx-auto py-0 xl:py-4">
            <div className="text-white h-full flex flex-col justify-center items-center">
              <div className="text-white space-y-8 flex flex-col items-center">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-mountains">
                  Forum Course Coding
                </h2>
                <div className="w-full h-24 md:h-16 gap-2 grid grid-cols-3 md:grid-cols-6">
                  {codingLogos.map((logo, index) => {
                    return (
                      <div key={index} className="relative">
                        <Image
                          src={logo.src}
                          layout="fill"
                          objectFit="contain"
                          alt={logo.title}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col items-center">
                  <i className="text-green-500 text-shadow-black">
                    Materi Selanjutnya :
                  </i>
                  <h4>{event.title}</h4>
                  <p className="text-sm">{moment(event.date).format("llll")}</p>
                  <button
                    onClick={onButtonClick}
                    className="bg-red-700 font-edu text-white rounded-md py-2 px-10 uppercase font-black mx-auto hover:scale-110"
                  >
                    Download SILABUS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="record" className="my-20">
        <RecordVideos />
      </section>
      <section id="tutorial" className="my-20">
        <TutorialVideos />
      </section>
      <section id="schedule" className="py-10">
        <FullCalendarComp />
      </section>
    </>
  );
};

export default RegistrationPage;

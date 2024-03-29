import React from "react";
import Head from "next/head";
import {
  faArrowRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { alUkhuwah } from "./_app";
import SectionSubtitle from "../components/utils/SectionSubtitle";
import Header from "../components/layout/Header/Header";
// import CourseCard from "../components/Card/CourseCard";
import Button from "../components/utils/Button";
import DepartementSlide from "../components/Card/DeptSlide";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import ComingSoonPage from "../components/ComingSoon";
import Testimonial from "../components/Card/Testimonial";
import AboutUs from "../components/About/AboutUs";
import ImagesSlider from "../components/Card/ImagesSlider";
import Partners from "../components/Partners/Partners";
// import EventComing from "../components/EventComing/EventComing";

const description = `Lembaga Dakwah Kampus (LDK) Al-Ukhuwah merupakan salah satu Unit Kegiatan Mahasiswa (UKM) yang ada di kampus Universitas Islam ‘45’ Bekasi. LDK Al-Ukhuwah adalah UKM yang bergerak di bidang pendidikan keilmuan agama & umum, pembinaan karakter & mental, penguatan rohani & jasmani, penembangan prestasi, dan pengasahan kreativitas.`;

const HomePage = () => {
  return (
    <>
      <Head>
        <title>LDK UNISMA Bekasi</title>
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="UxKlaNnZWzouoetVRx_2hJjkWwij95qWTjeo38MaeSE"
        />
      </Head>
      <section id="hero" className="coverHero">
        <Header />
        <div className="relative flex container z-20 w-full">
          {/* <ComingSoonPage /> */}
          <div className="grid grid-cols-1 my-auto">
            <div
              id="heading"
              className="text-white w-full mt-5 md:w-4/5 lg:w-2/3 mx-auto"
            >
              <h2 className="text-sky-600 brightness-125 font-semibold text-xl text-center">
                #CerdasKreatifBersahabat
              </h2>
              <h2 className="text-center w-full font-extrabold text-4xl sm:text-4xl xl:text-5xl">
                Bersama Menjalin Ukhuwah Bersatu Dalam Dakwah
              </h2>
              <p className="text-white font-extralight italic w-full mx-auto text-base md:text-lg 2xl:text-xl text-center">
                Maka sampaikanlah (Muhammad) secara terang-terangan segala apa
                yang diperintahkan (kepadamu) dan berpalinglah dari orang yang
                musyrik (QS. Al-Hijr [15]:94)
              </p>
              <div className="w-full flex justify-center space-x-3">
                <div className="w-1/2 sm:w-1/3">
                  <Button
                    path="/pendaftaran"
                    text="Ayo Gabung LDK"
                    icon={faArrowRight}
                  />
                </div>
                <div className="w-2/5 lg:w-1/5">
                  <Button
                    path="/event"
                    text="Event"
                    icon={faCalendarCheck}
                    color="bg-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-6">
        <AboutUs />
      </section>
      <section id="partners" className="bg-gray-100">
        <Partners />
      </section>
      {/* <section id="event-coming">
        <EventComing />
      </section> */}
      <section id="gallery" className="mt-20 py-20 bg-gray-100">
        <ImagesSlider />
      </section>
      <section id="departement" className="mt-20">
        <div className="container mx-auto">
          <SectionSubtitle subtitle={`Departemen ${alUkhuwah}`} />
        </div>
        <div className="h-[90vh] py-12 mt-4 bg-[url(/images/LDK7.jpg)] bg-bottom bg-no-repeat bg-cover">
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <DepartementSlide />
          </div>
        </div>
      </section>
      {/* <section id="news" className="container mx-auto my-6">
        <div className="container mx-auto">
          <SectionSubtitle subtitle={`Info Terkini`} />
          <div className="flex items-center mb-4">
            <input
              type="text"
              className="w-80 text-slate-400 pl-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Search..."
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="relative right-8 flex items-center">
              {!query && (
                <FontAwesomeIcon
                  icon={faSearch}
                  className="mr-2 text-cyan-500"
                ></FontAwesomeIcon>
              )}
            </div>
          </div>
          <CourseCard resultQuery={resultQuery} />
        </div>
      </section> */}
      <section id="testimonial" className="mt-20 bg-gray-100">
        <Testimonial />
      </section>
    </>
  );
};

export default HomePage;

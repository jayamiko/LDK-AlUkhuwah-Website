import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { dokumentasi } from "../../data/dokumentasi/dokumentasi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./program.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../../components/layout/Header/Header";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Title from "../../components/utils/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import CourseCard from "../../components/Card/CourseCard";
// import SearchNotFound from "../../components/Animations/Search/Search";

function ProgramPage() {
  const carouselArray = [
    styles.carouselCover1,
    styles.carouselCover2,
    styles.carouselCover3,
    styles.carouselCover4,
    styles.carouselCover5,
    styles.carouselCover6,
  ];

  const [search, setSearch] = useState(false);

  const [query, setQuery] = useState("");
  const [resultData, setResultData] = useState([]);

  const searching = () => {
    const resultSearch = dokumentasi.filter((item) => {
      const title = item.title.toLowerCase().includes(query.toLowerCase());
      if (query === "") {
        return item;
      } else if (title) {
        setSearch(true);
        return item;
      }
    });
    setResultData(resultSearch);
  };

  useEffect(() => {
    searching();
  }, [query, Autoplay]);

  return (
    <>
      <Head>
        <title>Dokumentasi - LDK UNISMA Bekasi</title>
        <meta name="description" content="Dokumentasi LDK Unisma Bekasi" />
        <meta
          name="google-site-verification"
          content="UxKlaNnZWzouoetVRx_2hJjkWwij95qWTjeo38MaeSE"
        />
      </Head>
      <div className="relative h-fit">
        <div className="md:hidden">
          <Header />
        </div>
        <div className="absolute h-screen w-full z-40 flex flex-col justify-center items-center">
          <div className="hidden md:flex">
            <Header />
          </div>
          <div className="w-full h-1/4 flex flex-col md:flex-row justify-end items-center md:justify-center md:items-end space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="text"
              className="w-5/6 md:w-2/5 h-12 text-slate-400 pl-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Cari Dokumentasi..."
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              className="px-5 py-2 h-12 rounded-md bg-cyan-500 shadow-sm shadow-black text-white font-semibold"
              onSubmit={searching}
            >
              Search
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white ml-2"
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="w-full h-2/5 flex flex-col justify-end items-center">
            <Title title="Dokumentasi" />
          </div>
        </div>
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {carouselArray.map((carousel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={carousel}></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="container mx-auto my-5">
        {!search && (
          <div className="w-full flex justify-center mb-5">
            {dokumentasi
              .slice(dokumentasi.length - 1, dokumentasi.length)
              .map((item, index) => (
                <>
                  <Link href={item.link}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline"
                    >
                      <div
                        key={index}
                        className="md:w-1/2 rounded-md p-2 overflow-hidden mb-4 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/50"
                      >
                        <div className="relative h-60 md:h-[400px]">
                          <Image
                            src="/images/photography.png"
                            layout="fill"
                            objectFit="cover"
                            alt={`dokumentasi ${item.title}`}
                            className="rounded-md"
                          />
                        </div>
                        <div className="py-1 px-5">
                          <h1 className="font-mountains text-cyan-500 text-2xl tracking-wide m-0 font-bold text-center">
                            {item.title}
                          </h1>
                          <div className="text-sm flex justify-between my-2">
                            <h1 className="text-slate-400 text-xs sm:text-sm m-0 font-bold">
                              {item.program}
                              <span className="text-red-500 italic text-xs sm:text-sm">
                                (New)
                              </span>
                            </h1>
                            <span className="text-xs sm:text-sm text-yellow-500">
                              <FontAwesomeIcon
                                icon={faPhotoFilm}
                                className="mr-2"
                              ></FontAwesomeIcon>
                              <label>
                                <b>{item.count}</b> Dokumen
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </>
              ))}
          </div>
        )}
        {resultData.length ? (
          <CourseCard resultData={resultData} search={search} />
        ) : (
          <div className="h-96 flex justify-center items-center">
            <i className="text-sm md:text-2xl text-slate-400">
              Maaf, Pencarian Tidak Ditemukan!
            </i>
            {/* <SearchNotFound text="Pencarian tidak ditermukan.." /> */}
          </div>
        )}
      </div>
    </>
  );
}

export default ProgramPage;

import React, {useState, useEffect} from 'react'
import { blog } from "../../data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./program.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Title from '../../components/utils/Title';
import Button from '../../components/utils/Button';

function ProgramPage() {

  const carouselArray = [
    styles.carouselCover1,
    styles.carouselCover2,
    styles.carouselCover3,
    styles.carouselCover4
  ];

  const [query, setQuery] = useState("");
  const [resultQuery, setResultQuery] = useState([]);

  const searching = () => {
    const resultSearch = blog.filter(item => {
      const title = item.title.toLowerCase().includes(query.toLowerCase());
      if (query === "") {
        return item;
      } else if (title) {
        return item;
      }
    });
    setResultQuery(resultSearch);
  }

  useEffect(() => {
    searching()
  }, [query])

  // const module = !query ? [Autoplay, Pagination] : [Pagination]

  return (
    <>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={!query && {
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={!query ? [Autoplay, Pagination] : [Pagination]}
          className="mySwiper"
          >
            {carouselArray.map((carousel, index)=> {
              return (
                <SwiperSlide key={index}>
                  <section className={carousel}>
                    <div className='border-4 border-green-800 h-full flex flex-col justify-end items-center'>
                      <div className='space-x-2 h-1/4 w-full flex items-center justify-center'>
                        <input
                          type="text"
                          className="w-2/5 h-12 text-slate-400 pl-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          placeholder="Search..."
                          onChange={event => setQuery(event.target.value)}
                        />
                        <Button path="" text="Search" onSubmit={searching} />
                      </div>
                      <Title title="Program LDK" />
                    </div>
                  </section>
                </SwiperSlide>
              )
            })}
        </Swiper>
    </>
  )
}

export default ProgramPage
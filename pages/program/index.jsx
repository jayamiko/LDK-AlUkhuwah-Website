import React from 'react'
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

function ProgramPage() {

  const carouselArray = [
    styles.carouselCover1,
    styles.carouselCover2,
    styles.carouselCover3,
    styles.carouselCover4
  ]

  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          >
            {carouselArray.map((carousel, index)=> {
              return (
                <SwiperSlide key={index}>
                  <section className={carousel}>
                    <Title title="Program LDK" />
                  </section>
                </SwiperSlide>
              )
            })}
        </Swiper>
    </>
  )
}

export default ProgramPage
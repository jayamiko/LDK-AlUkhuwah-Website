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
  }, [query, Autoplay])

  return (
    <div>
      <div className='relative h-screen'>
        <div className='absolute h-screen w-full z-40 flex flex-col justify-center items-center'>
          <div className='w-full h-3/5 flex justify-center items-end space-x-2'>
            <input
              type="text"
              className="w-2/5 h-12 text-slate-400 pl-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Cari Program..."
              onChange={event => setQuery(event.target.value)}
            />
            <Button path="" text="Search" onSubmit={searching} />
          </div>
          <div className='w-full h-2/5 flex flex-col justify-end items-center'>
            <Title title="Program LDK" />
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
          {carouselArray.map((carousel, index)=> {
            return (
              <SwiperSlide key={index}>
                <div className={carousel}></div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ProgramPage
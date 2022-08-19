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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CourseCard from '../../components/Card/CourseCard';
import TabFilter from '../../components/utils/TabFilter';


function ProgramPage() {

  const carouselArray = [
    styles.carouselCover1,
    styles.carouselCover2,
    styles.carouselCover3,
    styles.carouselCover4
  ];

  const [query, setQuery] = useState("");
  const [resultQuery, setResultQuery] = useState([]);
  const [resultData, setResultData] = useState([])

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
    setResultData(resultSearch)
  }

  useEffect(() => {
    searching()
  }, [query, Autoplay])

  return (
    <>
      <div className='relative h-screen'>
        <div className='absolute h-screen w-full z-40 flex flex-col justify-center items-center'>
          <div className='w-full h-3/5 flex flex-col md:flex-row justify-end items-center md:justify-center md:items-end space-y-2 md:space-y-0 md:space-x-2'>
            <input
              type="text"
              className="w-5/6 md:w-2/5 h-12 text-slate-400 pl-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Cari Program..."
              onChange={event => setQuery(event.target.value)}
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
      <div className='container mx-auto my-5'>
        <TabFilter resultQuery={resultQuery} resultData={resultData} setResultData={setResultData} />
        <CourseCard resultQuery={resultData} />
      </div>
    </>
  )
}

export default ProgramPage
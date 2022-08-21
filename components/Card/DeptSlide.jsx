import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './deptSlide.module.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

export default function DepartementSlide({data}) {
  const [nameDepartement, setNameDepartment ] = useState("Departemen Syiar")
  const departemen = data.filter(dept => dept.title === nameDepartement)

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-[50vw] py-12 mb-10 h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[55vh] xl:h-[h-65vh]"
      >
        {data.map((dept, index)=>{
          return(
            <>
              <SwiperSlide
                key={index}
                style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: '50vw',
                  height: '100%',
                }}
                >
                <img 
                  className={styles.swiperSlideImg}
                  onMouseMoveCapture={(e) => setNameDepartment(e.target.alt)}
                  src={dept.logo}
                  alt={dept.title}
                />
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>

      <div className='w-full'>
        {departemen.map((item, index)=>{
          return(
            <div 
              key={index}
              className="text-center"
            >
              <h4 className='font-bold uppercase underline text-primary'>{nameDepartement}</h4>
              <p className='text-sm md:text-base italic'>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </>
  );
}
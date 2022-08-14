import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { alUkhuwah } from "./_app"
import { blog } from "../data/data";
import AboutCard from "../components/Card/AboutCard";
import CourseCard from "../components/Card/CourseCard";
import Button from "../components/utils/Button"

const HomePage = () => {

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

  return (
    <>
      <section id="hero" className="coverHero bg-[url('/images/LDK-Flag.jpg')] z-10">
      </section>
      <div className="relative h-screen flex container z-20 md:pt-44 w-full">
        <div className="grid grid-cols-1 my-auto">
          <div id="heading" className="text-white w-full mt-5 md:w-4/5 lg:w-2/3 mx-auto">
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
            <div className="w-full flex justify-center">
              <div className="w-1/3">
                <Button path="/pendaftaran" text="Yuk Gabung LDK !" icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutCard />
      <section id="course" className="blog container mx-auto mb-20">
        <div className="container mx-auto">
          <h3 className="font-bold uppercase text-base sm:mx-3 my-2 md:text-2xl text-cyan-500">
            Mentoring {alUkhuwah}
          </h3>
          <div className='flex items-center mx-2 mb-4'>
            <input
              type="text"
              className="w-80 text-slate-400 pl-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Search..."
              onChange={event => setQuery(event.target.value)}
            />
            <div className='relative right-8 flex items-center'>
              {!query &&
                <Image 
                  src="/images/icons/icon-search.png" 
                  width="18px" 
                  height="18px" 
                  alt="icon-search"
                />
              }
            </div>
          </div>
          <CourseCard resultQuery={resultQuery} />
        </div>
      </section>
    </>
  );
};

export default HomePage;

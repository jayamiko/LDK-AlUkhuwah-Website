import React from "react";
import { kampus, alUkhuwah } from '../_app'
import Title from '../../components/utils/Title'
import { materialsAbout, visiMisi, OrganizationValue, topProgram } from "../../data/data";

const About = () => {
  return (
    <>
      <section id="hero" className={`coverHero bg-[url('/images/LDK-Flag.jpg')] z-10`}>
      </section>
      <div className='h-screen w-full flex items-end justify-end'>
        <Title title="Tentang LDK" />
      </div>
      <main className="relative z-40 container mx-auto my-5 text-sky-800 px-4 sm:px-0">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-titan m-0">Tentang UKM {alUkhuwah}</h1>
        <i className="font-medium md:text-lg lg:text-xl mt-2">{kampus}</i>
        <br/><br/>
        <div className="flex h-full flex-col justify-center">
          <article>
            {materialsAbout.map((content, index) => {
              return (
                <>
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <h1 className="text-lg sm:text-xl lg:text-2xl text-sky-800 uppercase font-bold">
                      {content.title}
                    </h1>
                  </div>
                  <div
                    id={content.id}
                    className="indent-8 py-2 text-black text-base sm:text-lg leading-6"
                  >
                    {content.p1 && <p>{content.p1}</p>}
                    {content.p2 && <p>{content.p2}</p>}
                    {content.p3 && <p>{content.p3}</p>}
                    {content.p4 && <p>{content.p4}</p>}
                  </div>
                </>
              );
            })}
            {/* VISI MISI */}
            <>
              <div className="flex items-center justify-between text-black">
                <h1 className="text-lg sm:text-xl lg:text-2xl text-sky-800 uppercase font-bold">
                  C. Visi dan Misi
                </h1>
              </div>
              <div
                id="material-3"
                className="py-2 text-black text-base sm:text-lg leading-6"
              >
                <h2 className="font-bold text-base sm:text-lg lg:text-xl">Visi</h2>
                {visiMisi.map((list)=>{
                  return (
                    <>
                      <p>
                        {list.visi}
                      </p>
                      <h2 className="font-bold text-base sm:text-lg lg:text-xl m-0">Misi</h2>
                      <ul className="list-decimal list-outside pl-4">
                        {list.misi.map((list)=> {
                          return (
                            <li key={list}>{list}</li>
                          )
                        })}
                      </ul>
                    </>
                  )
                })}
              </div>
            </>

            {/* NILAI ORGANISASI */}
            <>
              <div className="flex items-center justify-between text-black">
                <h1 className="text-lg sm:text-xl lg:text-2xl text-sky-800 uppercase font-bold">
                  D. Nilai-Nilai Organisasi
                </h1>
              </div>
              <div
                id="material-4"
                className="py-2 text-black text-base sm:text-lg leading-6"
              >
                <ul className="p-0">
                  {OrganizationValue.map((value, index) => {
                    return (
                      <li key={index} id={value.id}>
                        <h2 className="font-bold text-base sm:text-lg lg:text-xl">{index + 1}. {value.title}</h2>
                        <p className="indent-6">
                          {value.paragraph}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>

            {/* PROGRAM UNGGULAN */}
            <>
              <div className="flex items-center justify-between text-black">
                <h1 className="text-lg sm:text-xl lg:text-2xl text-sky-800 uppercase font-bold m-0">
                  E. Program Unggulan
                </h1>
              </div>
              <div
                id="material-5"
                className="text-black text-base"
              >
                <ul className="list-decimal list-outside pl-4">
                  {topProgram.map((list, index) => {
                    return (
                      <li key={index} id={list.id}>
                        {list.title}
                      </li>
                    )
                  })}
                </ul>
                <br />
                <br />
              </div>
            </>
          </article>
        </div>
      </main>
    </>
  );
};

export default About;

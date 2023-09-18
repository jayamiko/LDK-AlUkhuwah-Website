import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/layout/Header/Header";
import Timer from "../../components/ComingSoon/Timer/Timer";

const Webinar = () => {
  const formLink = "https://forms.gle/4tjTtqEvEMZg7THs6";
  let date = new Date();
  let start = new Date();

  start.setFullYear(2023, 9, 27);

  function statusEvent(start) {
    if (start > date) {
      return (
        <span className="border-2 border-cyan-500 py-2 px-4 text-cyan-500 font-medium">
          Coming Soon
        </span>
      );
    } else if (start < date) {
      return (
        <span className="border-2 border-red-500 py-2 px-4 text-red-500 font-medium">
          Sudah Selesai
        </span>
      );
    } else if (date === start) {
      return (
        <span className="border-2 border-green-500 py-2 px-4 text-green-500 font-medium">
          Sedang Berlangsung
        </span>
      );
    }
  }
  return (
    <>
      <Head>
        <title>Special Event</title>
        <meta
          name="description"
          content="Special Event LDK Al-Ukhuwah UNISMA BEKASI"
        />
      </Head>
      <section
        id="seminar-zero-to-hero"
        className="min-h-screen h-fit bg-cover bg-[url('/images/webinar/student.jpeg')] z-10"
        style={{ backgroundPositionY: "40%" }}
      >
        <div className="h-fit flex flex-col md:px-5 lg:m-0 w-full z-50">
          <Header />
        </div>
        <div className="h-screen md:h-fit py-4 lg:py-0">
          <div className="container h-fit mx-auto mt-16 md:mt-0 px-2 sm:px-5">
            <div className="w-full flex justify-center items-center">
              <div className="w-full text-white flex flex-col items-center">
                <h1 className="font-mountains text-shadow-white text-sky-500 m-0 p-2 text-3xl sm:text-5xl lg:text-6xl">
                  SEMINAR
                </h1>
                <h6 className="text-shadow-black text-center">
                  From Zero To Hero (Meniti Karir di Bangku Kuliah)
                </h6>
                <i className="text-shadow-black">Rabu, 27 September 2023</i>
                <div className="w-full my-2">
                  <Timer date="Sep 27, 2023 09:00:00" />
                </div>
                <div className="space-x-4">
                  <Link href={formLink}>
                    <a href={formLink} target="_blank" rel="noreferrer">
                      <button className="hover:scale-110 text-md rounded-md py-2 px-4 lg:px-6 bg-emerald-600 text-white hover:text-yellow-400 font-medium">
                        Register Now
                      </button>
                    </a>
                  </Link>
                  {statusEvent(new Date().setFullYear(2023, 9, 27))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="leaderhip-motivation-training"
        className="min-h-screen h-fit bg-center bg-cover bg-[url('/images/webinar/leadership.jpeg')] z-10"
      >
        <div className="h-screen md:h-fit py-4 lg:py-0">
          <div className="container h-fit mx-auto mt-16 md:mt-0 px-2 sm:px-5">
            <div className="w-full flex justify-center items-center">
              <div className="w-full text-white flex flex-col items-center">
                <h1 className="font-mountains text-shadow-white text-sky-500 m-0 p-2 text-3xl sm:text-5xl lg:text-6xl">
                  Leadership Motivation Training
                </h1>
                <h6 className="text-shadow-black text-center">
                  Preparing The Next Muslim Leader Generation
                </h6>
                <i className="text-shadow-black">
                  Sabtu, 8 Juli 2023 - Ahad, 9 Juli 2023
                </i>
                <div className="w-full my-2">
                  <Timer date="Jul 8, 2023 09:00:00" />
                </div>
                <div className="space-x-4">
                  <Link href={formLink}>
                    <a href={formLink} target="_blank" rel="noreferrer">
                      <button className="hover:scale-110 text-md rounded-md py-2 px-4 lg:px-6 bg-emerald-600 text-white hover:text-yellow-400 font-medium">
                        Register Now
                      </button>
                    </a>
                  </Link>
                  {statusEvent(new Date().setFullYear(2023, 8, 8))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="seminar-online-ramadhan"
        className="min-h-screen h-fit bg-center bg-cover bg-[url('/images/webinar/mosque.jpg')] z-10"
      >
        <div className="h-screen md:h-fit py-4 lg:py-0">
          <div className="container h-fit mx-auto mt-16 md:mt-0 px-2 sm:px-5">
            <div className="w-full flex justify-center items-center">
              <div className="w-full text-white flex flex-col items-center">
                <h1 className="font-mountains text-shadow-white text-sky-500 m-0 p-2 text-3xl sm:text-5xl lg:text-6xl">
                  Event Seminar
                </h1>
                <h6 className="text-shadow-black text-center">
                  {
                    "Personal Branding ala Rasulullah Shalallahu'alaihi wa salam"
                  }
                </h6>
                <h6 className="text-center">
                  <i className="text-sm text-pink-700">
                    Presented : Insight Community
                  </i>
                </h6>
                <i className="text-shadow-black">
                  Jum{"'"}at, 7 April 2023 09:00 - 11:00 WIB
                </i>
                <div className="w-full my-2">
                  <Timer date="Apr 7, 2023 09:00:00" />
                </div>
                <div className="space-x-4">
                  {statusEvent(new Date().setFullYear(2023, 4, 7))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="muslim-academic"
        className="min-h-screen h-fit bg-center bg-cover bg-[url('/images/webinar/bg-ma.jpg')] z-10"
      >
        <div className="py-4 lg:py-0">
          <div className="container mx-auto px-2 sm:px-5">
            <div className="w-full flex justify-center items-center">
              <div className="w-full text-white flex flex-col items-center">
                <h1 className="font-mountains text-shadow-white text-sky-500 m-0 p-4 text-3xl sm:text-5xl lg:text-6xl">
                  Muslim Academic
                </h1>
                <h6 className="text-shadow-black text-center">
                  {
                    '"Optimasi Peran Mahasiswa Sebagai Pelopor Kebaikan di UNISMA Bekasi"'
                  }
                </h6>
                <i className="text-shadow-black text-cyan-500">
                  Jum{"'"}at, 9 Desember 2022
                </i>
                <div className="w-full my-2">
                  <Timer date="Dec 9, 2022 20:00:00" />
                </div>
                <div className="space-x-4">
                  {statusEvent(new Date().setFullYear(2022, 12, 9))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="talkshow-psikologi"
        className="h-fit bg-center bg-cover bg-[url('/images/webinar/bgTalkshowPsikologi.jpg')] z-10"
      >
        <div className="py-4 lg:py-0">
          <div className="container mx-auto px-2 sm:px-5 flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-1/2 mt-2 md:mt-0 flex justify-center lg:justify-start items-center">
              <Image
                src="/images/webinar/Talkshow-Psikologi.jpg"
                width={350}
                height={350}
                alt="Talkshow-Psikologi"
              />
            </div>
            <div className="w-full lg:w-1/2 items-center">
              <div className="w-full text-white flex flex-col items-center lg:items-start">
                <h1 className="font-wolf text-shadow-white text-cyan-500 m-0 px-4 text-5xl sm:text-8xl lg:text-9xl">
                  Talk Show
                </h1>
                <i className="lg:text-shadow-black">
                  TEMA : {"QUARTER LIFE CRISIS"}
                </i>
                <div className="w-full lg:w-1/2 my-2">
                  <Timer date="Nov 8, 2022 20:00:00" />
                </div>
                <div className="space-x-4">
                  {statusEvent(new Date().setFullYear(2022, 10, 8))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="open-house"
        className="min-h-screen h-fit bg-center bg-cover bg-[url('/images/webinar/bgOpenhouse.jpg')] z-10"
      >
        <div className="py-4 lg:py-0">
          <div className="container mx-auto px-2 sm:px-5">
            <div className="w-full flex justify-center items-center">
              <div className="w-full text-white flex flex-col items-center">
                <h1 className="font-mountains text-shadow-white text-yellow-500 m-0 p-4 text-4xl sm:text-5xl lg:text-6xl">
                  Open House & Silatbar
                </h1>
                <h6 className="text-shadow-black">
                  {
                    '"Menjalin Ukhuwah Islamiyah Antar Mahasiswa Bersama LDK Al-Ukhuwah UNISMA Bekasi"'
                  }
                </h6>
                <i className="text-shadow-black text-cyan-500">
                  Sabtu, 15 Oktober 2022 | 09:00 WIB
                </i>
                <div className="w-full my-2">
                  <Timer date="Oct 15, 2022 09:00:00" />
                </div>
                {statusEvent(new Date().setFullYear(2022, 9, 15))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="webinar"
        className="h-fit bg-center bg-cover bg-[url('/images/webinar/talkshow.jpg')] z-10"
      >
        <div className="py-4 lg:py-0">
          <div className="container mx-auto px-2 sm:px-5 flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
              <Image
                src="/images/webinar/webinar.jpg"
                width={400}
                height={400}
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 items-center">
              <div className="w-full text-white flex flex-col items-center lg:items-start">
                <p className="font-titan text-shadow-black uppercase m-0 tracking-wide text-2xl md:text-4xl">
                  Special Webinar!
                </p>
                <h1 className="font-wolf text-shadow-white text-cyan-500 m-0 px-4 text-5xl sm:text-8xl lg:text-9xl">
                  Talk Show
                </h1>
                <i className="lg:text-shadow-black">
                  {"Persiapan Memasuki Dunia Kampus"}
                </i>
                <div className="w-full lg:w-1/2 my-2">
                  <Timer date="Sep 26, 2022 20:00:00" />
                </div>
                {statusEvent(new Date().setFullYear(2022, 8, 27))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;

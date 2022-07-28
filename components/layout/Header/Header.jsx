import React, { useState } from "react";
import Link from 'next/link'
import Head from "./Head";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-col relative z-50 border-2 border-yellow-700">
      <Head />
      <header
        className="w-full relative md:inline-block md:container mx-auto m-0 bg-[#1eb2a6] overflow-hidden md:rounded-3xl md:bg-white"
      >
        <nav className={click ? "flex" : "flex flexSB items-center  maxh-32"}>
          <ul
            className={
              click ? `${styles.mobileNav} hidden z-50 py-8 px-5 mb-5` : "flexSB space-x-5 uppercase py-8 px-5 mb-5"
            }
            onClick={() => setClick(false)}
          >
            <li>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/`}>
                <a className="hidden lg:block">Info News</a>
                <a className="lg:hidden block">News</a>
              </Link>
            </li>
            <li>
              <Link href={`/aktivitas`}>
                <a>Aktivitas</a>
              </Link>
            </li>
            <li>
              <Link href={`/departemen`}>
                <a>Departemen</a>
              </Link>
            </li>
            <li>
              <Link href={`/documentasi`}>
                <a>Dokumentasi</a>
              </Link>
            </li>
            <li>
              <Link href={`/about`}>
                <a>About</a>
              </Link>
            </li>
          </ul>
          <div
            className={
              click
                ? "hidden"
                : `${styles.start} md:p-0 w-full float-right max-h-32 h-full lg:hidden`
            }
          >
            <div className={click ? "hidden" : "md:hidden flex py-2"}>
              <Link href={`/`}>
                <a>
                  <Image
                    src="/image/ldk-icon.png"
                    width={100}
                    heigth={100}
                    className="w-20 sm:w-28 md:w-40"
                    alt="logo-ldk"
                  />
                </a>
              </Link>
              <div className="w-full flexSB font-roboto">
                <div className="flex flex-col my-auto">
                  <h4 className="text-base w-4/5 sm:text-3xl sm:w-full md:text-6xl font-bold">
                    LEMBAGA DAKWAH KAMPUS
                  </h4>
                  <span className="text-[10px] md:text-base">
                    UNIVERSITAS ISLAM {"'"}45 BEKASI
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={click ? "w-full md:hiddenn font-roboto" : "hidden"}>
            <div className={click ? "flex text-white" : "hidden"}>
              <Link href={`/`}>
                <a>
                  <Image
                    src="/image/ldk-icon.png"
                    className="w-28 sm:w-28 md:w-40 h-24"
                    width={100}
                    heigth={100}
                    alt="logo-ldk"
                  />
                </a>
              </Link>
              <div className="w-full flexSB">
                <div className="logo flex flex-col my-auto">
                  <h4 className="text-xl w-3/4 sm:text-3xl sm:w-full md:text-6xl font-bold">
                    LEMBAGA DAKWAH KAMPUS
                  </h4>
                  <span className="text-xs md:text-base">
                    UNIVERSITAS ISLAM {"'"}45 BEKASI
                  </span>
                </div>
              </div>
            </div>
            <ul
              className={click ? "mobile-nav" : "hidden"}
              onClick={() => setClick(false)}
            >
              <li>
                <Link href={`/`}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href={`/news`}>
                  <a>Info News</a>
                </Link>
              </li>
              <li>
                <Link href={`/aktivitas`}>
                  <a>Aktivitas</a>
                </Link>
              </li>
              <li>
                <Link href={`/departemen`}>
                  <a>Departemen</a>
                </Link>
              </li>
              <li>
                <Link href={`/dokumentasi`}>
                  <a>Dokumentasi</a>
                </Link>
              </li>
              <li>
                <Link href={`/about`}>
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>

          <div></div>
          <button
            className={`${styles.toggle} mr-4`}
            onClick={() => setClick(!click)}
          >
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import Logo from "../../../image/ldk-icon.png";
import styles from "./Header.module.css";
import Image from "next/image";

const pathname = window.location.pathname;

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-col relative z-50 border-2 border-yellow-700">
      <Head />
      <header
        className={
          pathname === "/documentasi"
            ? "md:hidden max-h-32"
            : "w-full md:container mx-auto overflow-hidden md:rounded-3xl bg-white"
        }
      >
        <nav className={click ? "flex" : "flex flexSB items-center max-h-32"}>
          <ul
            className={
              click ? `${styles.mobileNav} hidden z-50` : "flexSB uppercase"
            }
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/news">
                <b className="hidden lg:block">Info News</b>
                <b className="lg:hidden block">News</b>
              </Link>
            </li>
            <li>
              <Link to="/aktivitas">
                <b>Aktivitas</b>
              </Link>
            </li>
            <li>
              <Link to="/departemen">
                <b>Departemen</b>
              </Link>
            </li>
            <li>
              <Link to="/documentasi">
                <b>Dokumentasi</b>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <b>About</b>
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
              <Link to="/">
                <Image
                  src={Logo}
                  className="w-20 sm:w-28 md:w-40"
                  alt="logo-ldk"
                />
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
              <Link to="/">
                <Image
                  src={Logo}
                  className="w-28 sm:w-28 md:w-40 h-24"
                  alt="logo-ldk"
                />
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
              className={click ? "mobile-nav" : "flexSB"}
              onClick={() => setClick(false)}
            >
              <li>
                <Link to="/">
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <b>Info News</b>
                </Link>
              </li>
              <li>
                <Link to="/aktivitas">
                  <b>Aktivitas</b>
                </Link>
              </li>
              <li>
                <Link to="/departemen">
                  <b>Departemen</b>
                </Link>
              </li>
              <li>
                <Link to="/documentasi">
                  <b>Dokumentasi</b>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <b>About</b>
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

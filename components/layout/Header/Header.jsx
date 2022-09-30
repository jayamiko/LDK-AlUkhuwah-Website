import React, { useState } from "react";
import Link from "next/link";
import HeadTop from "./Head";
import { UKM, kampus } from "../../../pages/_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { menu } from "../../../data/data";
import Image from "next/image";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="absolute flex flex-col-reverse md:flex-col md:px-5 lg:mx-0 w-full z-50">
      <HeadTop />
      <header
        className={`${styles.bgHeader} w-full md:container mx-auto md:inline items-center m-0 overflow-hidden md:rounded-3xl`}
      >
        <nav className={click ? "flex" : "flex justify-between items-center"}>
          <ul
            className={
              click
                ? `${styles.mobileNav} hidden z-50 py-8 px-5 mb-5`
                : "my-auto h-full hidden md:flex justify-between space-x-7 uppercase py-10 px-5"
            }
            onClick={() => setClick(false)}
          >
            {menu.map((menus, index) => {
              return (
                <li key={index}>
                  <Link href={menus.path}>
                    <a
                      className={`${styles.linkMenu} font-bold hover:font-extrabold hover:scale-105`}
                    >
                      {menus.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className={
              click
                ? "hidden"
                : `${styles.start} md:p-0 w-full float-right max-h-32 h-full lg:hidden`
            }
          >
            <div className={click ? "hidden" : "md:hidden flex items-center"}>
              <Link href={`/`}>
                <a>
                  <Image
                    src="/ldk-icon.png"
                    width={150}
                    height={150}
                    className="w-20 sm:w-28 md:w-40"
                    alt="logo-ldk"
                  />
                </a>
              </Link>
              <div className="w-full justify-between">
                <div className="flex flex-col my-auto uppercase">
                  <h4 className="font-roboto text-lg sm:text-2xl md:text-3xl 2xl:text-4xl w-5/6 sm:w-full font-bold">
                    {UKM}
                  </h4>
                  <span className="text-xs sm:text-sm md:text-base font-edu font-bold tracking-wide">
                    {kampus}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={click ? "w-full font-roboto md:hidden" : "hidden"}>
            <div
              className={
                click ? "flex md:hidden text-white items-center" : "hidden"
              }
            >
              <Link href={`/`}>
                <a>
                  <Image
                    src="/ldk-icon.png"
                    width={150}
                    height={150}
                    className="w-20 sm:w-28 md:w-40"
                    alt="logo-ldk"
                  />
                </a>
              </Link>
              <div className="w-full flex justify-between">
                <div className="flex flex-col my-auto uppercase">
                  <h4 className="text-xl w-full sm:text-3xl sm:w-full md:text-4xl lg:text-5xl font-bold">
                    {UKM}
                  </h4>
                  <span className="text-xs sm:text-sm font-edu font-bold tracking-wide md:text-base">
                    {kampus}
                  </span>
                </div>
              </div>
            </div>
            <ul
              className={
                click ? `${styles.mobileNav} space-y-2` : "flex md:hidden"
              }
              onClick={() => setClick(false)}
            >
              {menu.map((menus, index) => {
                return (
                  <li key={index}>
                    <Link href={menus.path}>
                      <a className={styles.linkMenu}>{menus.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className={`mr-3 p-2 h-fit md:hidden`}
            onClick={() => setClick(!click)}
          >
            {click ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="text-white text-2xl mt-10"
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-white text-2xl"
              ></FontAwesomeIcon>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;

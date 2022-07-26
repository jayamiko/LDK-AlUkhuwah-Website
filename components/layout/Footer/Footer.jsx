import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-500">
        <div className="container mx-auto flex flex-col space-y-10 sm:spce-y-0 sm:flex-row py-10 px-4 sm:px-0">
          <div className="box logo w-full sm:w-1/3">
            <h2 className="text-xl font-bold w-fit text-white">
              LDK Al-Ukhuwah
            </h2>
            <h2 className="italic font-medium w-fit text-white md:text-lg xl:text-xl">
              Universitas Islam {"'"}45 Bekasi
            </h2>

            <div className="social flex my-auto">
              <a href="https://web.facebook.com/ldkunisma.bekasi?_rdc=1&_rdr/">
                <i
                  className={`fab fa-facebook-f ${styles.icon} bg-blue-500 hover:text-blue-500`}
                ></i>
              </a>
              <a href="https://www.instagram.com/ldkunisma45bekasi/">
                <i
                  className={`fab fa-instagram ${styles.icon} bg-pink-500 hover:text-pink-500`}
                ></i>
              </a>
              <a href="https://twitter.com/ldk_unisma45">
                <i
                  className={`fab fa-twitter ${styles.icon} bg-cyan-400 hover:text-cyan-400`}
                ></i>
              </a>
              <a href="https://www.youtube.com/channel/UCkpwGcpCbk2893j5qFyxePA">
                <i
                  className={`fab fa-youtube ${styles.icon} bg-red-500 hover:text-red-500`}
                ></i>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/3 text-white px-2 md:text-lg xl:text-xl">
            <h2 className="text-xl font-semibold">
              Departemen di LDK Al Ukhuwah
            </h2>
            <ul className="flex sm:flex-col space-x-8 sm:space-x-0">
              <div>
                <li className="m-0 cursor-pointer hover:text-slate-200 hover:font-semibold">
                  Kesekretariatan
                </li>
                <li className="m-0 cursor-pointer hover:text-slate-200 hover:font-semibold">
                  Perekonomian
                </li>
                <li className="m-0 cursor-pointer hover:text-slate-200 hover:font-semibold">
                  Kaderisasi
                </li>
              </div>
              <div>
                <li className="m-0 cursor-pointer hover:text-slate-200 hover:font-semibold">
                  Humas Media
                </li>
                <li className="m-0 cursor-pointer hover:text-slate-200 hover:font-semibold">
                  Keputrian
                </li>
              </div>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 text-white">
            <h2 className="text-xl font-semibold">Have a Questions?</h2>
            <ul className="list-outside md:text-lg xl:text-xl">
              <li>
                <i className="fa fa-map mr-2"></i>
                Jl. Cut Meutia No. 83 Bekasi Timur
              </li>
              <li>
                <i className="fa fa-phone-alt mr-2"></i>
                0855-9163-3631
              </li>
              <li>
                <i className="fa fa-paper-plane mr-2"></i>
                ldkunismabekasi@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white bg-gray-700 py-2">
          <p className="text-sm sm:text-base">
            Copyright @ 2022 LDK Al-Ukhuwah Unisma {"'"}45 Bekasi All Right
            Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

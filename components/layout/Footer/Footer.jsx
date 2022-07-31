import React from "react";
import { alUkhuwah, kampus, emailLDK } from '../../../pages/_app'
import MediaSosial from "../../MediaSosial/MediaSosial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMap, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-500 relative z-50">
        <div className="container mx-auto flex flex-col sm:flex-row space-y-2 md:space-y-0 py-2 px-4 sm:px-0">
          <div className="w-full sm:w-1/3 flex flex-col">
            <h2 className="font-semibold m-0 text-base md:text-lg xl:text-xl text-yellow-400">
              {alUkhuwah}
            </h2>
            <h2 className="italic font-medium text-white text-xs sm:text-sm xl:text-base">
              {kampus}
            </h2>

            <MediaSosial />
          </div>

          <div className="w-full sm:w-1/3 p-0 text-white">
            <h2 className="font-semibold text-base md:text-lg xl:text-xl text-yellow-400">
              Departemen di {alUkhuwah}
            </h2>
            <ul className="flex m-0 sm:flex-col text-sm space-x-4 md:space-x-0 hover:text-slate-200 hover:font-semibold p-0">
              <div>
                <li className="m-0 cursor-pointer ">
                  Kesekretariatan
                </li>
                <li className="m-0 cursor-pointer">
                  Perekonomian
                </li>
                <li className="m-0 cursor-pointer">
                  Kaderisasi
                </li>
              </div>
              <div>
                <li className="m-0 cursor-pointer">
                  Humas Media
                </li>
                <li className="m-0 cursor-pointer">
                  Keputrian
                </li>
              </div>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 text-white">
            <h2 className="font-semibold text-base md:text-lg xl:text-xl text-yellow-400">Have a Questions?</h2>
            <ul className="list-outside p-0 text-sm">
              <li>
                <FontAwesomeIcon 
                  icon={faMap}
                  className="text-white mr-2"
                ></FontAwesomeIcon>
                Jl. Cut Meutia No. 83 Bekasi Timur
              </li>
              <li>
                <FontAwesomeIcon 
                  icon={faPhone}
                  className="text-white mr-2"
                ></FontAwesomeIcon>
                0855-9163-3631
              </li>
              <li>
                <FontAwesomeIcon 
                  icon={faPaperPlane}
                  className="text-white mr-2"
                ></FontAwesomeIcon>
                {emailLDK}
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white bg-gray-700 py-2">
          <span className="text-sm sm:text-base">
            Copyright @ 2022 {alUkhuwah} {kampus} 
          </span>
          <span>
            All Right Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

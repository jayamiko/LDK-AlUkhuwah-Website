import React from "react";
import { alUkhuwah, kampus, emailLDK } from "../../../pages/_app";
import MediaSosial from "../../MediaSosial/MediaSosial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { menu } from "../../../data/data";

const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-500 relative flex flex-col justify-between z-50">
        <div className="container mx-auto px-4 py-2 flex flex-col items-center space-y-2">
          <Image
            src="/images/ldk-icon.png"
            width={200}
            height={200}
            alt="logo"
          />
          <span className="text-white text-sm sm:text-base font-edu">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="mr-2"
            ></FontAwesomeIcon>
            {emailLDK}
          </span>
          <ul className="grid grid-cols-3 lg:flex sm:space-x-4">
            {menu.map((menus, index) => {
              return (
                <li key={index}>
                  <Link href={menus.path}>
                    <a className="font-bold text-white hover:text-orange-500 text-base no-underline">
                      {menus.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <i className="text-sm text-slate-600 text-center">
            Copyright @ 2022 {`${alUkhuwah} ${kampus} `}All Right Reserved
          </i>
          <div className="flex my-4">
            <MediaSosial />
          </div>
        </div>
      </footer>
    </>
  );
};
// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-cyan-500 relative z-50">
//         <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row space-x-0 space-y-2 sm:space-x-3 sm:space-y-0">
//           <div className="w-full sm:w-1/3 flex flex-col">
//             <div className="flex flex-col items-center sm:items-start w-full">
//               <h2 className="font-bold m-0 text-base md:text-lg xl:text-xl text-yellow-400">
//                 {alUkhuwah}
//               </h2>
//               <h2 className="italic font-medium text-white text-xs sm:text-sm xl:text-base">
//                 {kampus}
//               </h2>
//             </div>
//             <div className="flex justify-center sm:justify-start">
//               <MediaSosial />
//             </div>
//           </div>

//           <div className="w-full sm:w-1/3 text-white">
//             <div className="flex justify-center sm:justify-start w-full">
//               <h2 className="font-bold m-0 text-base md:text-lg xl:text-xl text-yellow-400">
//                 Departemen di {alUkhuwah}
//               </h2>
//             </div>
//             <ul className="m-0 py-2 flex flex-row justify-center text-sm md:space-x-6 p-0 gap-2">
//               <div className="text-xs sm:text-sm md:text-base w-2/6 sm:w-full">
//                 <ul className="list-disc p-0">
//                   <li className="m-0">
//                     <i>Kesekretariatan</i>
//                   </li>
//                   <li className="m-0">
//                     <i>Perekonomian</i>
//                   </li>
//                   <li className="m-0">
//                     <i>Kaderisasi</i>
//                   </li>
//                 </ul>
//               </div>
//               <div className="text-xs sm:text-sm md:text-base w-2/6 sm:w-full">
//                 <ul className="list-disc p-0">
//                   <li className="m-0">
//                     <i>Humas Media</i>
//                   </li>
//                   <li className="m-0">
//                     <i>Keputrian</i>
//                   </li>
//                   <li className="m-0">
//                     <i>Syiar</i>
//                   </li>
//                 </ul>
//               </div>
//             </ul>
//           </div>

//           <div className="flex flex-col items-center w-full sm:w-1/3 text-white">
//             <div className="flex justify-center sm:justify-start w-full">
//               <h2 className="font-bold m-0 text-base md:text-lg xl:text-xl text-yellow-400">
//                 Punya Pertanyaan ?
//               </h2>
//             </div>
//             <ul className="text-xs sm:text-sm w-2/3 sm:w-full list-outside p-0 space-y-2 py-1">
//               <li>
//                 <FontAwesomeIcon
//                   icon={faMap}
//                   className="text-white mr-2"
//                 ></FontAwesomeIcon>
//                 Jl. Cut Meutia No. 83 Bekasi Timur
//               </li>
//               <li>
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="text-white mr-2"
//                 ></FontAwesomeIcon>
//                 0855-9163-3631
//               </li>
//               <li>
//                 <FontAwesomeIcon
//                   icon={faPaperPlane}
//                   className="text-white mr-2"
//                 ></FontAwesomeIcon>
//                 {emailLDK}
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="text-center text-white bg-gray-700 py-2">
//           <span className="text-xs sm:text-sm md:text-base">
//             Copyright @ 2022 {`${alUkhuwah} ${kampus} `}
//           </span>
//           <span className="block sm:inline text-xs sm:text-sm md:text-base">
//             All Right Reserved
//           </span>
//         </div>
//       </footer>
//     </>
//   );
// };

export default Footer;

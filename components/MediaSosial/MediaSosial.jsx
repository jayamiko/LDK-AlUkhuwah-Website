import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function MediaSosial() {
  return (
    <div className="flex my-auto w-60 space-x-2">
    <a href="https://web.facebook.com/ldkunisma.bekasi?_rdc=1&_rdr/"
        className="flex items-center justify-center hover:brightness-110 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 bg-blue-500 hover:scale-110"
    >
        <FontAwesomeIcon 
            icon={faFacebookF}
            className="text-white text-sm md:text-base xl:text-xl"
        ></FontAwesomeIcon>
    </a>
    <a href="https://www.youtube.com/channel/UCkpwGcpCbk2893j5qFyxePA"
        className="flex items-center justify-center hover:brightness-110 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 bg-red-500 hover:scale-110"
    >
        <FontAwesomeIcon 
            icon={faYoutube}
            className="text-white text-sm md:text-base xl:text-xl"
        ></FontAwesomeIcon>
    </a>
    <a href="https://www.instagram.com/ldkunisma45bekasi/"
        className="flex items-center justify-center hover:brightness-110 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 bg-pink-500 hover:scale-110"
    >
        <FontAwesomeIcon 
            icon={faInstagram}
            className="text-white text-base md:text-lg xl:text-2xl"
        ></FontAwesomeIcon>
    </a>
    <a href="https://twitter.com/ldk_unisma45"
        className="flex items-center justify-center hover:brightness-110 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 bg-sky-500 hover:scale-110"
    >
        <FontAwesomeIcon 
            icon={faTwitter}
            className="text-white text-sm md:text-base xl:text-xl"
        ></FontAwesomeIcon>
    </a>
    </div>
  )
}

export default MediaSosial
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function MediaSosial() {
  return (
    <div className="flex my-auto w-60 space-x-2">
    <a href="https://web.facebook.com/ldkunisma.bekasi?_rdc=1&_rdr/"
        className="flex items-center justify-center rounded-full w-12 h-12 bg-blue-500 hover:scale-110"
    >
        <FontAwesomeIcon 
        icon={faFacebookF}
        className="text-white text-2xl"
        ></FontAwesomeIcon>
    </a>
    <a href="https://www.youtube.com/channel/UCkpwGcpCbk2893j5qFyxePA"
        className="flex items-center justify-center rounded-full w-12 h-12 bg-red-500 hover:scale-110"
    >
        <FontAwesomeIcon 
            icon={faYoutube}
            className="text-white text-2xl"
        ></FontAwesomeIcon>
    </a>
    <a href="https://www.instagram.com/ldkunisma45bekasi/"
        className="flex items-center justify-center rounded-full w-12 h-12 bg-pink-500 hover:scale-110"
    >
        <FontAwesomeIcon 
        icon={faInstagram}
        className="text-white text-3xl"
        ></FontAwesomeIcon>
    </a>
    <a href="https://twitter.com/ldk_unisma45"
        className="flex items-center justify-center rounded-full w-12 h-12 bg-sky-500 hover:scale-110"
    >
        <FontAwesomeIcon 
        icon={faTwitter}
        className="text-white text-2xl"
        ></FontAwesomeIcon>
    </a>
    </div>
  )
}

export default MediaSosial
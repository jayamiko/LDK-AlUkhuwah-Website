import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({path, text, icon}) {
  return (
    <>
      <Link href={path}>
        <a>
          <button className="w-full h-10 rounded-md bg-cyan-500 shadow-md text-white font-semibold">
            {text}
            <FontAwesomeIcon 
              icon={icon}
              className="ml-2 text-white text-base sm:text-lg mr-2"
              ></FontAwesomeIcon>
          </button>
        </a>
      </Link>
    </>
  )
}

export default Button
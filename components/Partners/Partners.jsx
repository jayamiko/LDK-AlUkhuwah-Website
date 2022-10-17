import React from "react";
import Image from "next/image";

function Partners() {
  return (
    <div className="container mx-auto lg:py-10">
      <div className="grid grid-cols-3 h-40 sm:min-h-[300px]">
        <div className="relative">
          <Image
            src="/images/partners/unisma-icon.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/partners/fsldk-icon.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative">
          <Image src="/images/ldk-icon.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default Partners;

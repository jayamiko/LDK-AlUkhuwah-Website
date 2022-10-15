import React from "react";
import Image from "next/image";
import SectionSubtitle from "../utils/SectionSubtitle";

function Partners() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-3" style={{ minHeight: "300px" }}>
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

import React from "react";
import Image from 'next/image';

const AboutCard = () => {
  return (
    <section id="about" className="flex mb-24 mt-10 flex-col lg:pt-20 sm:flex-row sm:space-x-10 mx-auto container px-4 sm:px-0">
      <div className="w-full sm:w-2/4 md:py-5">
        <div>
          <Image 
            src="/images/LDK4.jpg" 
            width={500}
            height={350}
            alt=""
            className="rounded-lg"
            />
        </div>
      </div>

      <div className="w-full sm:w-2/3 py-4">
        <div>
          <h1 className="text-cyan-500 text-2xl my-2 md:my-5">Apa Itu UKM LDK ?</h1>
          <p className="text-sm md:text-lg text-black">
            Lembaga Dakwah Kampus (LDK) Al-Ukhuwah merupakan salah satu Unit
            Kegiatan Mahasiswa (UKM) yang ada di kampus Universitas Islam ‘45
            Bekasi. LDK Al-Ukhuwah adalah UKM yang bergerak di bidang pendidikan
            keilmuan agama & umum, pembinaan karakter & mental, penguatan rohani
            & jasmani, penembangan prestasi, dan pengasahan kreativitas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
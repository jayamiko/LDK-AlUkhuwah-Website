import React from "react";
import Image from 'next/image';
import Button from "../utils/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const AboutCard = () => {
  return (
    <section id="about" className="container mx-auto flex flex-col md:flex-row justify-between my-5">
      <div className="w-full lg:w-4/6 flex">
        <div className="container mx-auto flex justify-center">
          <Image 
            src="/images/LDK4.jpg" 
            width={500}
            height={350}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="w-1/2 container">
        <h1 className="text-cyan-500 text-xl md:text-2xl font-bold">Apa Itu UKM LDK ?</h1>
        <div>
          <p className="text-justify text-xs sm:text-sm text-black">
            Lembaga Dakwah Kampus (LDK) Al-Ukhuwah merupakan salah satu Unit
            Kegiatan Mahasiswa (UKM) yang ada di kampus Universitas Islam ‘45
            Bekasi. LDK Al-Ukhuwah adalah UKM yang bergerak di bidang pendidikan
            keilmuan agama & umum, pembinaan karakter & mental, penguatan rohani
            & jasmani, penembangan prestasi, dan pengasahan kreativitas.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/6">
          <Button 
            path="/tentang"
            text="Selengkapnya"
            icon={faArrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
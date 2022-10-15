import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../utils/SectionSubtitle";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../utils/Button";

import img01 from "../../public/images/ldk-ikhwan5.jpg";
import img02 from "../../public/images/ldk-akhwat.jpg";
import img03 from "../../public/images/LDK2b.jpg";
import img04 from "../../public/images/LDK10.jpg";
import classes from "../../styles/about.module.css";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" className={`${classes.about__content}`}>
          <SectionSubtitle subtitle="LDK Al-Ukhuwah Unisma Bekasi" />
          <h3 className="my-4 font-titan text-cyan-500">Apa Itu UKM LDK ?</h3>
          <p>
            Lembaga Dakwah Kampus (LDK) Al-Ukhuwah merupakan salah satu Unit
            Kegiatan Mahasiswa (UKM) yang ada di kampus Universitas Islam ‘45
            Bekasi. LDK Al-Ukhuwah adalah UKM yang bergerak di bidang pendidikan
            keilmuan agama dan umum, pembinaan karakter dan mental, penguatan
            rohani dan jasmani, penembangan prestasi, dan pengasahan
            kreativitas.
          </p>

          <div className=" d-flex align-items-center gap-5">
            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Mentoring
              </h6>

              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Panahan
              </h6>
            </div>

            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Akhwat Gathering
              </h6>

              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Bazaar
              </h6>
            </div>
          </div>

          <div className="mt-4">
            <div className="w-full md:w-1/2 lg:w-2/6">
              <Button
                path="/tentang"
                text="Selengkapnya"
                blank={false}
                icon={faArrowRight}
              />
            </div>
          </div>
        </Col>

        <Col lg="6">
          <div
            className={`${classes.about__img__gallery} d-flex mt-4 gap-4 justify-content-end`}
          >
            <div className="d-flex flex-column">
              <div className={`mb-3 rounded-md ${classes.about__img__box}`}>
                <Image src={img01} alt="about-img" />
              </div>

              <div className={`mb-3 rounded-md ${classes.about__img__box}`}>
                <Image src={img02} alt="about-img" />
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className={`mb-3 rounded-md ${classes.about__img__box}`}>
                <Image src={img03} alt="about-img" />
              </div>

              <div className={`mb-3 rounded-md ${classes.about__img__box}`}>
                <Image src={img04} alt="about-img" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

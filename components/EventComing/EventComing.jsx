import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import SectionSubtitle from "../utils/SectionSubtitle";
import picture from "../../public/images/openhouse2022.jpeg";
import classes from "../../styles/testimonial.module.css";
import Timer from "../ComingSoon/Timer/Timer";

const EventComing = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" md="6" className={`${classes.testimonial__img} relative`}>
          <Image
            alt="logo-img"
            src={picture}
            layout="fill"
            objectFit="contain"
          />
        </Col>

        <Col lg="6" md="6">
          <SectionSubtitle subtitle="Event Akan Datang" />
          <div>
            <h2 className="font-mountains leading-normal text-yellow-500 text-shadow-black text-6xl">
              Open House & Silaturahmi Akbar
            </h2>
            <h6>
              {
                '"Menjalin Ukhuwah Islamiyah Antar Mahasiswa Bersama LDK Al-Ukhuwah UNISMA Bekasi"'
              }
            </h6>
            <i className="text-cyan-500">Sabtu, 15 Oktober 2022 | 09:00 WIB</i>
            <div className="w-full lg:w-1/2 my-2">
              <Link href="/event">
                <a>
                  <button className="py-2 px-6 lg:px-10 border-2 border-yellow-500 text-yellow-500 font-medium">
                    Lihat Event
                  </button>
                </a>
              </Link>
              {/* <Timer date="Oct 15, 2022 09:00:00" /> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EventComing;

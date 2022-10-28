import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "../utils/SectionSubtitle";
import logo from "../../public/images/ldk-icon.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import { testimonial } from "../../data/testimonial/testimonial";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Row>
        <Col
          lg="6"
          md="6"
          className={`${classes.testimonial__img} hidden sm:inline`}
        >
          <Image alt="logo-img" src={logo} width="400" height="400" />
        </Col>

        <Col lg="6" md="6">
          <SectionSubtitle subtitle="Testimonial" />
          <h4 className="font-edu font-black mt-2 mb-10">
            Apa yang mereka katakan?
          </h4>

          <Slider {...settings}>
            {testimonial.map((testi, index) => {
              return (
                <div key={index} className={`${classes.testimonial__item}`}>
                  <div className={`${classes.testimonial__client}`}>
                    <div className="font-bold">
                      <h6>{testi.name}</h6>
                      <h6 className="text-cyan-500">
                        {testi.studi} - {testi.year}
                      </h6>
                    </div>
                  </div>
                  <i className="text-xs sm:text-sm">{testi.message}</i>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;

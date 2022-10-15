import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "../utils/SectionSubtitle";
import logo from "../../public/images/ldk-icon.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

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
          <h4 className="font-edu font-black my-2">Apa yang alumni katakan?</h4>

          <Slider {...settings}>
            <div
              className={`${classes.testimonial__item} border border-black h-[200px]`}
            >
              <h5 className="text-gray-400 italic">Belum ada ulasan</h5>
              {/* <div className={`${classes.testimonial__client}`}>
                <Image
                  alt="client-img"
                  src="/images/webinar/webinar.jpg"
                  width="50px"
                  height="50px"
                  className=" rounded-2"
                />
                <div>
                  <h6>Henry Nichols</h6>
                  <h6>Web Developer</h6>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi saepe eveniet dolores molestias nisi ullam quis
                delectus inventore, quidem beatae ipsa pariatur doloribus
                corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                iste possimus vitae perspiciatis consequatur quod modi
                dignissimos.
              </p> */}
            </div>
            {/* <div className={`${classes.testimonial__item}`}>
              <div className={`${classes.testimonial__client}`}>
                <Image
                  alt="client-img"
                  src="/images/webinar/webinar.jpg"
                  width="50px"
                  height="50px"
                  className=" rounded-2"
                />

                <div>
                  <h6>Henry Nichols</h6>
                  <h6>Web Developer</h6>
                </div>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi saepe eveniet dolores molestias nisi ullam quis
                delectus inventore, quidem beatae ipsa pariatur doloribus
                corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                iste possimus vitae perspiciatis consequatur quod modi
                dignissimos.
              </p>
            </div> */}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;

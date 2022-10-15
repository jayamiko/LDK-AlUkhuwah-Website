import React, { Component } from "react";
import { alUkhuwah } from "../../pages/_app";
import Slider from "react-slick";
import SectionSubtitle from "../utils/SectionSubtitle";
import { galleries } from "../../data/data";

class ImagesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <div className="container mx-auto" style={{ height: "fit-content" }}>
        <SectionSubtitle subtitle={`Gallery Kegiatan ${alUkhuwah}`} />
        <Slider {...settings} className="slider-gallery mt-4">
          {galleries.map((gallery, index) => {
            return (
              <div key={index} className="shadow-md overflow-hidden rounded-md">
                <div className="relative group flex items-end justify-center rounded-md">
                  <h5 className="absolute z-40 text-shadow-black group-hover:inline text-white font-mountains font-medium text-lg sm:text-xl lg:text-2xl">
                    {gallery.title}
                  </h5>
                  <div className="hover:brightness-50 rounded-md overflow-hidden">
                    <img src={gallery.image} alt={gallery.alt} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImagesSlider;

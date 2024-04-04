import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Fire, Line, Star } from "../SvgIcons";
import "../../src/slider.css";


export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  let data = [
    {
      path: "images/testimonial01.jpg",
      description: "when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      name: "Cristina Luwis",
      position: "Web Developer"
    },
    {
      path: "images/testimonial02.jpg",
      description: "when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      name: "Parker Robert",
      position: "Developer"
    }
  ]

  let data1 = [, 2,];
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    ref: sliderRef,
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
    console.log(sliderRef.current.slickPrev());
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="row">
      <div
        className="col-md-6  text-center position-relative"
        style={{ color: "white" }}
      >
        <span style={{ position: "absolute", zIndex: "0" }}>
          <Fire />
        </span>

        <span className="position-relative" style={{ display: "inline-block" }}>
          <span style={{ position: "absolute", right: "0px" }}>
            <Line />
          </span>
          <span
            className="star"
            style={{ position: "absolute", bottom: "0px", left: "80px" }}
          >
            <Star />
          </span>
          <img src={data[currentSlide].path} className="rounded-pill" alt="" />
        </span>
      </div>

      <div className="col-md-5">
        <h1 className="header mb-5" style={{ color: "white", maxWidth: "400px" }}>What Our Students Say About Us</h1>

        <Slider {...settings}>
          {
            data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mb-2"><img src="images/quote.png" width={"50px"} alt="" /></div>

                  <p className="mb-2" style={{ color: "white", maxWidth: "500px", fontSize: "19px", lineHeight: "33px" }}>"{item.description}"</p>

                  <div className="d-flex align-items-center my-4">
                    <div className="mb-0" style={{ width: "70px", height: "5px", borderRadius: "10%", background: "#FAB123" }}></div>
                    <div style={{ width: "100%", height: "1px", background: "grey" }}></div>
                  </div>

                  <h3 className="mb-0" style={{ color: "white" }} >{item.name}</h3>
                  <p style={{ color: "grey", fontSize: "20px" }}>{item.position}</p>
                </div>
              );
            })}
        </Slider>
        <div className="controls mt-3">
          <button className="arrow" onClick={goToPrevious}>
            <FaChevronLeft />
          </button>
          <button className="arrow" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

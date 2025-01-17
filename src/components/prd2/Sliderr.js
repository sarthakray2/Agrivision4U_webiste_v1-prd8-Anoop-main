import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Book from "./imageofbook.jpg";
import styles from "./sliderr.module.css";
import SubjectCard from "./subjectCard";
import { useState, useEffect } from "react";
import { baseURL } from "../../Apis";

function ImageSlider({ subject }) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  console.log(subject);
  return (
    <>
      <>
        <Slider {...settings}>
          {subject.map((s) => {
            return <SubjectCard onesub={s} />;
          })}
        </Slider>
      </>
    </>
  );
}

export default ImageSlider;

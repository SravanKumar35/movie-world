import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../movie-card";
import styles from "./styles.module.scss";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: styles.dots,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnDotsHover: true,
  swipeToSlide: true,
  arrows: true,
  touchMove: true,
};

const MobileView = ({ data }) => {
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item) => {
          return (
            <div className={styles.slider_item}>
              <MovieCard movie={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MobileView;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../movie-card";
import styles from "./styles.module.scss";
import { mobileHook } from "./hooks";

const MobileView = ({ data }) => {
  const { customSlider, settings } = mobileHook();
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

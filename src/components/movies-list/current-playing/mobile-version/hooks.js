import { useRef } from "react";

export const mobileHook = () => {
  const customSlider = useRef();
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnDotsHover: true,
    swipeToSlide: true,
    arrows: false,
    touchMove: true,
  };
  return {
    customSlider,
    settings,
  };
};

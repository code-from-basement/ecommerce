import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useSwiper } from "swiper/react";
import Styles from "./SwiperNavBtn.module.css";

function SwiperNavBtn() {
  const swiper = useSwiper();
  return (
    <div className={Styles.swiperNavBtn}>
      <button onClick={() => swiper.slidePrev()}>
        <SlArrowLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <SlArrowRight />
      </button>
    </div>
  );
}

export default SwiperNavBtn;

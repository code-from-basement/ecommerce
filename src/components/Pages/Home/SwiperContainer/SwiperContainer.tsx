import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./SwiperContainer.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import SwiperNavBtn from "./SwiperNavBtn";

const slideItems = [
  {
    id: 1,
    title: "Halo75 V2",
    detail: "New heights, new lights, and new highlights",
    src: "src/assets/image/Halo75_V2_Hero_c178483a-3c8d-40a4-87bc-5f552a84d8df_1728x.jpg",
  },
  {
    id: 2,
    title: "Gem80",
    detail: "For gamers, for keeb nerds, for everyone",
    src: "src/assets/image/Gem80_Hero_3000x_159a22ad-d5e8-4cbc-8b0b-e479ef5f7d94_1728x.webp",
  },
  {
    id: 3,
    title: "Air75 V2",
    detail: "The fastest and slimmest QMK/VIA keyboard on the planet",
    src: "src/assets/image/air75_v2_hero_1944x.webp",
  },
  {
    id: 4,
    title: "Field75",
    detail: "Everyday is a field day",
    src: "src/assets/image/field75_hero_1728x.webp",
  },
];

function SwiperContainer() {
  return (
    <div className={Styles.swiperContainer}>
      <Swiper
        style={{ borderRadius: "1.4rem" }}
        className={Styles.swiper}
        cssMode={true}
        //  navigation={true}
        //  pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slideItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={Styles.swiperItem}
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${item.src})`,
              }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.2 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              >
                {item.detail}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
              >
                Buy Now
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavBtn />
      </Swiper>
    </div>
  );
}

export default SwiperContainer;

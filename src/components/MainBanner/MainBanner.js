import React, { useRef } from "react"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "./MainBanner.styles.scss"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import data from "../../data/content.json"
import ImageBanner1 from "../../assets/images/home/home-slide-1.jpg"
import ImageBanner2 from "../../assets/images/home/home-slide-2.jpg"
import ImageBanner3 from "../../assets/images/home/home-slide-3.jpg"

const MainBanner = () => {
  const swiperRef = useRef(null)
  const imageBanners = [ImageBanner1, ImageBanner2, ImageBanner3]

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="banner"
        modules={[Autoplay, Pagination]}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView="auto"
      >
        <div className="container swiper-pagination-custom" />
        {data.main_banner.map((banner, index) => (
          <SwiperSlide
            className="bannerSlide"
            key={`image-${index + 1}`}
          >
            <img
              className="bannerImage"
              src={imageBanners[index % imageBanners.length]}
              alt={`Banner ${index + 1}`}
            />
            <div className="container">
              <div className="bannerText">
                <p>{banner.bannerText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default MainBanner

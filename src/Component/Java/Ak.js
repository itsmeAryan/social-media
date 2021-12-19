import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Ak.scss";
const Ak = () => {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true,
        autoWidth:true,
    };
     
    const events = {
        onDragged: function(event) {},
        onChanged: function(event) {}
    };
    return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      );
}

export default Ak

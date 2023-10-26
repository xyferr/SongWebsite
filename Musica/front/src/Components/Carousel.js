import React from 'react'
import Carousel from '../Carousel.css'
import img1 from "./Images/Slider-1/1.webp"
import img2 from "./Images/Slider-1/2.webp"
import img3 from "./Images/Slider-1/3.webp"
import img4 from "./Images/Slider-1/4.webp"
import img5 from "./Images/Slider-1/5.webp"
import img6 from "./Images/Slider-1/6.webp"
import img7 from "./Images/Slider-1/7.webp"
import img8 from "./Images/Slider-1/8.webp"
import img9 from "./Images/Slider-1/9.webp"
import img10 from "./Images/Slider-1/10.webp"
import img11 from "./Images/Slider-1/11.webp"
import img12 from "./Images/Slider-1/12.webp"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Autoplay,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel1 = () => {
  return (

    <>
    
    <Swiper
      spaceBetween={20}
      slidesPerView={5/3}
      centeredSlides={true}
      loop={true}
      mousewheel={{
        mousewheel:true
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 3/2,
        },
        640: {
          slidesPerView: 5/3,
        },
      }}
      modules={[Autoplay, Pagination, Navigation,Mousewheel]}
    >
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img4} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img5} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img6} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img7} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img8} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img9} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img10} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img11} alt="" /></SwiperSlide>
      <SwiperSlide><img className='height rounded-2xl mt-14 h-44' src={img12} alt="" /></SwiperSlide>   
    </Swiper>
    
  </>
  )
}

export default Carousel1
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Swiper1 from '../assets/Swiper-1.png';
import Swiper2 from '../assets/Swiper-2.png';
import Swiper3 from '../assets/Swiper-3.png';
import Swiper4 from '../assets/Swiper-4.png';
import Swiper5 from '../assets/Swiper-5.png';
import 'swiper/css';
import 'swiper/css/pagination';
import '../BookSwiper.css'; // CSS for red bullets

function BookSwiper() {
  const swiperBooks = [
    { id: 1, src: Swiper1 },
    { id: 2, src: Swiper2 },
    { id: 3, src: Swiper3 },
    { id: 4, src: Swiper4 },
    { id: 5, src: Swiper5 },
  ];

  return (
    <div>
      <Swiper
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {swiperBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <img src={book.src} alt={`Slide ${book.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BookSwiper;

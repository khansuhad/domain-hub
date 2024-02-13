// import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Heading from "../../../Component/UI/Heading";
import useReview from "../../../Hock/useReview";
import { ReviewCard } from "./ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/css/navigation';
import "./style.css";
import { Pagination } from 'swiper/modules';
// // import required modules
// import SwiperCore, { Navigation } from 'swiper';
// SwiperCore.use([Navigation]);

export const Review = () => {
  const [reviews] = useReview();
  const {t}= useTranslation()
  // useEffect(() => {
  //   const swiper = new Swiper('.mySwiper', {
  //     navigation: true,
  //   });
  // }, []);
  const breakpoints = {
    // when window width is >= 1024px
    1023: {
      slidesPerView: 4,
  
    },
    768: {
      slidesPerView: 1,
   
  },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
   
    },
  };
  return (
    <div className="py-40 bg-firstColor dark:bg-[#191919]">
      <Heading>{t("reviewTitle")}</Heading>
      <Swiper  
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Pagination]}
        className="mySwiper ">
          {reviews?.map((review) => (
            <SwiperSlide key={review.id} >
              <ReviewCard review={review}  />
            </SwiperSlide>
          ))}
        </Swiper>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20">
     
      </div> */}
    </div>
  );
};
export default Review;
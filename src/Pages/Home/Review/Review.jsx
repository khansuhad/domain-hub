// import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Heading from "../../../Component/UI/Heading";
import useReview from "../../../Hock/useReview";

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/css/navigation';
import "./style.css";
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";


export const Review = () => {
  const [reviews] = useReview();
  const {t}= useTranslation()
  
  return (
    <div className="py-40 bg-firstColor dark:bg-[#191919]">
      <Heading>{t("reviewTitle")}</Heading>
      <div className='w-[90%] mx-auto my-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                     {reviews?.map((review) => (
            <SwiperSlide key={review.id} >
              <ReviewCard review={review}  />
            </SwiperSlide>
          ))}
                </Swiper>
            </div>
      {/* <Swiper  
        centeredSlides={true}
        spaceBetween={30}
        // grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Pagination]}
        className="mySwiper ">
       
        </Swiper> */}
      <div className="flex justify-center mt-20">
              <Link to="/reviews" className="bg-secondColor hover:bg-thirdColor btn border-none text-white">See All Review</Link>
      </div>
    </div>
  );
};
export default Review;
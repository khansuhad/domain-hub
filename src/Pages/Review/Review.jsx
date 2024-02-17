// import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Heading from "../../Component/UI/Heading";
import {  useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hock/useAxiosPublic";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Pagination, Navigation } from 'swiper/modules';
import ReviewsCard from "./ReviewsCard";



export const Review = () => {
  const useAxios = useAxiosPublic();
  const {t}= useTranslation()
const reviews = useLoaderData();
  const  itemInPage = 8 ;
   const reviewsLength = reviews?.length ;
    const page = Math.ceil(reviewsLength / itemInPage) ;
    const pages = [...Array(page).keys()];
    console.log(pages);
    const [currentPage , setCurrentPage] = useState(0);
    const [review , setReview] = useState([]);
    useEffect(() => {
      useAxios.get(`/reviews?page=${currentPage}&size=${itemInPage}`)
      .then(res => {
          const data = res?.data ;
          setReview(data)
      })
  },[currentPage,useAxios])
  return (
    <div className="py-40 bg-firstColor dark:bg-[#191919] ">
      <div className="lg:w-[90%] mx-auto">
      <Heading>{t("reviewTitle")}</Heading>
   
 
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 ">
         
   {review?.map((review) => (
           
           <ReviewsCard  key={review.id} review={review}  />
         
       ))}
   </div>
   <h1 className="text-white text-3xl flex justify-center font-medium mt-10">pagination</h1>
   <div className="pagination flex justify-center items-center gap-1 lg:w-[20%] mx-auto mt-10">
       <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        // spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            {
                pages?.map((page , index) => (
                  <SwiperSlide   key={page} onClick={() => setCurrentPage(page)}><button
                  className={`${currentPage === page ? 'selected' : undefined } py-2 px-4 text-lg rounded bg-black text-white`}
                  
                 >{index + 1}</button></SwiperSlide>


                ) )
            }  </Swiper>
       </div>
        </div>
    </div>

  );
};
export default Review;
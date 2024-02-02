import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css";
// import required modules
import { Pagination } from 'swiper/modules';
import Heading from '../../UI/Heading';

const DomainTld = () => {
    return (
        <>
            <div className='container mx-auto my-10'>
                <div className=" mx-auto text-center md:w-4/12 my-8">
                    <Heading>Domain TLD</Heading>

                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='img' src="https://i.postimg.cc/9QRS434k/Dotedu.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://i.postimg.cc/85Vs2HSK/depositphotos46718565-stock-photo-info-icon.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://i.postimg.cc/QxzJwH6B/ddc5c49c79c5eecaf6b5b2eac96eb3ad.png" alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://i.postimg.cc/YqGZ04s7/images.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/c4FvdBJD/eu-domain-png.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/vmf6ZvWn/images-2.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/c1RdzkQp/com.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/85Vs2HSK/depositphotos46718565-stock-photo-info-icon.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/9QRS434k/Dotedu.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>


        </>
    );
};

export default DomainTld;
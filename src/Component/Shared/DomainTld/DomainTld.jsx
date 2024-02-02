import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css";
// import required modules
import { Pagination } from 'swiper/modules';

const DomainTld = () => {
    return (
        <>
            <div className='container mx-auto my-10'>
                <div className=" mx-auto text-center md:w-4/12 my-8">
                    <h3 className="text-4xl font-bold uppercase border-y-4 py-4 dark:text-white">Domain TLD</h3>

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
                    <SwiperSlide className='rounded-lg'><img className='img ' src="https://i.postimg.cc/52jX8cz2/IMG-20240201-WA0043-removebg-preview.png" alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://i.postimg.cc/FRxP3Jtc/IMG-20240201-WA0046-removebg-preview.png" alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://i.postimg.cc/V6HCxYnp/IMG-20240201-WA0047-removebg-preview.png" alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://i.postimg.cc/0jqk4FrD/IMG-20240201-WA0042-removebg-preview.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/dQWxQX89/european-union-flag-eu-in-the-circle-stock-vector-40789919-removebg-preview.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/FzDjsjMW/IMG-20240201-WA0044-removebg-preview.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/4xTJNr10/IMG-20240201-WA0045-removebg-preview.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/FRxP3Jtc/IMG-20240201-WA0046-removebg-preview.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.postimg.cc/52jX8cz2/IMG-20240201-WA0043-removebg-preview.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>


        </>
    );
};

export default DomainTld;
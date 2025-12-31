import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination,  Keyboard, Autoplay } from 'swiper/modules';

const MainSlider = () => {
    return (
        <div>
            <Swiper
               /*  cssMode={true} */
                navigation={true}
                pagination={{clickable:true}}
               
                keyboard={true}
                loop={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false,
                }}
                modules={[Navigation, Pagination,  Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src="/img/main1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main5.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main7.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/main9.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainSlider;
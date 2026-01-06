import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MainSlider from '../components/MainSlider' 
import ServiceMain from '../components/ServiceMain'; 
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './../components/Review';
import data from '../data/data';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './home.scss';

// import required modules
import { Scrollbar } from 'swiper/modules';


const Home = () => {
    let [interiorData] = useState(data);
    console.log(interiorData);
    return (
        <div>
             <MainSlider />
             <ServiceMain />
             <div className="space">
                <div className="title">
                    <h2>공간 활용도를 높인 30평대 아파트</h2>
                    <button>30평대 아파트 더 보기 <FaArrowRight /></button>
                </div>
                <div className="spaceContent">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        scrollbar={{
                        hide: true,
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                    >
                       {
                            interiorData.map((item) => {
                                return(
                                     <SwiperSlide key={item.id}>
                                        <Link to={`/${item.id}`}>
                                            <div className='sw'>
                                                <img src={item.image} alt={item.title} />
                                                <div className="space_title">{item.title}</div>
                                                <div className="space_dec">{item.description}</div>
                                                <div className="space_price">{item.price}</div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                       }
                    </Swiper>
                </div>
             </div>
             <div className="space">
                <div className="title">
                    <h2>오래도록 아름다운 구축 아파트</h2>
                    <button>구축아파트 더보기 <FaArrowRight /></button>
                </div>
                <div className="spaceContent">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        scrollbar={{
                        hide: true,
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                    >
                       {
                            interiorData.map((item) => {
                                return(
                                     <SwiperSlide key={item.id}>
                                        <Link to={`/${item.id}`}>
                                            <div className='sw'>
                                                <img src={item.image} alt={item.title} />
                                                <div className="space_title">{item.title}</div>
                                                <div className="space_dec">{item.description}</div>
                                                <div className="space_price">{item.price}</div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                       }
                    </Swiper>
                </div>
             </div>
            <Review />
        </div>
    );
};

export default Home;
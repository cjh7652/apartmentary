import React,{useState}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import './review.scss';

const Review = () => {
    const [swiper, setSwiper] = useState(null)

    const handlePerv=() =>{
        swiper?.slidePrev();
    }
    const handleNext=() =>{
        swiper?.slideNext();
    }

    return (
        <div className='review'>
            <div className='review_flex'>
                <div className="review_banner">
                    <img src="/img/main-customer-review.11301dfd.jpg" alt="banner" />
                </div>
                <div className="review_wrap">
                    <h2>아파트멘터리와 함께한 분들의 후기</h2>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={80}
                    
                        modules={[Navigation]}
                        onSwiper={setSwiper}
                        className="mySwiper3"

                    >
                        <SwiperSlide>
                            <div className="slide_review">
                                <h2>01</h2>
                                <div className="text">
                                    가장 오래 머무는 공간을, 머무는 시간 내내 행복하게 만들어주셔서 감사합니다.
                                </div>
                                <div className="name">김** 님</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_review">
                                <h2>02</h2>
                                <div className="text">
                                    처음으로 마련한 내 집에서 인테리어 로망을 마음껏 구현할 수 있었어요. 덕분에 기쁜 마음으로 생활하고 있습니다!
                                </div>
                                <div className="name">김** 님</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_review">
                                <h2>03</h2>
                                <div className="text">
                                    저희가 놓친 부분까지 세심하게 짚어주시고, 높은 전문성으로 만족스러운 결과물을 보여주셨습니다.
                                </div>
                                <div className="name">김** 님</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_review">
                                <h2>05</h2>
                                <div className="text">
                                    고객의 입장에서 끝까지 함께 고민해 주시는 모습에 감동을 받았고, 정해진 예산 안에서 이렇게 완벽한 결과를 만들어 주셔서 정말 감사합니다.
                                </div>
                                <div className="name">김** 님</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_review">
                                <h2>05</h2>
                                <div className="text">
                                    인테리어는 결국 사람과 사람의 소통이 가장 중요한데, 아파트멘터리 매니저님과는 진짜 ‘함께 만들어간다’는 느낌이 들었어요.
                                </div>
                                <div className="name">김** 님</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_review">
                                <h2>06</h2>
                                <div className="text">
                                    6년 동안 하자 없이 편안하게 지낸 경험과 1년간의 A/S 보장 덕분에, 다시 아파트멘터리를 선택했습니다.
                                </div>
                                <div className="name">김** 님</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper_btn">
                        <div className="swiperPrevbtn" onClick={handlePerv}>
                            
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgOC41TDguNjg3ODMgMTdMOS44MzEwMSAxNS44ODE1TDMuMDk0NzEgOS4yOTA4NkgyMFY3LjcwOTExSDMuMDk0NzRMOS44MzEwMSAxLjExODQ3TDguNjg3ODMgMEwwIDguNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" alt="" />
                        </div>
                        <div className="swiperNextbtn" onClick={handleNext}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDguNUwxMS4zMTIyIDE3TDEwLjE2OSAxNS44ODE1TDE2LjkwNTMgOS4yOTA4NkgwVjcuNzA5MTFIMTYuOTA1M0wxMC4xNjkgMS4xMTg0N0wxMS4zMTIyIDBMMjAgOC41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==" alt="" />
                        </div>
                    </div>
                    <div className="swiper_progress_bar">
                        <div className="slider_bar">
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
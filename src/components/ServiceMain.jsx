import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import './serviceMain.scss';


const ServiceMain = () => {
    return (
        <div className='serviceMain'>
            <div className="serviceVideo">
                <video src="/img/main-introduce.mp4" autoPlay loop muted></video>
            </div>
            <div className="serviceText">
                <h2>기대와 설렘이 가득한 <br />
                리모델링 경험</h2>
                <p>리모델링을 결심한 순간부터 쌓이는 걱정과 고민,
                아파트멘터리가 함께 해결해 드립니다.</p>
                <button>서비스 알아보기 <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default ServiceMain;
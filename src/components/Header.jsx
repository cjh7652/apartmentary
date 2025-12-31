import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
           <h1 className="logo"><Link to="/"><img src="/img/logo.svg" alt="logo" /></Link></h1>
           <nav>
            <ul>
                <li><Link to="/portfolio">포트폴리오</Link></li>
                <li><Link to="/service">서비스 소개</Link></li>
                <li><Link to="/journal">읽을거리</Link></li>
                <li><Link to="/inquiry">상담신청</Link></li>
            </ul>
           </nav>
        </div>
    );
};

export default Header;
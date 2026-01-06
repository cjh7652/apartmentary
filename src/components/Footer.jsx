import React from 'react';
import {Link} from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <h2><Link path="/"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE0NSIgdmlld0JveD0iMCAwIDEyNiAxNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF84MDZfMzE0MCkiPgo8cGF0aCBkPSJNODIuNjMxIDE0Ljk2OTJIMTAzLjEwOVYwSDc2LjI5NDRINTcuNjUxMkgyMi4wMDJWMTQuOTY5Mkg2NC4wMDJMODYuNTQwMyA2OC4xOTc4SDM5LjY5OTZMNTUuMjk0NCAzMS43NjdIMzYuNjY1M0wwIDExNy4zNzJIMTguNjQzMUwzMy4yOTIzIDgzLjE2N0g5Mi44NzdMMTA3LjM3MSAxMTcuMzcySDEyNkw4Mi42MzEgMTQuOTY5MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDMuMTA5IDEzMC4wMThIMjIuMDAyVjE0NC45ODdIMTAzLjEwOVYxMzAuMDE4WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF84MDZfMzE0MCI+CjxyZWN0IHdpZHRoPSIxMjYiIGhlaWdodD0iMTQ1IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="logo" /></Link></h2>
            </div>
            <div className="footer-info">
                <div className="footer-menu">
                    <div className="footMenu1">
                        <h3>정보</h3>
                        <ul>
                            <li><a href="#">회사 소개</a></li>
                            <li><a href="#">아파트멘터리 브랜드</a></li>
                            <li><a href="#">파츠 PARTS</a></li>
                            <li><a href="#">아킷 ARCKIT</a></li>
                            <li><a href="#">오피스멘터리</a></li>
                            <li><a href="#">채용정보</a></li>
                        </ul>
                    </div>
                    <div className="footMenu2">
                        <h3>안내</h3>
                        <ul>
                            <li><a href="#">가까운 직영점</a></li>
                            <li><a href="#">자주 묻는 질문</a></li>
                        </ul>
                    </div>
                    <div className="footMenu3">
                        <h3>고객센터</h3>
                        <ul>
                            <li><a href="#">전화번호 : 02-6356-1224</a></li>
                            <li><a href="#">영업시간 : 평일 09:00~18:00(공휴일 제외)</a></li>
                            <li><a href="#">SUPPORT@APARTMENTARY.COM</a></li>
                            <li><a href="#">1:1문의</a></li>
                            <li><a href="#">서비스 후기 작성</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-address">
                    <ul>
                        <li>개인정보</li>
                        <li>개인정보방침</li>
                    </ul>
                    <div className="address">정보

안내

고객센터

전화번호

02-6356-1224

영업시간

평일 09:00 ~ 18:00 (공휴일 제외)

· 법인명: 아파트멘터리(주) · 대표자: 윤소연, 김준영 · 사업자 등록번호: 723-87-00195· 통신판매업 신고: 제 2016-서울마포-0923호· 개인정보관리책임자: 장정훈(jay.jang@apartmentary.com)· 주소: 서울특별시 강남구 도산대로 237 3,4F · 02-6356-1224</div>
                    <div className="copyright">© 2015-2022 All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
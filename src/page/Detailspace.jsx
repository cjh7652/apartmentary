import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import data from '../data/data';
import './detailspace.scss';


const Detailspace = () => {
    const { id } = useParams();
    const detailItem = data.find(item => item.id === parseInt(id));
    const [activeSpace, setActiveSpace] =useState(detailItem?.spaces[0])
    if(!detailItem){
        return <div>해당 인테리어 정보를 찾을수 없습니다.</div>
    }
    return (
        <div className="detailspace-page">
           <h2>{detailItem.title}</h2>
           <p>{detailItem.description}</p>


            <div className="space-tabs">
                {detailItem.spaces.map(space => (
                    <button
                        key={space.key}
                        className={activeSpace === space ? 'active' : ''}
                        onClick={() => setActiveSpace(space)}
                    >{space.name}</button>
                ))}
            </div>
            <div className="space-images">
                {activeSpace.images.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={activeSpace.name} />
                ))}
            </div>
            <div className="space-infos">
                <div className="space-info-left">
                    <h3>상세설명</h3>
                   
                    {
                        detailItem.spaces.map((space, index) => (
                            <div className="info-item" key={index}>
                                <h4>{space.name}</h4>
                                <p>{space.description}</p>
                            </div>
                        ))
                    }
                   
                </div>
                <div className="space-info-right">
                    <h2>아파트</h2>
                    {detailItem.title}
                    <h2>주소</h2>
                    {detailItem.address}
                    <h2>평형</h2>
                    {detailItem.type}
                    <h2>서비스</h2>
                    {detailItem.services}
                    <h2>준공연도</h2>
                    {detailItem.year}
                    <h2>시공범위</h2>
                    {detailItem.range}
                    <h2>시공기간</h2>
                    {detailItem.Construction_scope}
                    <h2>시공시기</h2>
                    {detailItem.Construction_period}
                    <h2>키워드</h2>
                    {detailItem.keyword}
                    <h2>평당 견적</h2>
                    {detailItem.estimate}
                </div>

            </div>
        </div>
    );
};

export default Detailspace;
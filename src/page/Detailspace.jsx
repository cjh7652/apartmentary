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
        </div>
    );
};

export default Detailspace;
import React from 'react';
import './Recommendation.css';

export default function Recommendation({ recommendation }) {
    const { name, photo, text } = recommendation;

    return (
        <div className='recommendation'>
            <div className='recommendation-left'>
                <img src={photo} alt={name} />
                <p className='recommendation-name'>{name}</p>
            </div>
            <div className='recommendation-right'>
                <p className='recommendation-text'>{text}</p>
            </div>
        </div>
    );
}

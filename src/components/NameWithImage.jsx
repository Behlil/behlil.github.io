import React from 'react';
import './NameWithImage.css';

const NameWithImage = ({ name, image }) => {
    return (
        <div className="name-with-image-container">
            <div className="circle-image">
                <img src={image} alt="Profile" />
            </div>
            <div className="name">{name}</div>
        </div>
    );
};

export default NameWithImage;

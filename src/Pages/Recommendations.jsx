import React from 'react';
import Recommendation from '../components/Recommendation';
import recommendations from '../Data/recommendationData';
import './Recommendations.css';

const Recommendations = () => {
    return (
        <div className='recommendations'>
            <h2>What People Say About Me</h2>
            <div className='recommendations-list'>
                {recommendations.map((recommendation) => (
                    <Recommendation key={recommendation.id} recommendation={recommendation} />
                ))}
            </div>
        </div>
    );
};

export default Recommendations;

import React from 'react';
import Recommendation from '../components/Recommendation';
// import recommendations from '../Data/recommendationData';
import './Recommendations.css';
import rec1 from '../Images/recommendations/1.jpg';
import rec2 from '../Images/recommendations/2.jpg';
import rec3 from '../Images/recommendations/3.jpg';

const Recommendations = () => {



    const recommendations = [
        {
            id: 1,
            name: 'John Doe',
            photo: rec1,
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            photo: rec2,
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            photo: rec3,
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
        }
    ];
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

import React from 'react';
import './MyEducation.css';

export default function MyEducation() {
    return (
        <div className='education'>
            <h2>My Education</h2>
            <ul className='timeline'>
                <li className='educ1'>
                    <div className='timeline-content '>
                        <h3>Bachelor's Degree in Computer Science</h3>
                        <p className='timeline-date'>2016 - 2020</p>
                        <p className='timeline-school'>Université Abdelmalek Essaâdi</p>
                    </div>
                </li>
                <li className='educ2' >
                    <div className='timeline-content '>
                        <h3>Master's Degree in Data Science</h3>
                        <p className='timeline-date'>2020 - 2022</p>
                        <p className='timeline-school'>ABC University</p>
                    </div>
                </li>
                <li className='educ2' >
                    <div className='timeline-content '>
                        <h3>Master's Degree in Data Science</h3>
                        <p className='timeline-date'>2020 - 2022</p>
                        <p className='timeline-school'>ABC University</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

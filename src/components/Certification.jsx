import React from 'react';
import './Certification.css';
import datacamp from '../Images/datacamp-svgrepo-com.svg';
import IBM from '../Images/ibm-svgrepo-com.svg';
import openai from '../Images/openai-svgrepo-com.svg';

export default function Certification() {
    return (
        <div className='certifications'>
            <h2>Certifications</h2>
            <ul>
                <li >
                    <img className='logo' src={datacamp} alt='Certification 1 Logo' />
                    <span>Data Analyst Associate Certificate</span>
                </li>
                <li >
                    <img className='logo' src={IBM} alt='Certification 2 Logo' />
                    <span>Databases and SQL for Data Science with Python</span>
                </li>
                <li >
                    <img className='logo' src={openai} alt='Certification 3 Logo' />
                    <span>Advanced Learning Algorithms 3</span>
                </li>
            </ul>
        </div>
    );
}

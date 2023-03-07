import React from 'react';
import './Services.css';
import { FaChartBar, FaDatabase, FaRegTrashAlt, FaBalanceScale, FaProjectDiagram, FaWarehouse, FaCalculator, FaGem } from 'react-icons/fa';
// import servicesData from '../Data/servicesData';

const servicesData = [
    {
        id: 1,
        title: 'Data Cleaning',
        icon: <FaRegTrashAlt />,
        description: 'Remove inconsistencies, inaccuracies, and errors from data to improve data quality and ensure data integrity.',
    },
    {
        id: 2,
        title: 'Data Visualization',
        icon: <FaChartBar />,
        description: 'Create compelling visual representations of data to help stakeholders quickly understand trends and patterns.',
    },
    {
        id: 3,
        title: 'Data Analysis',
        icon: <FaCalculator />,
        description: 'Use statistical methods and tools to identify meaningful insights and trends in data and provide actionable recommendations.',
    },
    {
        id: 4,
        title: 'Data Modeling',
        icon: <FaProjectDiagram />,
        description: 'Develop and maintain data models that accurately represent business processes and support business decision-making.',
    },
    {
        id: 5,
        title: 'Data Mining',
        icon: <FaGem />,
        description: 'Extract valuable insights and knowledge from large data sets using advanced data mining techniques.',
    },
    {
        id: 6,
        title: 'Database Management',
        icon: <FaDatabase />,
        description: 'Design, implement, and maintain efficient and secure databases that meet the needs of the organization.',
    },
    {
        id: 7,
        title: 'Data Warehousing',
        icon: <FaWarehouse />,
        description: 'Design, build, and maintain data warehouses that enable efficient reporting, analysis, and decision-making.',
    },
    {
        id: 8,
        title: 'Data Governance',
        icon: <FaBalanceScale />,
        description: 'Develop and implement policies, procedures, and controls to ensure the confidentiality, integrity, and availability of data.',
    },
    // add more services here
];


export default function Services() {
    return (
        <div className='services'>
            <h2>Services</h2>
            <div className='services-container'>
                {servicesData.map((service) => (
                    <div className='service' key={service.id}>
                        <div className='service-icon'>{service.icon}</div>
                        <div className='service-info'>
                            <h3 className='service-title'>{service.title}</h3>
                            <p className='service-description'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

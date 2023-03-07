import React from 'react';
import './Card.css';
import { Link, Outlet } from 'react-router-dom';

export default function Card({ project }) {
    return (
        <div className="card">
            <Link to={`/projects/${project.id}`}>
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                    <h2>{project.title}</h2>
                    <Link to={`/projects/${project.id}`}>View project</Link>
                </div>
                <Outlet />
            </Link>
        </div>
    );
}

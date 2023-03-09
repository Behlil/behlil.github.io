import React, { useState } from 'react';
import './FilterBar.css';

export default function FilterBar({ technologies, onChange }) {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    function handleCheckboxChange(event) {
        const technology = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedTechnologies([...selectedTechnologies, technology]);
        } else {
            setSelectedTechnologies(selectedTechnologies.filter((t) => t !== technology));
        }
    }

    return (
        <div className="filter-bar">
            <label className='filter-label'>Technology:</label>
            {technologies.map((technology) => (
                <div key={technology} className="tech">
                    <input
                        type="checkbox"
                        id={technology}
                        value={technology}
                        checked={selectedTechnologies.includes(technology)}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={technology}>{technology}</label>
                </div>
            ))}
            <button onClick={() => onChange(selectedTechnologies)}>Apply Filters</button>
        </div>
    );
}

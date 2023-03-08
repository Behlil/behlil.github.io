import React from "react";
import "./SkillsRadar.css";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        subject: "Data Visualization",
        A: 89,
        B: 110,
        fullMark: 150
    },
    {
        subject: "Data Cleaning",
        A: 80,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Statistical Analysis",
        A: 94,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Data Modeling",
        A: 80,
        B: 100,
        fullMark: 150
    },
    {
        subject: "Machine Learning",
        A: 85,
        B: 90,
        fullMark: 150
    },
    {
        subject: "Data Mining",
        A: 65,
        B: 85,
        fullMark: 150
    }
];

export default function SkillsRadar() {
    return (
        <div className="radar">
            <h1>Unlocking the full potential of data <span>requires a diverse set of skills. Here's a radar chart showcasing my strengths in various areas of data analysis.</span></h1>
            <ResponsiveContainer width="90%" height={500}>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                        name="skills"
                        dataKey="A"
                        stroke="#E96479"
                        fill="#E96479"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

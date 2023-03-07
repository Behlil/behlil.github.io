import * as React from "react";
import { LineChart, Line } from "recharts";
import "./DataAnalysisLineChart.css"

const data = [
    { name: "3/13/2022", pv: 94, amt: 2400, uv: 2400 },
    { name: "3/20/2022", pv: 94, amt: 2210, uv: 2290 },
    { name: "3/27/2022", pv: 91, amt: 2290, uv: 2000 },
    { name: "4/3/2022", pv: 93 },
    { name: "4/10/2022", pv: 85 },
    { name: "4/17/2022", pv: 97 },
    { name: "4/24/2022", pv: 87 },
    { name: "5/1/2022", pv: 88 },
    { name: "5/8/2022", pv: 92 },
    { name: "5/15/2022", pv: 95 },
    { name: "5/22/2022", pv: 74 },
    { name: "5/29/2022", pv: 87 },
    { name: "6/5/2022", pv: 88 },
    { name: "6/12/2022", pv: 86 },
    { name: "6/19/2022", pv: 85 },
    { name: "6/26/2022", pv: 87 },
    { name: "7/3/2022", pv: 76 },
    { name: "7/10/2022", pv: 91 },
    { name: "7/17/2022", pv: 91 },
    { name: "7/24/2022", pv: 92 },
    { name: "7/31/2022", pv: 88 },
    { name: "8/7/2022", pv: 92 },
    { name: "8/14/2022", pv: 88 },
    { name: "8/21/2022", pv: 93 },
    { name: "8/28/2022", pv: 89 },
    { name: "9/4/2022", pv: 83 },
    { name: "9/11/2022", pv: 97 },
    { name: "9/18/2022", pv: 92 },
    { name: "9/25/2022", pv: 85 },
    { name: "10/2/2022", pv: 90 },
    { name: "10/9/2022", pv: 87 },
    { name: "10/16/2022", pv: 88 },
    { name: "10/23/2022", pv: 84 },
    { name: "10/30/2022", pv: 87 },
    { name: "11/6/2022", pv: 76 },
    { name: "11/13/2022", pv: 85 },
    { name: "11/20/2022", pv: 59 },
    { name: "11/27/2022", pv: 78 },
    { name: "12/4/2022", pv: 81 },
    { name: "12/11/2022", pv: 79 },
    { name: "12/18/2022", pv: 64 },
    { name: "12/25/2022", pv: 67 },
    { name: "1/1/2023", pv: 81 },
    { name: "1/8/2023", pv: 90 }
];

export default function DataAnalysisLineChart() {
    return (
        <div className="dataanalysislineChart">
            <LineChart width={800} height={300} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#E96479" strokeWidth={2}   />
            </LineChart>
        </div>
    );
}

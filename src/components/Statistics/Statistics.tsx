import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./Statistics.css";
import Drops from "../Drops/Drops";


const startYear = 1880;
// const endYear = 2022;

const noSmoothingData = [
    -0.17, -0.09, -0.11, -0.18, -0.29, -0.34, -0.32, -0.37, -0.18, -0.11,
    -0.36, -0.23, -0.28, -0.32, -0.32, -0.24, -0.11, -0.11, -0.27, -0.18,
    -0.08, -0.15, -0.28, -0.37, -0.47, -0.26, -0.22, -0.38, -0.43, -0.49,
    -0.44, -0.44, -0.36, -0.34, -0.15, -0.14, -0.36, -0.46, -0.30, -0.28,
    -0.27, -0.19, -0.28, -0.26, -0.27, -0.22, -0.11, -0.21, -0.20, -0.36,
    -0.16, -0.09, -0.16, -0.28, -0.12, -0.20, -0.14, -0.03, 0.00, -0.01,
    0.13, 0.19, 0.07, 0.09, 0.21, 0.09, -0.07, -0.02, -0.10, -0.11,
    -0.17, -0.07, 0.01, 0.08, -0.13, -0.14, -0.19, 0.05, 0.06, 0.03,
    -0.03, 0.06, 0.03, 0.05, -0.20, -0.11, -0.06, -0.02, -0.08, 0.05,
    0.03, -0.08, 0.01, 0.16, -0.07, -0.01, -0.10, 0.18, 0.07, 0.17,
    0.26, 0.32, 0.14, 0.31, 0.16, 0.12, 0.18, 0.32, 0.39, 0.27,
    0.45, 0.41, 0.22, 0.23, 0.32, 0.45, 0.33, 0.46, 0.61, 0.38,
    0.40, 0.54, 0.63, 0.62, 0.54, 0.68, 0.64, 0.67, 0.54, 0.66,
    0.73, 0.61, 0.65, 0.68, 0.75, 0.90, 1.02, 0.92, 0.85, 0.98,
    1.02, 0.85, 0.89
];


const lowessData = [
    -0.10, -0.13, -0.17, -0.21, -0.24, -0.27, -0.28, -0.28, -0.27, -0.26,
    -0.26, -0.27, -0.27, -0.27, -0.25, -0.23, -0.21, -0.19, -0.17, -0.17,
    -0.20, -0.23, -0.26, -0.28, -0.31, -0.34, -0.36, -0.37, -0.39, -0.41,
    -0.41, -0.39, -0.35, -0.32, -0.31, -0.30, -0.30, -0.30, -0.30, -0.29,
    -0.28, -0.26, -0.25, -0.24, -0.23, -0.22, -0.22, -0.21, -0.20, -0.19,
    -0.19, -0.19, -0.18, -0.17, -0.15, -0.14, -0.10, -0.06, -0.01, 0.03,
    0.07, 0.09, 0.11, 0.10, 0.08, 0.04, 0.01, -0.03, -0.07, -0.08,
    -0.07, -0.07, -0.07, -0.07, -0.06, -0.06, -0.05, -0.04, -0.01, 0.01,
    0.03, 0.01, -0.01, -0.03, -0.04, -0.05, -0.06, -0.05, -0.03, -0.02,
    -0.00, 0.00, 0.00, -0.00, 0.01, 0.02, 0.04, 0.08, 0.12, 0.17,
    0.20, 0.21, 0.22, 0.21, 0.21, 0.22, 0.24, 0.27, 0.31, 0.33,
    0.33, 0.33, 0.33, 0.33, 0.34, 0.37, 0.40, 0.42, 0.45, 0.47,
    0.50, 0.52, 0.55, 0.59, 0.61, 0.62, 0.63, 0.64, 0.64, 0.65,
    0.65, 0.67, 0.70, 0.74, 0.79, 0.83, 0.88, 0.91, 0.93, 0.92,
    0.92, 0.91, 0.90
];


const data = noSmoothingData.map((noSmoothing, index) => {
    return {
        year: startYear + index,
        Annual_mean: noSmoothing,
        Lowess_smoothing: lowessData[index]
    };
}).filter((item) => item.year >= 1880 && item.year <= 2022);
interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload, label, active }) => {
    if (active && payload && label) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{`Year : ${label}`}</p>
                <p className="tooltip-value">{`No_Smoothing : ${payload[0].value} C`}</p>
                <p className="tooltip-value">{`Lowess5 : ${payload[1].value} C`}</p>
            </div>
        );
    }
    return null;
};


const Statistics = () => {
    return (
        <div className="graph-wrapper">
            <Drops/>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 15, right: 50, left: 0, bottom: 15,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis
                        dataKey="year"
                        stroke="#000"
                        tick={{ fontSize: 15, fontFamily: 'Arial' }}
                    />
                    <YAxis
                        stroke="#000"
                        tick={{ fontSize: 15, fontFamily: 'Arial' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" height={36} wrapperStyle={{ fontFamily: 'Arial', fontSize: '15px' }} />
                    <Line type="monotone" dataKey="Annual_mean" stroke="#082929" strokeWidth={2} activeDot={{ r: 3 }} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="Lowess_smoothing" stroke="#1dc8c8" strokeWidth={2} activeDot={{ r: 3 }} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};



export default Statistics;

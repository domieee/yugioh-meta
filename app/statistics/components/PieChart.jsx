'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function PieChart({ data }) {
    const [pieValues, setPieValues] = useState([])
    const [pieCounts, setPieCounts] = useState([])
    const [tablePercentages, setTablePercentages] = useState([])

    ChartJS.register(ArcElement, Tooltip, Legend);

    const dataWinners = {
        labels: pieValues,
        datasets: [
            {
                label: 'Total wins',
                data: pieCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.65)',
                    'rgba(54, 162, 235, 0.65)',
                    'rgba(255, 206, 86, 0.65)',
                    'rgba(75, 192, 192, 0.65)',
                    'rgba(153, 102, 255, 0.65)',
                    'rgba(255, 159, 64, 0.65)',
                    'rgba(255, 200, 132, 0.65)',
                    'rgba(54, 42, 235, 0.65)',
                    'rgba(199, 26, 86, 0.65)',
                    'rgba(75, 192, 192, 0.65)',
                    'rgba(153, 102, 255, 0.65)',
                    'rgba(255, 159, 64, 0.65)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.65)',
                    'rgba(54, 162, 235, 0.65)',
                    'rgba(255, 206, 86, 0.65)',
                    'rgba(75, 192, 192, 0.65)',
                    'rgba(153, 102, 255, 0.65)',
                    'rgba(255, 159, 64, 0.65)',
                ],
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        const values = data[0]
        const counts = data[1]
        const percentages = data[2]
        setPieCounts(counts)
        setPieValues(values)
        setTablePercentages(percentages)
    }, [data])

    return (
        <>
            <div>PieChart</div>
            <Pie data={dataWinners} />
        </>
    )
}

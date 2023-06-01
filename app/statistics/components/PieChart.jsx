'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Skeleton, Stack } from '@mui/material';

export default function PieChart({ data }) {
    const [pieValues, setPieValues] = useState(null)
    const [pieCounts, setPieCounts] = useState([])

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
                    'rgba(255, 99, 71, 0.65)',
                    'rgba(0, 128, 0, 0.65)',
                    'rgba(255, 165, 0, 0.65)',
                    'rgba(218, 112, 214, 0.65)',
                    'rgba(70, 130, 180, 0.65)',
                    'rgba(255, 0, 255, 0.65)',
                    'rgba(255, 255, 0, 0.65)',
                    'rgba(0, 255, 255, 0.65)',
                    'rgba(128, 0, 0, 0.65)',
                    'rgba(0, 0, 128, 0.65)',
                    'rgba(128, 128, 0, 0.65)',
                    'rgba(0, 128, 128, 0.65)'
                ],
                borderColor: [
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
                    'rgba(255, 99, 71, 0.65)',
                    'rgba(0, 128, 0, 0.65)',
                    'rgba(255, 165, 0, 0.65)',
                    'rgba(218, 112, 214, 0.65)',
                    'rgba(70, 130, 180, 0.65)',
                    'rgba(255, 0, 255, 0.65)',
                    'rgba(255, 255, 0, 0.65)',
                    'rgba(0, 255, 255, 0.65)',
                    'rgba(128, 0, 0, 0.65)',
                    'rgba(0, 0, 128, 0.65)',
                    'rgba(128, 128, 0, 0.65)',
                    'rgba(0, 128, 128, 0.65)'
                ],
            },
        ],
    };

    useEffect(() => {
        const values = data[0]
        const counts = data[1]
        setPieCounts(counts)
        setPieValues(values)
    }, [data])

    return (
        <>
            {pieValues === null ?
                <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: '2rem', minWidth: 330 }} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem', minWidth: 330 }} />
                    <Skeleton variant="circular" sx={{ minWidth: 270, minHeight: 270 }} />
                </Stack> :
                <Pie data={dataWinners} />}

        </>
    )
}

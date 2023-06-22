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
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 200, 132, 1)',
                    'rgba(54, 42, 235, 1)',
                    'rgba(199, 26, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 71,15)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(218, 112, 214, 1)',
                    'rgba(70, 130, 180, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                    'rgba(0, 255, 255,15)',
                    'rgba(128, 0, 0, 0.65)',
                    'rgba(0, 0, 128, 0.65)',
                    'rgba(128, 128, 0, 0.65)',
                    'rgba(0, 128, 128, 0.65)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 0)'
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
            {!pieValues && pieValues === null ?
                <Stack spacing='2px'
                    width='350px'
                    alignItems='center'
                    marginBlock='auto'
                    sx={{ height: 360 }}>
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem', minWidth: 300 }} />
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem', minWidth: 240 }} />
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem', minWidth: 300 }} />
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem', minWidth: 270 }} />
                    <Skeleton variant="circular" sx={{ width: 230, height: 230 }} />
                </Stack > :
                <div className='chart' >
                    <Pie data={dataWinners} />
                </div >
            }

        </>
    )
}

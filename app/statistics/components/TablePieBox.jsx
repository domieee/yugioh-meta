'use client'

import React from 'react'
import TablePie from './TablePie'
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

export default function TablePieBox() {

    const [pieData, setPieData] = useState({})
    const [pieOverallData, setPieOverallData] = useState({})

    useEffect(() => {
        const fetchPieData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}winner-breakdown`)
            const json = await response.json()
            setPieData(json)
        }
        fetchPieData()
    }, [])

    useEffect(() => {
        const fetchPieData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}overall-breakdown`)
            const json = await response.json()
            console.log(json)
            setPieOverallData(json)
        }
        fetchPieData()
    }, [])

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                bgcolor="background.paper"
                p={1}
                borderRadius={4}
                boxShadow={8}
                marginBottom={2}

            >
                <TablePie winnerJson={pieData} />
                <TablePie topCutJson={pieOverallData} />
            </Box>
        </>
    )
}

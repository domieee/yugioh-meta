'use client'

import React from 'react'
import TablePie from './TablePie'
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

export default function TablePieBox() {

    const [pieData, setPieData] = useState([])
    const [pieOverallData, setPieOverallData] = useState([])

    const theme = createTheme({
        breakpoints: {
            values: {
                xxs: 0, // small phone
                xs: 300, // phone
                sm: 600, // tablets
                md: 900, // small laptop
                lg: 1200, // desktop
                xl: 1536 // large screens
            }
        }
    });

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
                bgcolor="background.paper"
                borderRadius={4}
                boxShadow={8}
                marginBottom={2}
                justifyContent="center"
                sx={{
                    flexDirection: {
                        xs: "row",
                        sm: 'row',
                        lg: 'column'
                    }
                }}
            >

                <TablePie winnerJson={pieData} />
                <TablePie topCutJson={pieOverallData} />
            </Box>
        </>
    )
}

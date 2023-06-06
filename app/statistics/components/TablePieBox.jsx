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
                backgroundColor='#212121'
                gap={2}

                display="flex"
                justifyContent="center"
                flexWrap='wrap'
                alignItems="start"
                height='100%'
                minHeight='100%'
                p={5}
                sx={{
                    flexDirection: {
                        // small phone
                        xs: 'column', // phone
                        sm: 'column', // tablets
                        md: 'column', // small laptop
                        xl: 'row'
                    }
                }}
            >

                <TablePie winnerJson={pieData} item='winner-breakdown' />
                <TablePie topCutJson={pieOverallData} item='overall-breakdown' />

            </Box>
        </>
    )
}

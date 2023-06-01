'use client'

import React from 'react'
import Box from '@mui/material/Box';
import PieChart from "./PieChart"
import TableMUI from "./TabelMUI"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';

export default function TablePie({ winnerJson, topCutJson }) {

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
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent='center'
            alignItems='center'
            p={2}
            borderRadius={4}
            boxShadow={8}
            marginBottom={2}
            sx={{
                minHeight: 500
            }}
        >
            <Typography
                paddingLeft={10}
                variant="h5"
                sx={{
                    paddingLeft: {
                        xs: '0px',
                        sm: '0px',
                        md: '50px'
                    },
                    textAlign: {
                        xs: 'start',
                        sm: 'start',
                        md: 'start'
                    }
                }}>
                {winnerJson ? "Winner Breakdown" : " Overall Top Cut Breakdown"}
            </Typography>
            <Box
                theme={theme}
                justifyContent='center'
                display="flex"
                flexDirection="row"
                alignItems='center'
                p={2}
                borderRadius={4}
                minHeight={500}
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    }
                }}>
                <div className="canvasContainer">
                    <PieChart data={winnerJson || topCutJson} />
                </div>
                <div className="tableContainer">
                    <TableMUI
                        table='winner-breakdown'
                        data={winnerJson || topCutJson} />
                </div>
            </Box>
        </Box >

    )
}

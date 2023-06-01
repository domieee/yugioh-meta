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
            p={1}
            borderRadius={4}
            border='solid 1px black'
            borderWidth='1px'
            borderColor='#fff'
            marginBottom={2}
            maxWidth={700}
            sx={{
                minWidth: {
                    xs: '380px',
                    sm: '380px',
                    md: '380px',
                    lg: '900px'
                }
            }
            }
        >
            <Box sx={{
                display: 'flex',
                height: '50px',
                alignItems: 'center',
                justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'start',
                    lg: 'center'
                },

            }}>
                <Typography
                    variant="h5"
                    sx={{
                        paddingLeft: {
                            xs: '0px',
                            sm: '0px',
                            md: '75px'
                        },
                        justifyContent: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'center'
                        },
                    }}>
                    {winnerJson ? "Winner Breakdown" : " Overall Top Cut Breakdown"}
                </Typography>
            </Box>
            <Box
                theme={theme}
                justifyContent='center'
                display="flex"
                flexDirection="row"

                p={2}
                borderRadius={4}
                minHeight={430}

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

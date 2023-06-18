'use client'

import * as React from 'react'
import Box from '@mui/material/Box';
import PieChart from "../statistics/components/PieChart"
import TableMUI from "../statistics/components/TabelMUI"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';


import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';



export default function TablePie({ winnerJson, topCutJson, tournamentJson, item }) {


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

    {/*  // TODO: In the dialogContext: Delete the Lorem Ipsum and replace it with real text */ }




    return (
        <>
            <Grid
                container
                flexDirection="row"
                spacing={2}
                justifyContent="space-between"
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    }
                }}>
                <Grid
                    item
                    xs={6}
                    borderRadius={2}
                    height='380px'
                    justifyContent="center"
                    sx={{
                        height: '380px'
                    }} className="canvasContainer">
                    <Paper

                        justifyContent="center"
                        sx={{
                            backgroundColor: '#1F0F26',
                            borderRadius: 2,
                            padding: '10px',
                            height: '380px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        <div style={{ width: '320px', margin: '10px' }}>
                            <PieChart data={winnerJson || topCutJson || tournamentJson} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} className="tableContainer">
                    <TableMUI
                        table='winner-breakdown'
                        data={winnerJson || topCutJson || tournamentJson} />
                </Grid>
            </Grid >


        </>

    )
}

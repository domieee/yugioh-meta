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

                sx={{
                    marginBlock: '5px',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row',

                    },
                    justifyContent: {
                        xs: 'center'
                    }
                }}>
                <Grid
                    item
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '50%',
                            lg: '50%',
                        },
                        height: '380px',
                        marginBottom: {
                            xs: '25px',
                            md: '0'
                        }
                    }}
                    xs={{
                        xs: 6,
                        sm: 6,
                        md: 12,
                        lg: 12, // desktop

                    }}
                    borderRadius={2}
                    height='380px'
                    justifyContent="center"
                    className="canvasContainer">

                    <Paper
                        elevation={1}
                        justifyContent="center"
                        sx={{
                            bgcolor: '#191919',
                            padding: '10px',
                            height: '380px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        <div style={{ width: '320px', height: '380px', display: 'flex', alignItems: 'center' }}>
                            <PieChart data={winnerJson || topCutJson || tournamentJson} />
                        </div>
                    </Paper>
                </Grid>
                <Grid
                    item
                    sx={{
                        alignItems: 'center',
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '50%',
                            lg: '50%',
                        },
                    }}
                    xs={{
                        xs: 6,
                        sm: 6,
                        md: 12,
                        lg: 12, // desktop

                    }}
                    className="tableContainer">
                    <TableMUI
                        table='winner-breakdown'
                        data={winnerJson || topCutJson || tournamentJson} />
                </Grid>
            </Grid >


        </>

    )
}

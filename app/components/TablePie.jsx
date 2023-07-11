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
                        sm: 'row',
                        md: 'row',

                    },
                    justifyContent: {
                        xs: 'center'
                    },
                    alignItems: {
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
                    xs={11}
                    sm={6}
                    borderRadius={2}
                    height='380px'
                    justifyContent="center"
                    className="canvasContainer">

                    <Paper
                        elevation={0}
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
                        <div style={{ width: '360px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    xs={11}
                    sm={6}


                    className="tableContainer">
                    <TableMUI
                        table='winner-breakdown'
                        data={winnerJson || topCutJson || tournamentJson} />
                </Grid>
            </Grid >


        </>

    )
}

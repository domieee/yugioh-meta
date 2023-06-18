'use client'

import * as React from 'react'
import Box from '@mui/material/Box';
import PieChart from "./PieChart"
import TableMUI from "./TabelMUI"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';



export default function TablePie({ winnerJson, topCutJson, item }) {


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
            <Box
                paddingLeft='100px'>
                <Typography variant='body2'>Some potential data</Typography>
                <Typography variant='body2'>Some potential data</Typography>
                <Typography variant='body2'>Some potential data</Typography>
            </Box>
            <Box
                theme={theme}
                justifyContent='space-evenly'
                alignItems='center'
                display="flex"
                flexDirection="row"
                marginInline='auto'
                p={2}
                borderRadius={1}
                minHeight={430}
                width='100%'
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


        </>

    )
}

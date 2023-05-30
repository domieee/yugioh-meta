'use client'

import React from 'react'
import Box from '@mui/material/Box';
import PieChart from "./PieChart"
import TableMUI from "./TabelMUI"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function TablePie({ winnerJson, topCutJson }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            bgcolor="background.paper"
            p={2}
            borderRadius={4}
            boxShadow={8}
            marginBottom={2}
        >
            <Typography
                paddingLeft={10}
                variant="h5">
                {winnerJson ? "Winner Breakdown" : " Overall Top Cut Breakdown"}
            </Typography>
            <Box
                justifyContent='space-evenly'
                display="flex"
                flexDirection="row"
                bgcolor="background.paper"
                p={2}
                borderRadius={4}

                marginBottom={2}>
                <div className="canvasContainer">
                    <PieChart data={winnerJson || topCutJson} />
                </div>
                <div className="tableContainer">
                    <TableMUI
                        table='winner-breakdown'
                        data={winnerJson || topCutJson} />
                </div>
            </Box>
        </Box>

    )
}

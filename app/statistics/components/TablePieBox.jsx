'use client'

import React from 'react'
import TablePie from './TablePie'
import Box from '@mui/material/Box';

export default function TablePieBox({ winnerJson, topCutJson }) {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                bgcolor="background.paper"
                p={2}
                borderRadius={4}
                boxShadow={8}
                marginBottom={2}
            >
                <TablePie winnerJson={winnerJson} />
                <TablePie topCutJson={topCutJson} />
            </Box>
        </>
    )
}

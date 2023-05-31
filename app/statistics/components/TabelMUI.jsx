'use client'

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';

export default function TableMUI({ data, table }) {

    console.log(table)

    const values = data[0]
    const totals = data[1]
    const percentages = data[2]


    return (

        <Grid item xs={12} sm={10} md={8}>
            <TableContainer component={Paper} elevation={4}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Played Deck</TableCell>
                            <TableCell align="right">Wins in total</TableCell>
                            {percentages !== undefined ? <TableCell align="right">Wins by (%)</TableCell> : null}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && values && values.map((value, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontSize: '12px' }}
                                >
                                    {value}
                                </TableCell>
                                <TableCell align="right">{totals[index]}</TableCell>
                                {percentages !== undefined ? <TableCell align="right">{percentages && percentages[index]}</TableCell> : null}

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid >
    )
}

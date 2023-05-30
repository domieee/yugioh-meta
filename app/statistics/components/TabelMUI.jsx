'use client'

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableMUI({ data }) {



    const values = data[0]
    const totals = data[1]

    const percentages = data[2]


    return (
        <TableContainer component={Paper} elevation={1}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Played Deck</TableCell>
                        <TableCell align="right">Wins in total</TableCell>
                        {percentages !== undefined ? <TableCell align="right">Wins by (%)</TableCell> : null}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {values.map((value, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {value}
                            </TableCell>
                            <TableCell align="right">{totals[index]}</TableCell>
                            {percentages !== undefined ? <TableCell align="right">{percentages && percentages[index]}</TableCell> : null}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

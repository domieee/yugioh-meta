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
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function TableMUI({ data, table }) {



    const values = data[0]
    const totals = data[1]
    const percentages = data[2]


    return (
        <>
            {!values ?
                <Stack spacing='1px' sx={{ marginInline: 'auto' }}>
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1.5rem', minWidth: 330 }} />
                    <Skeleton variant="rounded" sx={{ minWidth: 350, minHeight: 300 }} />
                </Stack > :
                <Paper sx={{ heigth: '100%', overflow: 'hidden' }}>
                    <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 380 }}>
                        <Table stickyHeader sx={{ minWidth: 270 }} size='small' aria-label="simple table">
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
                                        onClick={(value) => alert({ value })}
                                        hover
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
                </Paper>
            }
        </>
    )
}

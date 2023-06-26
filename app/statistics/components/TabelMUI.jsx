'use client'

import React, { useState } from 'react'
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

import { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

export default function TableMUI({ data, table }) {

    const [scrollable, setScrollable] = useState(false)





    const values = data[0]
    const totals = data[1]
    const percentages = data[2]

    useEffect(() => {
        if (values?.length > 10) {
            console.log("🚀 ~ file: TabelMUI.jsx:32 ~ useEffect ~ values?.length:", values?.length)
            setScrollable(true)
        }
    }, [])

    const containerHeight = useRef()
    const tableHeight = useRef()

    useEffect(() => {

        const container = containerHeight.current.offsetHeight;
        console.log('Container height:', container);
        const table = tableHeight.current.offsetHeight;
        console.log('Table height:', table);
        if (table > container) {
            setScrollable(true)
        }

    }, [values]);

    return (
        <>
            {!data ?
                <Stack sx={{ marginInline: 'auto' }}>
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                    <Skeleton variant="text" sx={{ fontSize: '1.75rem', minWidth: 350 }} />
                </Stack > :

                <TableContainer component={Paper}
                    ref={containerHeight}
                    sx={{
                        minHeight: 'fit-content',
                        maxHeight: 380,
                        borderRadius: '0',
                        boxShadow: '0',
                        '&:hover': {
                            cursor: scrollable ? 'n-resize' : 'default'
                        }
                    }} className='table-container'  >

                    <Table ref={tableHeight} variant='outline' boxShadow={0} size='small' stickyHeader style={{ boxShadow: 'none', }} sx={{ '&:nth-first-child()': { marginTop: '37px' } }} aria-label="simple table">
                        <TableHead style={{}}>
                            <TableRow backgroundColor='white'>
                                <TableCell><Typography variant='overline'>  Played Deck</Typography></TableCell>
                                <TableCell align="right"><Typography variant='overline'>Total</Typography></TableCell>
                                <TableCell align="right"><Typography variant='overline'>%</Typography></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {values && values.map((value, index) => (
                                <TableRow
                                    onClick={(value) => alert({ value })}
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" cursor='pointer'>
                                        <Typography variant='body2'>
                                            {value}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant='body2'>
                                            {totals[index]}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant='body2'>
                                            {percentages[index]}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            }
        </>
    )
}

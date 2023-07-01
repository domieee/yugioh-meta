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
import Box from '@mui/material/Box';


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

    const emptyArray = new Array(8).fill(null);

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
                        },
                        overflow: 'auto',
                    }} className='table-container'  >

                    <Table ref={tableHeight} variant='outline' boxShadow={0} size='small' stickyHeader style={{ boxShadow: 'none', }} sx={{ '&:nth-first-child()': { marginTop: '37px', width: '100%' } }} aria-label="simple table">
                        <TableHead >
                            <TableRow backgroundColor='white'>
                                <TableCell><Typography variant='overline'>  Played Deck</Typography></TableCell>
                                <TableCell align="right"><Typography variant='overline'>Total</Typography></TableCell>
                                <TableCell align="right"><Typography variant='overline'>%</Typography></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {values && values.length > 0 ? (
                                values.map((value, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ maxHeight: '30px', '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell sx={{ height: '30px' }} scope="row" >
                                            <Typography variant='body2'>
                                                {value}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'end'
                                            }}
                                            align="right">
                                            <Typography variant='body2'>
                                                {totals[index]}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ height: '30px' }} align="right">
                                            <Typography variant='body2'>
                                                {percentages[index]}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (

                                emptyArray.map((_, index) => (
                                    <TableRow key={index} sx={{
                                        width: '100%'
                                    }} >
                                        <TableCell
                                            component="th"
                                            scope="row" >
                                            <Typography sx={{ textAlign: 'right' }}>
                                                <Skeleton variant="text" sx={{ textAlign: 'right', fontSize: '0.75rem', width: 100 }} />
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'end'
                                            }}>
                                                <Skeleton variant="text" sx={{ textAlign: 'right', fontSize: '0.75rem', width: 20 }} />
                                            </Box>
                                        </TableCell>
                                        <TableCell >
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'end'
                                            }}>
                                                <Skeleton variant="text" sx={{ fontSize: '0.75rem', width: 37.5 }} />
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>

                    </Table>
                </TableContainer >
            }
        </>
    )
}

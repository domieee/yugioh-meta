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

import { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

export default function TableMUI({ data, table }) {

    const containerRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const body = bodyRef.current

        console.log(body, container)
        if (container && container.scrollHeight > container.clientHeight) {
            container.classList.add('scrollable');
        } else {
            container?.classList.remove('scrollable');
        }
    }, []);

    const values = data[0]
    const totals = data[1]
    const percentages = data[2]

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

                <TableContainer component={Paper} sx={{ height: 380, borderRadius: '0' }} className='table-container' ref={containerRef}  >

                    <Table variant='outline' boxShadow={0} size='small' stickyHeader style={{ boxShadow: 'none', }} sx={{ '&:nth-first-child()': { marginTop: '37px' } }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#fff' }}>
                            <TableRow backgroundColor='white'>
                                <TableCell><Typography variant='overline'>  Played Deck</Typography></TableCell>
                                <TableCell align="right"><Typography variant='overline'>Total</Typography></TableCell>
                                {percentages !== undefined ? <TableCell align="right"><Typography variant='overline'>%</Typography></TableCell> : null}

                            </TableRow>
                        </TableHead>
                        <TableBody red={bodyRef}>
                            {values && values.map((value, index) => (
                                <TableRow
                                    onClick={(value) => alert({ value })}
                                    hover
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" cursor='pointer'>
                                        <Typography variant='body1'>
                                            {value}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">{totals[index]}</TableCell>
                                    {percentages !== undefined ? <TableCell align="right">{percentages && percentages[index]}</TableCell> : null}

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            }
        </>
    )
}

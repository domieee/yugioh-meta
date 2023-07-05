'use client'

import React, { useState } from 'react'

import { List, Paper, Box, IconButton, Typography, Chip } from '@mui/material'
import TournamentTreeOverviewItem from './TournamentTreeOverviewItem'
import { Divider } from '@mui/material'
import { TfiAngleRight } from "react-icons/tfi";

export default function TournamentTreeOverviewRow({ data, place, listOpen, itemKey, icon, borderColor }) {

    const [item, setItem] = useState({ open: listOpen, key: itemKey })

    const toggleOpen = () => {
        setItem(prevItem => ({
            ...prevItem,
            open: !prevItem.open
        }));
    };

    return (

        <List
            sx={{
                width: '100%',
                marginInline: 'auto'
            }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            direction='row'
            spacing={2}>

            <Box
                onClick={() => toggleOpen()}
                sx={{
                    display: 'flex',
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }}>
                <IconButton >
                    <TfiAngleRight style={{
                        width: '20px',
                        height: '20px',
                        transform: item.open ?
                            'rotate(90deg)' :
                            'rotate(0deg)',
                        transition: 'all 0.2s ease-in-out'
                    }} />
                </IconButton>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        width: '100%'
                    }}>
                        <Divider sx={{
                            alignSelf: 'center'
                        }} width='100%' light orientation="horizontal" textAlign='left'>
                            <Chip
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100px',
                                    cursor: 'default', // Set the default cursor style
                                    '&:hover': {
                                        cursor: 'pointer', // Set the cursor style when hovering
                                    },
                                }}
                                variant='outlined'
                                icon={icon}
                                label={place}
                            />

                        </Divider>
                    </Box>
                </Box>
            </Box>
            {item.open ? (
                <Box
                    sx={{
                        transition: 'height 0.2s ease-in-out',
                        height: item.open ? 'auto' : '0', // Set initial height to 0 when closed
                        overflow: 'hidden', // Hide content when closed
                    }}
                >
                    {data?.map((item, index) => (
                        <TournamentTreeOverviewItem key={index} data={data} borderColor={borderColor} />
                    ))}
                </Box>
            ) : null}
        </List >

    )
}

'use client'

import React, { useState } from 'react'

import { List, Paper, Box, IconButton, Typography, Chip } from '@mui/material'
import TournamentTreeOverviewItem from './TournamentTreeOverviewItem'
import { Divider } from '@mui/material'
import { TfiAngleRight } from "react-icons/tfi";
import {
    GiStabbedNote,
    GiBroadsword,
    GiTrophy,
    GiFamilyTree
} from "react-icons/gi";


export default function TournamentTreeOverviewRow({ data, place, listOpen, itemKey, icon }) {

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

            <Box sx={{
                display: 'flex'
            }}>
                <IconButton onClick={() => toggleOpen()}>
                    <TfiAngleRight style={{
                        width: '20px',
                        height: '20px',
                        transform: item.open ? 'rotate(90deg)' : 'rotate(0deg)',
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
                                style={{
                                    width: '100px'
                                }}
                                variant='outlined'
                                icon={icon}
                                label={place} />

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
                        <TournamentTreeOverviewItem key={index} data={data} />
                    ))}
                </Box>
            ) : null}
        </List >

    )
}

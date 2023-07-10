'use client'

import React from 'react'

import {
    Box,
    Grid,
    Tooltip,
    IconButton,
    Typography,
    Paper,
    Divider,
    Skeleton,
    Stack
} from '@mui/material'


import { IconContext } from "react-icons"

export default function TournamentDetailsItem({ icon, iconType, data, itemTitle, tooltipTitle }) {

    const dataProvider = () => {
        if (data === null || data.length === 0 || data === 0) {
            return (
                <Typography
                    sx={{
                        fontStyle: 'italic',
                        color: 'rgba(0, 0, 0, 0.6)',
                    }}
                    variant='body2'>
                    No information provided
                </Typography>
            )
        } else {
            return (
                <Typography
                    sx={{
                        color: '#191919'
                    }} variant='body2'>{data}</Typography>
            )
        }
    }
    console.log("🚀 ~ file: TournamentDetailsItem.jsx:20 ~ TournamentDetailsItem ~ data:", data)
    return (
        <Tooltip title={tooltipTitle}>
            <Grid
                sx={{
                    '&:hover': {
                        cursor: 'help',
                    }
                }}
                item
                width='100%'
                xs={12}
                sm={6}
                justifyContent='center'
            >
                <Paper
                    elevation={0}
                    sx={{
                        bgcolor: 'yellow',
                        width: '100%',
                        paddingBlock: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '75px',
                        flexDirection: 'row',
                    }}>
                    <Box sx={{
                        width: '20px',
                        marginInline: " 25px",
                        heigth: '100%',
                        display: 'flex',
                        alignItems: 'start',
                        boxShadow: '0'

                    }}>
                        <Box sx={{
                            height: '100%'
                        }}>
                            <IconContext.Provider value={{ color: '#191919' }}>
                                {icon && icon}
                            </IconContext.Provider>
                        </Box>
                    </Box>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            marginRight: '25px'
                        }}
                    />

                    <Stack>
                        <Typography sx={{
                            color: '#191919'
                        }}
                            variant='overline'>{itemTitle}</Typography>


                        {data === 'N/A' || data === undefined ?
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: 100 }} />
                            :
                            dataProvider()}
                    </Stack>
                </Paper>
            </Grid>
        </Tooltip>
    )
}

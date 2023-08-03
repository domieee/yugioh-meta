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

export default function TournamentDetailsItem({ icon, iconType, index, data, itemTitle, tooltipTitle, color, bgColor }) {

    const dataProvider = () => {
        if (data === null || data.length === 0 || data === 0) {
            return (
                <Typography
                    sx={{
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255, 0.6)',
                    }}
                    variant='body1'>
                    No information provided
                </Typography>
            )
        } else {
            return (
                <Typography sx={{ color: color }} variant='body1'>{data}</Typography>
            )
        }
    }
    console.log("🚀 ~ file: TournamentDetailsItem.jsx:20 ~ TournamentDetailsItem ~ data:", data)
    return (
        <Tooltip
            placement='top'
            title={tooltipTitle}>
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
                    elevation={1}
                    sx={{
                        bgcolor: 'rgba(0, 0, 0, 0)',
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
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '0'

                    }}>

                        {index === 1 ?
                            <IconContext.Provider value={{ color: iconColor }}>
                                {icon && icon}
                            </IconContext.Provider> :
                            icon}

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
                            color: 'rgba(255,255,255,0.6)'
                        }} variant='overline'>{itemTitle}</Typography>


                        {data === 'N/A' || data === undefined ?
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: 100 }} />
                            :
                            dataProvider()}
                    </Stack>
                </Paper>
            </Grid>
        </Tooltip >
    )
}

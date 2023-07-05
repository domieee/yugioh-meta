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

export default function TournamentDetailsItem({ icon, iconType, data, tooltipTitle }) {

    const dataProvider = () => {
        if (data === null || data.length === 0 || data === 0) {
            return (
                <Typography
                    sx={{
                        fontStyle: 'italic',
                        color: 'rgba(255, 255, 255, 0.6)',
                    }}
                    variant='body2'>
                    No data provided
                </Typography>
            )
        } else {
            return (
                <Typography variant='body2'>{data}</Typography>
            )
        }
    }
    console.log("🚀 ~ file: TournamentDetailsItem.jsx:20 ~ TournamentDetailsItem ~ data:", data)
    return (
        <Grid
            item
            width='100%'
            xs={12}
            sm={6}
            justifyContent='center'
        >
            <Paper
                sx={{
                    width: '100%',
                    borderRadius: '0',
                    paddingBlock: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '75px',
                    flexDirection: 'row',
                    boxShadow: '0'
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
                        {iconType === 'winner' ?

                            <IconContext.Provider value={{ color: "#FFD700" }}>

                                {icon && icon}


                            </IconContext.Provider> :


                            icon

                        }
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

                    }}
                        variant='overline'>{tooltipTitle}</Typography>


                    {data === 'N/A' || data === undefined ?
                        <Skeleton variant="text" sx={{ fontSize: '1rem', minWidth: 100 }} />
                        :
                        dataProvider()}
                </Stack>
            </Paper>
        </Grid>
    )
}

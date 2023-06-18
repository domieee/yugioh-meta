'use client'

import React from 'react'

import {
    Box,
    Grid,
    Tooltip,
    IconButton,
    Typography,
    Paper
} from '@mui/material'


import { IconContext } from "react-icons"

export default function TournamentDetailsItem({ icon, iconType, data, tooltipTitle }) {
    return (
        <Grid
            item

            xs={6}
        >
            <Paper
                sx={{
                    width: '100%',
                    backgroundColor: '#1F0F26',
                    borderRadius: 2,
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                <Box sx={{
                    width: '20px',

                    display: 'flex',
                    alignItems: 'center',
                    placeItems: 'center'
                }}>
                    {iconType === 'winner' ?
                        <IconContext.Provider value={{ color: "#FFD700" }}>
                            <Tooltip title={tooltipTitle}>
                                <IconButton sx={{
                                    width: '35px',
                                    height: '35px',
                                    cursor: 'help',
                                    marginInline: 'auto'
                                }}>
                                    {icon && icon}
                                </IconButton>
                            </Tooltip>
                        </IconContext.Provider> :
                        <Tooltip title={tooltipTitle}>
                            <IconButton sx={{
                                width: '35px',
                                height: '35px',
                                cursor: 'help',
                                marginInline: 'auto'
                            }}>
                                {icon && icon}
                            </IconButton>
                        </Tooltip>}

                </Box>

                <Typography variant='body1'>{data}</Typography>
            </Paper>
        </Grid>
    )
}

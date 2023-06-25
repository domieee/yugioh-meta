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
    Skeleton
} from '@mui/material'


import { IconContext } from "react-icons"

export default function TournamentDetailsItem({ icon, iconType, data, tooltipTitle }) {
    return (
        <Grid
            item
            width='100%'
            xs={12}
            sm={6}

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
                    alignItems: 'center',
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

                <Box>
                    <Typography sx={{

                    }}
                        variant='overline'>{tooltipTitle}</Typography>
                    {data === undefined ?
                        <Skeleton sx={{ height: '25px' }} />
                        :
                        <Typography variant='body1'>{data}</Typography>}

                </Box>
            </Paper>
        </Grid>
    )
}

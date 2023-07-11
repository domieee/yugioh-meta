import { Grid, Paper, Box, Typography, Divider, Skeleton } from '@mui/material'
import React from 'react'

export default function StatisticDetailsItem({ data, icon, itemTitle }) {
    console.log("🚀 ~ file: StatisticDetailsItem.jsx:5 ~ StatisticDetailsItem ~ data:", data)
    return (
        <>
            <Grid
                sx={{
                    width: '100%'
                }}

                xs={12}
                sm={6}
                md={4}
                item>
                <Paper
                    elevation={1}
                    sx={{
                        bgcolor: '#191919'
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}>
                        <Box
                            sx={{
                                width: '20px',
                                marginInline: " 25px",
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                boxShadow: '0'
                            }}>
                            {icon}
                        </Box>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                marginRight: '25px'
                            }}
                        />
                        <Box>
                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,0.6)'
                                }} variant='overline'>{itemTitle}</Typography>
                            {data === undefined ? <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.25rem', width: 100 }} /> : <Typography>{data.name}</Typography>}

                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,0.6)'
                                }} variant='overline'>Count</Typography>
                            {data === undefined ? <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.25rem', width: 100 }} /> : <Typography>{data.count}</Typography>}
                            <Typography
                                sx={{
                                    color: 'rgba(255,255,255,0.6)'
                                }} variant='overline'>Percentage</Typography>
                            {data === undefined ? <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.25rem', width: 100 }} /> : <Typography>{data.percentage}%</Typography>}
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}

'use client'

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TournamentListItem from './TournamentListItem';

export default function TournamentList() {
    const [tournaments, setTournaments] = useState([])

    console.log(tournaments)

    useEffect(() => {
        const fetchPieData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
            const json = await response.json()
            console.log(json)
            setTournaments(json)
        }
        fetchPieData()
    }, [])

    return (
        <Box
            bgcolor="background.paper"
            backgroundColor='#212121'
            gap={2}
            marginBottom={2}
            display="flex"
            justifyContent="center"
            flexWrap='wrap'
            alignItems="center"
            height='100%'
            minHeight='100%'
            p={5}
        >
            <Box
                bgcolor="background.paper"
                backgroundColor='#272727'
                display="flex"
                flexDirection="column"
                justifyContent='center'
                p={1}
                borderRadius={4}
                marginBottom={2}
                maxWidth={700}
                boxShadow='2px 2px 10px rgba(0, 0, 0, 0.2)'
                sx={{
                    minWidth: {
                        xs: '380px',
                        sm: '380px',
                        md: '380px',
                        lg: '1280px'
                    }
                }}>
                <Box sx={{
                    display: 'flex',
                    height: '50px',
                    alignItems: 'start',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'start',
                        lg: 'space-between'
                    }
                }}>
                    <Typography
                        variant="h6"
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'center',
                                lg: 'center'
                            },
                            paddingInline: {
                                xs: '0px',
                                sm: '0px',
                                md: '100px'
                            }
                        }}>
                        National Tournaments
                    </Typography>
                </Box>
                <Grid
                    justifyContent='space-between'
                    paddingInline='100px'
                    flexWrap='wrap'
                    container

                    spacing={3}>
                    {tournaments.map((tournament, index) => {
                        return <TournamentListItem key={index} data={tournament} />
                    })}
                </Grid>
            </Box>
        </Box >
    )
}

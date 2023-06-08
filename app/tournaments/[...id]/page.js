'use client'

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function TournamentOverview({ params }) {

    const [tournament, setTournament] = useState()

    useEffect(() => {
        const fetchTournamentOverview = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tournament-overview`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: params.id
                    })
                });
                const json = await response.json()
                setTournament(json)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTournamentOverview()
    }, [])

    useEffect(() => {
        const fetchTournamentBreakdown = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tournament-breakdown`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: params.id
                    })
                })
                const json = await response.json()
                console.log(json)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTournamentBreakdown()
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
            p={5}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent='center'
                bgcolor="background.paper"
                backgroundColor='#272727'
                p={1}
                borderRadius={2}
                elevation={3}
                marginBottom={2}
                maxWidth={700}
                marginInline='auto'
                boxShadow='2px 2px 4px rgba(0, 0, 0, 0.2)'
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
                        variant="h5"
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
                        Tournament Overview
                    </Typography>
                </Box>
                <Box paddingLeft='100px'>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                        }}>
                        <Box
                            sx={{
                                minWidth: '100px',
                                marginRight: '20px'
                            }}>
                            <Typography variant='body2'>Location </Typography>
                        </Box>

                        <Typography variant='body2'>{tournament?.location}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                        }}>
                        <Box
                            sx={{
                                minWidth: '100px',
                                marginRight: '20px'
                            }}>
                            <Typography variant='body2'>Date </Typography>
                        </Box>
                        <Typography variant='body2'>{tournament?.date}</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                    }}>
                        <Box sx={{
                            minWidth: '100px',
                            marginRight: '20px'
                        }}>
                            <Typography variant='body2'>Participants</Typography>
                        </Box>
                        <Typography variant='body2'>{tournament?.totalParticipants}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

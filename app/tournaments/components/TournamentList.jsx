'use client'

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
                display="flex"
                flexDirection="column"
                justifyContent='center'
                p={1}
                borderRadius={4}
                marginBottom={2}
                maxWidth={700}
                sx={{
                    minWidth: {
                        xs: '380px',
                        sm: '380px',
                        md: '380px',
                        lg: '1280px'
                    }
                }}>
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

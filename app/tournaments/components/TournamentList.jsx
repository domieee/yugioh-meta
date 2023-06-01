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
            display="flex"
            flexDirection="column"
            justifyContent='center'
            p={5}
            borderRadius={4}
            boxShadow={8}
        >
            <Grid
                container
                spacing={1}>
                {tournaments.map((tournament, index) => {
                    return <TournamentListItem key={index} data={tournament} />
                })}
            </Grid>
        </Box >
    )
}

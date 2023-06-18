'use client'

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import TournamentListItem from './TournamentListItem';
import Skeleton from '@mui/material/Skeleton';

export default function TournamentList() {
    const [tournaments, setTournaments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(tournaments)

    useEffect(() => {
        const fetchPieData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
            const json = await response.json()
            console.log(json)
            setTournaments(json)
            setIsLoading(false)
        }
        fetchPieData()
    }, [])

    return (

        <>

            <Grid
                justifyContent='space-between'
                paddingInline='100px'
                paddingBottom='25px'
                container

                spacing={3}>
                {/* Render skeletons if isLoading is true */}
                {isLoading ? (
                    Array.from({ length: 20 }, (_, index) => (
                        <Grid item xs={6} md={6} key={index}>
                            <Skeleton animation='wave' variant="rect" height={75} borderRadius={1} />
                        </Grid>
                    ))

                ) : (
                    // Render tournament list if data is loaded
                    tournaments.map((tournament, index) => (
                        <TournamentListItem key={index} data={tournament} />
                    ))
                )}
            </Grid>

        </>
    )
}

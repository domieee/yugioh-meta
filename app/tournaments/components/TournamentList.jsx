'use client'

import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import TournamentListItem from './TournamentListItem';
import Skeleton from '@mui/material/Skeleton';
import { updateProgress } from '@/app/interfaceStore';

export default function TournamentList() {
    const [tournaments, setTournaments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPieData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
            const json = await response.json()
            console.log(json)
            setTournaments(json)
            setIsLoading(false)
            updateProgress(100)
            setTimeout(() => updateProgress(0), 500)
        }
        fetchPieData()
    }, [])

    return (
        <>
            <Grid
                justifyContent='flex-start'
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

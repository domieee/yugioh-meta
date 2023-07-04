'use client '

import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { GiTrophy, GiTabletopPlayers } from "react-icons/gi";
import { IconContext } from "react-icons"

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { updateProgress } from '@/app/interfaceStore';

export default function TournamentListItem({ data }) {
    console.log("🚀 ~ file: TournamentListItem.jsx:18 ~ TournamentListItem ~ data:", data)

    const router = useRouter()

    const openTournament = () => {
        updateProgress(25)
        router.push(`/tournaments/${data._id}`)
    }

    return (
        <Grid
            item
            xs={6}
            md={6}  >
            <Card
                elevation={1}
                sx={{
                    backgroundColor: '#212121',
                    boxShadow: '0',
                    transition: 'all 0.1s linear',
                    '&:hover': {
                        backgroundColor: '#272727',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                    }
                }}   >
                <CardActionArea onClick={() => openTournament()}>
                    <CardContent >
                        <Box
                            height={25}
                            display='flex'
                            justifyContent='space-between'>
                            <IconContext.Provider value={{ color: "#FFD700" }}>
                                <Typography variant='body2'><GiTrophy style={{ marginRight: '7.5px' }} />{`${data.players[0][0].name} with ${data.players[0][0].deck}`}</Typography>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#ffffff" }}>
                                <Typography variant='body2'><GiTabletopPlayers style={{ marginRight: '7.5px' }} />{data.totalParticipants}</Typography>
                            </IconContext.Provider>
                        </Box>
                        <Box
                            display='flex'
                            justifyContent='space-between'>
                            <Typography
                                variant='caption'>{data.location}</Typography>
                            <Typography
                                variant='caption'>{data.date}</Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid >

    )
}

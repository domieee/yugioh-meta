import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { GiTrophy, GiTabletopPlayers } from "react-icons/gi";
import { IconContext } from "react-icons"
import Paper from '@mui/material';
export default function TournamentListItem({ data }) {

    console.log(data, 'data')

    return (

        <Grid item xs={6} md={6} boxShadow='2px 2px 10px rgba(0, 0, 0, 0.0)' >
            <Card backgroundColor='white' elevation={3}  >
                <CardActionArea onClick={() => console.log('first')}>
                    <CardContent>

                        <Box
                            height={25}
                            display='flex'

                            justifyContent='space-between'>
                            <IconContext.Provider value={{ color: "#FFD700" }}>
                                <Typography variant='body2'><GiTrophy style={{ marginRight: '7.5px' }} />{`${data.player[0].name} with ${data.player[0].deck}`}</Typography>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#ffffff" }}>
                                <Typography variant='body2'><GiTabletopPlayers style={{ marginRight: '7.5px' }} />{data.totalParticipants}</Typography>
                            </IconContext.Provider>
                        </Box>


                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid >

    )
}
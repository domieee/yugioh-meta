import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function TournamentListItem({ data }) {
    return (

        <Grid width='100%' height='100px'>
            <Card>
                <CardActionArea onClick={() => console.log('first')}>
                    <CardContent>
                        <Typography>{`${data.player[0].name} with ${data.player[0].deck}`}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    )
}

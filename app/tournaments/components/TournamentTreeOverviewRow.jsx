'use client'

import React from 'react'

import { Grid, Paper } from '@mui/material'
import TournamentTreeOverviewItem from './TournamentTreeOverviewItem'


export default function TournamentTreeOverviewRow({ data }) {
    return (

        <Grid
            container
            alignItems='center'
            justifyContent='center'
            direction='row'
            marginBlock='10px'
            spacing={2}>
            {data?.map((item, index) => (<TournamentTreeOverviewItem key={index} data={data} />))}
        </Grid>

    )
}

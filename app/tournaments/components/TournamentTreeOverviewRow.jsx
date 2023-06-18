'use client'

import React from 'react'

import { Stack } from '@mui/material'
import TournamentTreeOverviewItem from './TournamentTreeOverviewItem'

export default function TournamentTreeOverviewRow({ data }) {
    return (
        <Stack
            spacing={2}>
            {data?.map((item, index) => (<TournamentTreeOverviewItem key={index} data={data} />))}
        </Stack>
    )
}

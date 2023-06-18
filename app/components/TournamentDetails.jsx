'use client'

import { Box, Grid } from '@mui/material'
import { Children } from 'react'

export default function TournamentDetails({ children }) {
    return (
        <Grid
            container
            justifyContent="space-between"
            spacing={2}
            sx={{
                'width': '100%',
            }}>
            {Children.map(children, (child) => (
                child
            ))}
        </Grid>
    )
}

'use client'

import { Box, Grid } from '@mui/material'
import { Children } from 'react'

export default function TournamentDetails({ children }) {
    return (
        <Grid
            container
            width='100%'
            spacing={3}
            alignItems='start'
            justifyContent='start'
            sx={{
                marginBlock: '5px',
                flexDirection: {
                    xs: 'row', // phone
                    sm: 'row', // tablets
                    md: 'row', // small laptop
                    lg: 'row',
                }
            }}>
            {Children.map(children, (child) => (
                child
            ))}
        </Grid>
    )
}

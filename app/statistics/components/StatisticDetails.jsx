import { Grid } from '@mui/material'
import React from 'react'
import { Children } from 'react'

export default function StatisticDetails({ children }) {
    return (
        <Grid
            sx={{
                marginBlock: 2,
                justifyContent: 'center'
            }}
            wrap='wrap'
            spacing={2}
            container>
            {Children.map(children, (child) => (
                child
            ))}
        </Grid>

    )
}

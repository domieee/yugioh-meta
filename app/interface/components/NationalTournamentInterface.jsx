import React from 'react'

import {
    TextField,
    Typography
} from '@mui/material'

export default function NationalTournamentInterface() {
    return (
        <>
            <Typography variant="overline" display="block" >
                E-Mail
            </Typography>
            <TextField
                id="email"
                name="email"
                placeholder="johndoe@mail.com"
                variant="outlined"
                size="small"></TextField>
        </>
    )
}

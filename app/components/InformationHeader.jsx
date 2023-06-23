import React from 'react'
import { Children } from 'react'
import { GiInfo } from 'react-icons/gi'
import { Box, Typography } from '@mui/material'

export default function InformationHeader({ informationTitle }) {
    return (
        <Box>
            <GiInfo />
            <Typography>{informationTitle}</Typography>
        </Box>
    )
}

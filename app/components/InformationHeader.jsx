import React from 'react'
import { Children } from 'react'
import { GiInfo } from 'react-icons/gi'
import { Box, Typography } from '@mui/material'

export default function InformationHeader({ informationTitle }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px',
                width: '100%'
            }}>
            <GiInfo style={{ marginRight: '5px', color: 'rgba(255, 255, 255, 0.6)' }} />
            <Typography
                sx={{

                    color: 'rgba(255, 255, 255, 0.6)',
                }}
                variant='body2'>{informationTitle}</Typography>
        </Box>
    )
}

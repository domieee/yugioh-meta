import React from 'react'
import { Children } from 'react'
import { GiInfo } from 'react-icons/gi'
import { Box, Typography } from '@mui/material'

export default function InformationHeader({ informationTitle }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: {
                    xs: 'center',
                    sm: 'center',
                    md: 'center'
                },
                marginBottom: '5px',
                width: '100%',
                width: 'fit-content',
                paddingBottom: '4px',
                marginRight: 'auto',
                fontSize: 'min(14px, 4vw)'
            }}>
            <GiInfo style={{ width: '20px', marginRight: '5px', color: 'rgba(255, 255, 255, 0.6)' }} />
            <Typography
                sx={{
                    alignSelf: 'flex-start',
                    color: 'rgba(255, 255, 255, 0.6)',
                }}
                variant='body2'>{informationTitle}</Typography>
        </Box >
    )
}

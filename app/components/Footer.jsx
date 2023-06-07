'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <Box sx={{
                width: '100%',
                backgroundColor: '#212121'
            }}>
                <Box
                    sx={{
                        paddingInline: '125px',
                        paddingBlock: '25px',
                        marginInline: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        maxWidth: '1280px'
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '250px'
                        }}>
                        <p>Footer</p>
                        <a href="https://www.buymeacoffee.com/domiedev">Buy me a coffee!</a>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '250px'
                        }}>
                        <p>Footer</p>
                        <a href="https://www.buymeacoffee.com/domiedev">Buy me a coffee!</a>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '250px'
                        }}>
                        <Typography
                            variant='caption'
                            marginBottom={2.5}
                        >We are constantly working on improving this website. Do you have any suggestions for improvement, or would you like to support the project? Follow the links below.</Typography>
                        <a href="https://www.buymeacoffee.com/domiedev">
                            <Image
                                src='/bmc-button.png'
                                alt='Buy me a Coffee Button'
                                width={130}
                                height={35} />
                        </a>
                    </Box>

                </Box>
            </Box>

        </>
    )
}

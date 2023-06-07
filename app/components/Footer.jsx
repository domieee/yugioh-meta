'use client'

import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    paddingInline: '200px',
                    backgroundColor: '#212121',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
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
                    <p>We are constantly working on improving this website. Do you have any suggestions for improvement, or would you like to support the project? Follow the links below.</p>
                    <Image
                        src='/../assets/img/bmc-button.png'
                        alt='Buy me a Coffee Button'
                        width={100}
                        height={50} />
                    <a href="https://www.buymeacoffee.com/domiedev">Buy me a coffee!</a>
                </Box>

            </Box>
        </>
    )
}

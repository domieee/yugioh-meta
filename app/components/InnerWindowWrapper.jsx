'use client'

import { Children } from "react"
import { Box, Paper } from "@mui/material"
import InnerWindowWrapperHeader from "./InnerWindowWrapperHeader"

export default function InnerWindowWrapper({
    children,
    currentRoute,
    pagetitle,
    menuOptions
}) {
    return (
        <Paper
            sx={{
                bgcolor: 'rgba(0,0,0,0)'
            }}
            elevation={0}
            boxShadow={0}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent='start'
                alignItems='center'
                boxSizing='border-box'
                maxWidth={700}
                marginInline='auto'
                boxShadow='0'
                sx={{
                    border: {
                        xs: '0',

                    },
                    minWidth: {
                        xs: '350px',
                        sm: '720px',
                        md: '1080px',
                        lg: '1280px'
                    },
                    paddingInline: {
                        xs: '5px',
                        sm: '50px',
                        md: '100px',
                        lg: '100px'
                    },
                    paddingBottom: '20px',
                    backgroundColor: 'transparent',
                }}
            >

                <InnerWindowWrapperHeader
                    currentRoute={currentRoute}
                    menuOptions={menuOptions}
                    pagetitle={pagetitle} />


                {Children.map(children, (child) => (
                    child
                ))}

            </Box>
        </Paper >
    )
}

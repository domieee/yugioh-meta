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
        <Paper>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent='start'
                alignItems='center'
                p={1}
                border='1px solid #3a3a3a'
                maxWidth={700}
                marginInline='auto'
                boxShadow='0'
                sx={{
                    minWidth: {
                        xs: '360px',
                        sm: '720px',
                        md: '1080px',
                        lg: '1280px'
                    },
                    paddingInline: {
                        xs: '20px',
                        sm: '50px',
                        md: '100px',
                        lg: '100px'
                    },
                    paddingBottom: '40px'
                }}
            >
                <InnerWindowWrapperHeader
                    currentRoute={currentRoute}
                    menuOptions={menuOptions}
                    pagetitle={pagetitle}>

                </InnerWindowWrapperHeader>
                {Children.map(children, (child) => (
                    child
                ))}
            </Box>
        </Paper>
    )
}

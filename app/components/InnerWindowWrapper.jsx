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
                boxSizing='border-box'
                maxWidth={700}
                marginInline='auto'
                boxShadow='0'
                sx={{
                    border: {
                        xs: '0',
                        sm: '1px solid #3a3a3a'
                    },
                    minWidth: {
                        xs: '350px',
                        sm: '720px',
                        md: '1080px',
                        lg: '1280px'
                    },
                    paddingInline: {
                        xs: '2px',
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

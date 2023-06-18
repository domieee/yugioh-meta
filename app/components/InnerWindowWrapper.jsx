'use client'

import { Children } from "react"
import { Box } from "@mui/material"
import InnerWindowWrapperHeader from "./InnerWindowWrapperHeader"

export default function InnerWindowWrapper({
    children,
    currentRoute,
    pagetitle,
    menuOptions
}) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent='center'
            alignItems='center'
            bgcolor="background.paper"
            backgroundColor='#1F0F26'
            p={1}
            borderRadius={2}
            elevation={3}
            marginBottom={2}
            maxWidth={700}
            marginInline='auto'
            boxShadow='2px 2px 4px rgba(0, 0, 0, 0.2)'
            sx={{
                minWidth: {
                    xs: '380px',
                    sm: '720px',
                    md: '1080px',
                    lg: '1280px'
                },
                paddingInline: {
                    xs: '50px',
                    sm: '50px',
                    md: '100px',
                    lg: '100px'
                }
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
    )
}

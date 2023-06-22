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
            backgroundColor='#232423'
            p={1}
            marginBottom={2}
            maxWidth={700}
            marginInline='auto'
            boxShadow='0'
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
    )
}

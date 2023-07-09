'use client'

import { Children } from "react"
import {
    Box,
    Paper
} from "@mui/material"


export default function OuterWindowWrapper({ children }) {
    return (
        <Paper elevation={0}>
            <Box
                display="flex"
                flexWrap='wrap'
                alignItems="center"
                height='100%'
                minHeight='100%'

                sx={{
                    flexDirection: {
                        // small phone
                        xs: 'column', // phone
                        sm: 'column', // tablets
                        md: 'column', // small laptop
                        xl: 'column'
                    },
                    padding: {
                        xs: '0px', // phone
                        sm: '25px', // tablets
                        md: '25px', // small laptop
                        xl: '25px'
                    },
                    minHeight: '100vh'
                }
                }
            >
                {
                    Children.map(children, (child) => (
                        child
                    ))
                }
            </Box >
        </Paper>
    )
}

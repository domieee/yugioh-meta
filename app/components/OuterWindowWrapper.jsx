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
                    bgcolor: '#191919',
                    flexDirection: {
                        // small phone
                        xs: 'column', // phone
                        sm: 'column', // tablets
                        md: 'column', // small laptop
                        xl: 'column'
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

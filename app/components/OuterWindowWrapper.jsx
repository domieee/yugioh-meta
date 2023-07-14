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
                    background: 'rgb(23,23,23)',
                    background: 'linear-gradient(144deg, rgba(23,23,23,1) 0%, rgba(38,38,38,1) 85%, rgba(41,41,41,1) 100%)',
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

'use client'

import { Children } from "react"
import {
    Box
} from "@mui/material"


export default function OuterWindowWrapper({ children }) {
    return (
        <Box
            bgcolor="background.paper"
            display="flex"
            justifyContent="center"
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
                }
            }
            }
        >
            {
                Children.map(children, (child) => (
                    child
                ))
            }
        </Box >
    )
}

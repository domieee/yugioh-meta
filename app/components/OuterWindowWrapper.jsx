import { Children } from "react"
import {
    Box
} from "@mui/material"


export default function OuterWindowWrapper({ children }) {
    return (
        <Box
            bgcolor="background.paper"
            backgroundColor='#212121'
            display="flex"
            justifyContent="center"
            flexWrap='wrap'
            alignItems="start"
            height='100%'
            minHeight='100%'

            sx={{
                flexDirection: {
                    // small phone
                    xs: 'column', // phone
                    sm: 'column', // tablets
                    md: 'column', // small laptop
                    xl: 'row'
                },
                padding: {
                    xs: '0px', // phone
                    sm: '40px', // tablets
                    md: '40px', // small laptop
                    xl: '40px'
                }
            }}
        >
            {Children.map(children, (child) => (
                child
            ))}
        </Box>
    )
}

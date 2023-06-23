import { Box, Typography } from "@mui/material";
import { Children } from "react";




export default function SecondaryWindowHeader({ children, sectionTitle }) {
    return (
        <Box sx={{
            component: 'section',
            width: '100%',
            marginTop: '15px'
        }}>
            <Typography
                variant="h6">
                {sectionTitle}
            </Typography>
        </Box >
    )
}

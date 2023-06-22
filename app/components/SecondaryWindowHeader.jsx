import { Box, Typography } from "@mui/material";
import { Children } from "react";




export default function SecondaryWindowHeader({ children, sectionTitle }) {
    return (
        <Box sx={{
            width: '100%',
            marginBlock: '25px 15px',
            marginLeft: '25px'
        }}>
            <Typography
                variant="h6">
                {sectionTitle}
            </Typography>
        </Box>
    )
}

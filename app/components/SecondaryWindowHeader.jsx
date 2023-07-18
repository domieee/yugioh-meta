import { Box, Typography } from "@mui/material";
import { Children } from "react";
import { GiInfo } from 'react-icons/gi'




export default function SecondaryWindowHeader({ children, sectionTitle, informationTitle }) {
    return (
        <Box sx={{
            component: 'section',
            width: '100%',
            borderBottom: '1px solid #3a3a3a',


        }}>
            <Box>
                <Typography
                    variant="h6"
                    sx={{

                    }}>
                    {sectionTitle}
                </Typography>
            </Box>
            {informationTitle?.length > 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: {
                            xs: 'start',
                            sm: 'start',
                            md: 'center'
                        },
                        width: '100%',
                        width: 'fit-content',

                        marginRight: 'auto',
                        fontSize: 'min(14px, 4vw)'
                    }}>
                    <GiInfo style={{ width: '20px', marginRight: '5px', marginTop: '3px', color: 'rgba(255, 255, 255, 0.6)' }} />
                    <Typography
                        sx={{
                            color: 'rgba(255, 255, 255, 0.6)'
                        }}
                        variant='body1'>{informationTitle}</Typography>
                </Box >)
                : null}
        </Box >
    )
}

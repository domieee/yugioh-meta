'use client'

import {
    TextField,
    Box,
    Typography,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import {
    useState
} from 'react'
import NationalTournamentInterface from './components/NationalTournamentInterface';

export default function Interface() {

    const [alignment, setAlignment] = useState('national');

    const handleChange = (event, newAlignment) => {
        if (alignment === newAlignment) {
            event.preventDefault()
            return
        }
        setAlignment(newAlignment);
    }

    return (
        <Box
            bgcolor="background.paper"
            backgroundColor='#212121'
            gap={2}
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
                    xl: '40px 100px'
                }
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent='center'
                bgcolor="background.paper"
                backgroundColor='#272727'
                p={1}
                borderRadius={1}
                elevation={3}
                marginBottom={2}
                maxWidth={700}
                marginInline='auto'
                boxShadow='2px 2px 4px rgba(0, 0, 0, 0.2)'
                sx={{
                    minWidth: {
                        xs: '380px',
                        sm: '380px',
                        md: '380px',
                        lg: '1280px'
                    }
                }}
            >

                <Box sx={{
                    display: 'flex',
                    height: '50px',
                    alignItems: 'start',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'start',
                        lg: 'space-around'
                    }
                }}>

                    <Typography
                        variant="h5"
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'center',
                                lg: 'center'
                            },
                            paddingInline: {
                                xs: '0px',
                                sm: '0px',
                                md: '100px'
                            }
                        }}>
                        Create a {alignment === 'national' ? 'national' : 'regional'} tournament
                    </Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        marginInline='auto'
                        sx={{ marginInline: 'auto' }}>
                        <ToggleButton
                            size='small'
                            value="national">
                            National
                        </ToggleButton>
                        <ToggleButton
                            size='small'
                            value="regional">
                            Regional
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        justifyContent: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'center'
                        },
                        paddingInline: {
                            xs: '0px',
                            sm: '0px',
                            md: '100px'
                        }
                    }}>
                    Tournament Informations
                </Typography>

                {alignment === 'national' ? <NationalTournamentInterface /> : null}
            </Box>
        </Box>
    )
}
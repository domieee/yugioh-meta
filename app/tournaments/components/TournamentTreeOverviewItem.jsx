import React from 'react'


import {
    GiStabbedNote,
    GiBroadsword,
    GiTrophy,
    GiFamilyTree
} from "react-icons/gi";

import { HiExternalLink } from "react-icons/hi";

import { IconContext } from 'react-icons'

import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography,
    Modal,
    TextField,
    Button
} from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
};


export default function TournamentTreeOverviewItem({ data }) {
    console.log(data)
    return (
        <>
            <Card
                sx={{
                    width: 225,
                    '&:hover': {
                        cursor: 'crosshair',
                        backgroundColor: '#272727',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                    }
                }}>
                <CardActionArea >
                    <CardContent>
                        <Stack
                            spacing={0.75}
                            alignItems='center'
                            justifyContent='space-between'
                            direction='row'>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                {
                                    data[0].place === 'first' ?
                                        <IconContext.Provider value={{ color: "#FFD700" }}>
                                            <GiTrophy style={{ width: '20px' }} />
                                        </IconContext.Provider> :
                                        <GiFamilyTree style={{ width: '20px' }} />
                                }

                                <Typography
                                    marginLeft={0.75}
                                    variant='overline'>
                                    {data[0].place}
                                </Typography>
                            </Box>

                            {data[0].deckLink === '' ?
                                <IconContext.Provider value={{ color: "#2f2f2f" }}>
                                    <HiExternalLink style={{ width: '20px' }} />
                                </IconContext.Provider> :
                                <IconContext.Provider value={{ color: "#ffffff" }}>
                                    <HiExternalLink style={{ width: '20px' }} />
                                </IconContext.Provider>
                            }

                        </Stack>

                        <Stack
                            spacing={0.75}
                            alignItems='center'
                            direction='row'>
                            <GiBroadsword style={{ width: '20px' }} />


                            {data[0].name === '' ?
                                <Typography
                                    sx={{
                                        fontStyle: 'italic',
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        maxWidth: "100%",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        flex: '1'
                                    }}
                                    variant='body2'
                                >
                                    No player information provided
                                </Typography> :
                                <Typography
                                    variant='body2'>
                                    {data[0].name}
                                </Typography>
                            }
                            {data[0].name === '' ||
                                data[0].deckNote === '' ?
                                '' :
                                <Typography
                                    sx={{
                                        maxWidth: "100%",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        flex: '1'
                                    }}
                                    variant='body2'
                                >
                                    with {data[0].deck}
                                </Typography>
                            }

                        </Stack>


                        <Stack
                            justifyContent='space-between'
                            alignItems='center'
                            direction='row'>
                            <Box
                                width='100%'
                                sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                <GiStabbedNote style={{ width: '20px' }} />
                                {data[0].deckNote === '' ?
                                    <Typography
                                        marginLeft={0.75}
                                        sx={{
                                            fontStyle: 'italic',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            maxWidth: "100%",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flex: '1'
                                        }}
                                        variant='body2'
                                    >
                                        No deck note provided
                                    </Typography> :
                                    <Typography
                                        marginLeft={0.75}
                                        sx={{
                                            color: 'rgba(255, 255, 255, 1)',
                                            maxWidth: "100%",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            flex: '1'
                                        }}
                                        variant='body2'>
                                        {data[0].deckNote}
                                    </Typography>
                                }
                            </Box>

                        </Stack>

                    </CardContent>
                </CardActionArea>
            </Card >
        </>
    )
}

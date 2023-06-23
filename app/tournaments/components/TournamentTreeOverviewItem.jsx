import React, { useState, useEffect } from 'react'


import {
    GiStabbedNote,
    GiBroadsword,
    GiTrophy,
    GiFamilyTree
} from "react-icons/gi";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRedirect = () => {
        const newWindow = window.open(data[0].deckLink, '_blank');
        if (newWindow) {
            newWindow.focus();
        }
        setOpen(false);
    }

    let place = data[0].place;

    let link = data[0].deckLink;
    let [linkAvailable, setLinkAvailable] = useState()

    useEffect(() => {
        if (link.length > 0) {
            setLinkAvailable(false)
        } else {
            setLinkAvailable(true)
        }
    }, [])


    if (place.includes('top')) {
        place = place.replace('top', 'top ');
    }
    return (
        <>
            <Card
                elevation={2}
                sx={{
                    backgroundColor: '#232423',
                    width: 225,
                    '&:hover': {
                        backgroundColor: '#272727',
                        boxShadow: '0'
                    }
                }}>
                <CardActionArea disabled={linkAvailable} onClick={() => handleClickOpen()}>
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
                                    {place}
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
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Redirect to external link?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are about to be redirected from Yu-Gi-Oh! Meta to an external link:
                    </DialogContentText>
                    <DialogContentText
                        sx={{
                            mt: '10px',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}
                        id="alert-dialog-description">
                        {data[0].deckLink}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleRedirect} >
                        Open
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

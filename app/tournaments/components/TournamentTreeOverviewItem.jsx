import React, { useState, useEffect } from 'react'


import {
    GiStabbedNote,
    GiStack,
    GiTrophy,
    GiFamilyTree,
    GiPerson,
    GiTabletopPlayers
} from "react-icons/gi";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Skeleton from '@mui/material/Skeleton';

import { HiExternalLink } from "react-icons/hi";

import { IconContext } from 'react-icons'

import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Stack,
    Typography,
    Modal,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    Paper,
    Tooltip
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



export default function TournamentTreeOverviewItem({ data, borderColor }) {
    console.log("🚀 ~ file: TournamentTreeOverviewItem.jsx:58 ~ TournamentTreeOverviewItem ~ data:", data)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRedirect = () => {
        const newWindow = window.open(data.deckLink, '_blank');
        if (newWindow) {
            newWindow.focus();
        }
        setOpen(false);
    }

    let place = data.place;

    let link = data.deckLink;
    let [linkAvailable, setLinkAvailable] = useState()

    useEffect(() => {
        if (link.length > 0) {
            setLinkAvailable(false)
        } else {
            setLinkAvailable(true)
        }
    }, [])

    return (
        <>

            <Grid
                item
                xs={11}>
                <Tooltip
                    placement='top'
                    title={data?.deckLink.length === 0 ? 'No deck link provided' : data.deckLink}>
                    <Card
                        elevation={data?.deckLink.length === 0 ? 0 : 1}
                        sx={{
                            marginBlock: '5px',
                            bgcolor: 'rgba(0,0,0,0)',
                            borderLeft: `1px solid ${borderColor}`,
                            marginTop: '16px',
                            position: 'relative',
                            zIndex: 2,
                            '&:hover': {
                                cursor: data?.deckLink.length === 0 ? 'not-allowed' : 'pointer',
                            }
                        }} >
                        <CardActionArea
                            sx={{
                                width: '100%',
                                m: 0,
                                p: 0
                            }}
                            onClick={handleClickOpen}
                            disabled={data?.deckLink.length === 0 ? true : false}>
                            <ListItem
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%'
                                }}>
                                <Stack
                                    sx={{
                                        width: '100%',
                                    }}
                                    spacing={0.75}>

                                    <Stack
                                        sx={{
                                            width: '100%',
                                        }}
                                        spacing={0.75}
                                        alignItems='center'
                                        justifyContent='space-between'
                                        direction='row'>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: "flex",
                                                alignItems: "center"
                                            }}>

                                            <Stack
                                                sx={{
                                                    width: '100%',
                                                }}
                                                spacing={0.75}
                                                alignItems='center'
                                                direction='row'>
                                                <GiPerson style={{ width: '20px' }} />


                                                {data.name === '' ?
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
                                                        No player name provided
                                                    </Typography> :
                                                    <Typography
                                                        variant='body2'>
                                                        {data.name}
                                                    </Typography>
                                                }
                                            </Stack>
                                        </Box>

                                        {data.deckLink === '' ?
                                            <IconContext.Provider value={{ color: "#2f2f2f" }}>
                                                <HiExternalLink style={{ width: '20px' }} />
                                            </IconContext.Provider> :
                                            <IconContext.Provider value={{ color: "#ffffff" }}>
                                                <HiExternalLink style={{ width: '20px' }} />
                                            </IconContext.Provider>
                                        }

                                    </Stack>

                                    <Stack
                                        sx={{
                                            width: '100%',
                                        }}
                                        spacing={0.75}
                                        alignItems='center'
                                        direction='row'>
                                        <GiStack style={{ width: '20px' }} />


                                        {data.deck === '' ?
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
                                                No deck information provided
                                            </Typography> :
                                            <Typography
                                                variant='body2'>
                                                {data.deck}
                                            </Typography>
                                        }


                                    </Stack>


                                    <Stack
                                        sx={{
                                            width: '100%',
                                        }}
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
                                            {data.deckNote === '' ?
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
                                                    {data.deckNote}
                                                </Typography>
                                            }
                                        </Box>
                                    </Stack>
                                </Stack>
                            </ListItem>
                        </CardActionArea>
                    </Card>
                </Tooltip >
            </Grid >

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Paper
                    className='paper-container'
                    sx={{
                        bgcolor: '#191919'
                    }}>
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
                            {data.deckLink}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size='small'
                            onClick={handleClose}>
                            Decline
                        </Button>
                        <Button
                            size='small'
                            variant='outlined'
                            onClick={handleRedirect}
                            autoFocus>
                            Open Link
                        </Button>
                    </DialogActions>
                </Paper>
            </Dialog>
        </>
    )
}

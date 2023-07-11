'use client'

import {
    useState
} from 'react'


import { useTournamentStore } from '../tournamentStore';

import {
    GiStabbedNote,
    GiStack,
    GiTrophy,
    GiFamilyTree,
    GiPerson
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

export default function TournamentTreeItem({ item, data, borderColor, index, lastItem, interfaceIndex, title, variableName }) {

    const [open, setOpen] = useState({ state: false, key: `${variableName}[${interfaceIndex}]` });

    const handleOpen = (key) => {
        setOpen({ state: true, key: data.key })
    };
    const handleClose = () => setOpen({ state: false, key: '' });
    let tournamentStore = useTournamentStore(state => state)
    const [validLink, setValidLink] = useState(false)

    function isValidLink(link) {
        if (link.length === 0) return true;
        const linkRegex = /^https:\/\/www\.[^\s\/$.?#]+\.[^\s\/$.?#]+$/;
        return linkRegex.test(link);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        tournamentStore.updateField(variableName, interfaceIndex, name, value);
    };

    return (
        <>
            <Card
                elevation={1}
                sx={{
                    borderLeft: `1px solid ${borderColor}`,
                    bgColor: '#191919',
                    width: '100&',
                    ...(index + 1 !== lastItem && { marginBottom: '20px' }),
                }}>
                <CardActionArea onClick={() => handleOpen()}>
                    <CardContent sx={{ paddingLeft: '20px', }}>
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

                                <GiPerson style={{ width: '20px' }} />

                                {tournamentStore[variableName][interfaceIndex]?.name.length === 0 ?
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
                                        variant='body2'>
                                        No player name provided
                                    </Typography> :
                                    <Typography
                                        marginLeft={0.75}
                                        variant='body2'>
                                        {tournamentStore[variableName][interfaceIndex]?.name}
                                    </Typography>}

                            </Box>

                            {tournamentStore[variableName][interfaceIndex]?.deckLink.length === 0 ?
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

                            <GiStack style={{ width: '20px' }} />

                            {tournamentStore[variableName][interfaceIndex]?.deck.length === 0 ?
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
                                    variant='body2'>
                                    No deck information provided
                                </Typography> :
                                <Typography
                                    variant='body2'>
                                    {tournamentStore[variableName][interfaceIndex]?.deck}
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

                                {tournamentStore[variableName][interfaceIndex]?.deckNote.length === 0 ?
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
                                        variant='body2'>
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
                                        {tournamentStore[variableName][interfaceIndex]?.deckNote}
                                    </Typography>
                                }
                            </Box>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card >

            <Modal
                open={open.state}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>

                    <Typography
                        variant="overline"
                        display="block" >
                        Player Name
                    </Typography>

                    <TextField
                        placeholder="John Doe"
                        name="name"
                        value={tournamentStore[variableName][interfaceIndex]?.name || ''}
                        data-array-name={variableName}
                        data-index={interfaceIndex}
                        size='small'
                        onChange={(event) => handleChange(event)} />
                    <Typography
                        variant="overline">
                        Played Deck
                    </Typography>

                    <TextField
                        placeholder="Kashtira"
                        name="deck"
                        value={tournamentStore[variableName][interfaceIndex]?.deck || ''}
                        size='small'
                        display="block"
                        onChange={handleChange} />
                    <Typography
                        variant="overline"
                        display="block" >
                        Deck Notes
                    </Typography>

                    <TextField
                        placeholder="Evil Twin"
                        name='deckNote'
                        value={tournamentStore[variableName][interfaceIndex]?.deckNote || ''}
                        size='small'
                        onChange={handleChange} />
                    <Typography
                        variant="overline"
                        display="block" >
                        Deck Link
                    </Typography>

                    <TextField
                        placeholder='https://www.youtube.com/watch?v=12345678'
                        name='deckLink'
                        value={tournamentStore[variableName][interfaceIndex]?.deckLink || ''}
                        size='small'
                        onChange={handleChange} />

                    <Button
                        size='small'
                        disabled={validLink}
                        sx={{
                            width: '50%',
                            marginInline: 'auto',
                            marginTop: '20px'
                        }}
                        onClick={() => {
                            handleClose()
                        }}
                        variant='outlined'>
                        Ok
                    </Button>
                </Box>
            </Modal >
        </>
    )
}

import {
    useState
} from 'react'


import { useTournamentStore } from '../tournamentStore';

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

export default function TournamentTreeItem({ item }) {
    const [open, setOpen] = useState({ state: false, key: '' });
    const handleOpen = (key) => setOpen({ state: true, key: key });
    const handleClose = () => setOpen({ state: false, key: '' });
    let tournamentStore = useTournamentStore(state => state)
    const [validLink, setValidLink] = useState(false)

    function isValidHttpsLink(link) {
        // Check if the link starts with "https://" or "http://"
        if (link.startsWith("https://")) {
            return true;
        } else {
            return false
        }
    }

    console.log(tournamentStore)
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
                <CardActionArea onClick={() => handleOpen(item.key)}>
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
                                    item && item.title === 'First Place' ?
                                        <IconContext.Provider value={{ color: "#FFD700" }}>
                                            <GiTrophy style={{ width: '20px' }} />
                                        </IconContext.Provider> :
                                        <GiFamilyTree style={{ width: '20px' }} />
                                }

                                <Typography
                                    marginLeft={0.75}
                                    variant='overline'>
                                    {item?.title}
                                </Typography>
                            </Box>

                            {tournamentStore[item.key]?.deckLink === '' ?
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


                            {tournamentStore[item.key]?.playerName === '' ?
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
                                    {tournamentStore[item.key]?.playerName}
                                </Typography>
                            }
                            {tournamentStore[item.key]?.playerName === '' ||
                                tournamentStore[item.key]?.playedDeck === '' ?
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
                                    with {tournamentStore[item.key]?.playedDeck}
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
                                {tournamentStore[item.key]?.deckNotes === '' ?
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
                                        {tournamentStore[item.key]?.deckNotes}
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
                <Box

                    sx={style}>
                    <Typography
                        variant="overline"
                        display="block" >
                        Player Name
                    </Typography>
                    <TextField
                        placeholder="John Doe"
                        value={tournamentStore[open.key]?.playerName || ''}
                        size='small'
                        onChange={(e) =>
                            tournamentStore.setItem(open.key, {
                                playerName: e.target.value
                            })
                        } />
                    <Typography
                        variant="overline">
                        Played Deck
                    </Typography>
                    <TextField
                        placeholder="Kashtira"
                        value={tournamentStore[open.key]?.playedDeck || ''}
                        size='small'
                        display="block"
                        onChange={(e) =>
                            tournamentStore.setItem(open.key, {
                                playedDeck: e.target.value
                            })
                        } />
                    <Typography
                        variant="overline"
                        display="block" >
                        Deck Notes
                    </Typography>
                    <TextField
                        placeholder="Evil Twin"
                        value={tournamentStore[open.key]?.deckNotes || ''}
                        size='small'
                        onChange={(e) =>
                            tournamentStore.setItem(open.key, {
                                deckNotes: e.target.value
                            })
                        } />
                    <Typography
                        variant="overline"
                        display="block" >
                        Deck Link
                    </Typography>
                    <TextField
                        placeholder='https://www.youtube.com/watch?v=12345678'
                        value={tournamentStore[open.key]?.deckLink || ''}
                        size='small'
                        onChange={(e) => {
                            tournamentStore.setItem(open.key, {
                                deckLink: e.target.value
                            })
                            if (isValidHttpsLink(e.target.value)) {
                                setValidLink(true)
                            } else {
                                setValidLink(false)
                            }
                        }
                        } />
                    <Button
                        disabled={validLink}
                        sx={{
                            width: '50%',
                            marginInline: 'auto',
                            marginTop: '20px'
                        }}
                        onClick={() => {
                            handleClose()
                        }}
                        variant='outlined'>OK</Button>
                </Box>
            </Modal>
        </>
    )
}

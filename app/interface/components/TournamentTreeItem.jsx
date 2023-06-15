import {
    useState
} from 'react'


import { useTournamentStore } from '../tournamentStore';

import { GiStabbedNote, GiBroadsword, GiTrophy, GiFamilyTree } from "react-icons/gi";

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
    return (
        <>
            <Card
                sx={{
                    width: 225
                }}>
                <CardActionArea onClick={() => handleOpen(item.key)}>
                    <CardContent>
                        <Stack
                            spacing={0.75}
                            alignItems='center'
                            direction='row'>
                            {
                                item && item.title === 'First Place' ?
                                    <IconContext.Provider value={{ color: "#FFD700" }}>
                                        <GiTrophy style={{ width: '20px' }} />
                                    </IconContext.Provider> :
                                    <GiFamilyTree style={{ width: '20px' }} />
                            }

                            <Typography
                                sx={{
                                    marginLeft: 'auto'
                                }}
                                variant='overline'>
                                {item?.title}
                            </Typography>
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
                                        color: 'rgba(255, 255, 255, 0.7)',
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
                                tournamentStore[item.key]?.playerName}
                            {tournamentStore[item.key]?.playerName === '' ||
                                tournamentStore[item.key]?.playedDeck === '' ?
                                '' :
                                ' with ' + tournamentStore[item.key]?.playedDeck}

                        </Stack>
                        <Box>

                            <Stack
                                spacing={0.75}
                                alignItems='center'
                                direction='row'>
                                <GiStabbedNote style={{ width: '20px' }} />
                                <Typography variant='body2'>
                                    asdasd
                                </Typography>
                            </Stack>
                        </Box>
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
                        value={tournamentStore[open.key]?.deckLink || ''}
                        size='small'
                        onChange={(e) =>
                            tournamentStore.setItem(open.key, {
                                deckLink: e.target.value
                            })
                        } />
                    <Button
                        marginTop={2}
                        onClick={() => {
                            handleClose()
                        }}
                        variant='outlined'>OK</Button>
                </Box>
            </Modal>
        </>
    )
}

import {
    useState
} from 'react'

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

import LoadingButton from '@mui/lab/LoadingButton';

import Cookies from 'js-cookie';

import { useTournamentStore } from '../tournamentStore';
import TournamentTreeItem from './TournamentTreeItem';
import { useRouter } from 'next/navigation';



export default function TournamentTree() {
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [top16, setTop16] = useState(false)

    const router = useRouter()


    let tournamentStore = useTournamentStore(state => state)

    const firstPlaceRow = [{ key: 'firstPlace', title: 'First Place' }];
    const secondPlaceRow = [{ key: 'secondPlace', title: 'Second Place' }];
    const top4Row = [{ key: 'top4FirstItem', title: 'Top 4' }, { key: 'top4SecondItem', title: 'Top 4' }];
    const top8Row = [{ key: 'top8FirstItem', title: 'Top 8' }, { key: 'top8SecondItem', title: 'Top 8' }, { key: 'top8ThirdItem', title: 'Top 8' }, { key: 'top8FourthItem', title: 'Top 8' }]
    const top16Row = [
        { key: 'top16FirstItem', title: 'Top 16' },
        { key: 'top16SecondItem', title: 'Top 16' },
        { key: 'top16ThirdItem', title: 'Top 16' },
        { key: 'top16FourthItem', title: 'Top 16' },
        { key: 'top16FifthItem', title: 'Top 16' },
        { key: 'top16SixthItem', title: 'Top 16' },
        { key: 'top16SeventhItem', title: 'Top 16' },
        { key: 'top16EighthItem', title: 'Top 16' },
    ];


    const postTournament = async () => {
        setIsLoading(true);
        const tournamentData = {
            tournament: {
                "tournamentType": tournamentStore.tournamentType,
                "location": tournamentStore.location,
                "totalParticipants": tournamentStore.totalParticipants,
                "date": tournamentStore.date,
                "player": [
                    {
                        "place": 'first',
                        "name": tournamentStore.firstPlace.playerName,
                        "deck": tournamentStore.firstPlace.playedDeck,
                        "deckNote": tournamentStore.firstPlace.deckNotes,
                        "deckLink": tournamentStore.firstPlace.deckLink
                    },
                    {
                        "place": 'second',
                        "name": tournamentStore.secondPlace.playerName,
                        "deck": tournamentStore.secondPlace.playedDeck,
                        "deckNote": tournamentStore.secondPlace.deckNotes,
                        "deckLink": tournamentStore.secondPlace.deckLink
                    },
                    {
                        "place": 'top4',
                        "name": tournamentStore.top4FirstItem.playerName,
                        "deck": tournamentStore.top4FirstItem.playedDeck,
                        "deckNote": tournamentStore.top4FirstItem.deckNotes,
                        "deckLink": tournamentStore.top4FirstItem.deckLink
                    },
                    {
                        "place": 'top4',
                        "name": tournamentStore.top4SecondItem.playerName,
                        "deck": tournamentStore.top4SecondItem.playedDeck,
                        "deckNote": tournamentStore.top4SecondItem.deckNotes,
                        "deckLink": tournamentStore.top4SecondItem.deckLink
                    },
                    {
                        "place": 'top8',
                        "name": tournamentStore.top8FirstItem.playerName,
                        "deck": tournamentStore.top8FirstItem.playedDeck,
                        "deckNote": tournamentStore.top8FirstItem.deckNotes,
                        "deckLink": tournamentStore.top8FirstItem.deckLink
                    },
                    {
                        "place": 'top8',
                        "name": tournamentStore.top8SecondItem.playerName,
                        "deck": tournamentStore.top8SecondItem.playedDeck,
                        "deckNote": tournamentStore.top8SecondItem.deckNotes,
                        "deckLink": tournamentStore.top8SecondItem.deckLink
                    },
                    {
                        "place": 'top8',
                        "name": tournamentStore.top8ThirdItem.playerName,
                        "deck": tournamentStore.top8ThirdItem.playedDeck,
                        "deckNote": tournamentStore.top8ThirdItem.deckNotes,
                        "deckLink": tournamentStore.top8ThirdItem.deckLink
                    },
                    {
                        "place": 'top8',
                        "name": tournamentStore.top8FourthItem.playerName,
                        "deck": tournamentStore.top8FourthItem.playedDeck,
                        "deckNote": tournamentStore.top8FourthItem.deckNotes,
                        "deckLink": tournamentStore.top8FourthItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16FirstItem.playerName,
                        "deck": tournamentStore.top16FirstItem.playedDeck,
                        "deckNote": tournamentStore.top16FirstItem.deckNotes,
                        "deckLink": tournamentStore.top16FirstItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16SecondItem.playerName,
                        "deck": tournamentStore.top16SecondItem.playedDeck,
                        "deckNote": tournamentStore.top16SecondItem.deckNotes,
                        "deckLink": tournamentStore.top16SecondItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16ThirdItem.playerName,
                        "deck": tournamentStore.top16ThirdItem.playedDeck,
                        "deckNote": tournamentStore.top16ThirdItem.deckNotes,
                        "deckLink": tournamentStore.top16ThirdItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16FourthItem.playerName,
                        "deck": tournamentStore.top16FourthItem.playedDeck,
                        "deckNote": tournamentStore.top16FourthItem.deckNotes,
                        "deckLink": tournamentStore.top16FourthItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16FifthItem.playerName,
                        "deck": tournamentStore.top16FifthItem.playedDeck,
                        "deckNote": tournamentStore.top16FifthItem.deckNotes,
                        "deckLink": tournamentStore.top16FifthItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16SixthItem.playerName,
                        "deck": tournamentStore.top16SixthItem.playedDeck,
                        "deckNote": tournamentStore.top16SixthItem.deckNotes,
                        "deckLink": tournamentStore.top16SixthItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16SeventhItem.playerName,
                        "deck": tournamentStore.top16SeventhItem.playedDeck,
                        "deckNote": tournamentStore.top16SeventhItem.deckNotes,
                        "deckLink": tournamentStore.top16SeventhItem.deckLink
                    },
                    {
                        "place": 'top16',
                        "name": tournamentStore.top16EighthItem.playerName,
                        "deck": tournamentStore.top16EighthItem.playedDeck,
                        "deckNote": tournamentStore.top16EighthItem.deckNotes,
                        "deckLink": tournamentStore.top16EighthItem.deckLink
                    }
                ]
            },
            userId: Cookies.get('token')
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}post-new-tournament`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tournamentData)
        })

        if (response.ok) {
            const tournamentID = await response.json()
            setTimeout(() => {
                setIsLoading(false)
                setSuccess(true)
                router.push(`/tournaments/${tournamentID}`)
            }, 2000)
        } else if (!response.ok) {
            const json = await response.json()
            console.log(json)
        }
    }

    return (
        <>
            <Box>
                <Typography
                    variant='h6' >
                    Tournament Tree
                </Typography>
                <Stack
                    sx={{
                        marginBlock: '25px'
                    }}
                    alignItems='center'

                    spacing={2}>
                    {firstPlaceRow.map((item, index) => (
                        <TournamentTreeItem
                            key={index}
                            item={item}
                        />
                    ))}
                    {secondPlaceRow.map((item, index) => (
                        <TournamentTreeItem
                            key={index}
                            item={item}
                        />
                    ))}
                    <Stack
                        direction="row"
                        spacing={2}>
                        {top4Row.map((item, index) => (
                            <TournamentTreeItem
                                key={index}
                                item={item}
                            />
                        ))}
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={2}>
                        {top8Row.map((item, index) => (
                            <TournamentTreeItem
                                key={index}
                                item={item}
                            />
                        ))}
                    </Stack>
                </Stack>
                {!top16 && !top16 ?
                    <Button
                        onClick={() => setTop16(true)}
                        variant='outlined'>
                        Add Top 16
                    </Button> :
                    null
                }

                {top16 && top16Row ?
                    <Stack
                        marginBlock={2} justifyContent='center' alignItems='center' direction='column' spacing={2}>
                        <Stack direction="row" spacing={2}>
                            {top16Row.slice(0, 4).map((item, index) => (
                                <TournamentTreeItem key={index} item={item} />
                            ))}
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            {top16Row.slice(4, 8).map((item, index) => (
                                <TournamentTreeItem key={index + 4} item={item} />
                            ))}
                        </Stack>
                    </Stack> :
                    null
                }

                <Box
                    sx={{
                        marginBlock: '25px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <LoadingButton
                        color={success ? 'success' : 'primary'}
                        marginInline='auto'
                        onClick={postTournament}
                        loading={isLoading}
                        variant="outlined"
                    >
                        <span>Create Tournament</span>
                    </LoadingButton>
                </Box>
            </Box >
        </>
    )
}

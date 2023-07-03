'use client'
import {
    TextField,
    Box,
    Typography,
    Button
} from '@mui/material'
import SecondaryWindowHeader from '../components/SecondaryWindowHeader';

import { BiPlus, BiTrash, BiSend } from "react-icons/bi";

import {
    GiFamilyTree
} from "react-icons/gi";

import NationalTournamentInterface from './components/NationalTournamentInterface';
import { useTournamentStore } from './tournamentStore';
import OuterWindowWrapper from '../components/OuterWindowWrapper';
import InnerWindowWrapper from '../components/InnerWindowWrapper';
import TournamentToggle from './components/TournamentToggle';

import { useEffect, useState } from 'react';
import TournamentTree from './components/TournamentTreeRow';
import TournamentDetails from '../components/TournamentDetails';
import TournamentTreeRow from './components/TournamentTreeRow'

const firstPlace = [
    { key: 'firstPlace', title: 'First' }
];
const secondPlace = [
    { key: 'secondPlace', title: 'Second' }
];
const top4 = [
    { key: 'top4FirstItem', title: 'Top 4' },
    { key: 'top4SecondItem', title: 'Top 4' }
];
const top8 = [
    { key: 'top8FirstItem', title: 'Top 8' },
    { key: 'top8SecondItem', title: 'Top 8' },
    { key: 'top8ThirdItem', title: 'Top 8' },
    { key: 'top8FourthItem', title: 'Top 8' }
]
const top16 = [
    { key: 'top16FirstItem', title: 'Top 16' },
    { key: 'top16SecondItem', title: 'Top 16' },
    { key: 'top16ThirdItem', title: 'Top 16' },
    { key: 'top16FourthItem', title: 'Top 16' },
    { key: 'top16FifthItem', title: 'Top 16' },
    { key: 'top16SixthItem', title: 'Top 16' },
    { key: 'top16SeventhItem', title: 'Top 16' },
    { key: 'top16EighthItem', title: 'Top 16' },
];

const top32 = [
    { key: 'top32FirstItem', title: 'Top 32' },
    { key: 'top32SecondItem', title: 'Top 32' },
    { key: 'top32ThirdItem', title: 'Top 32' },
    { key: 'top32FourthItem', title: 'Top 32' },
    { key: 'top32FifthItem', title: 'Top 32' },
    { key: 'top32SixthItem', title: 'Top 32' },
    { key: 'top32SeventhItem', title: 'Top 32' },
    { key: 'top32EighthItem', title: 'Top 32' },
    { key: 'top32NinthItem', title: 'Top 32' },
    { key: 'top32TenthItem', title: 'Top 32' },
    { key: 'top32EleventhItem', title: 'Top 32' },
    { key: 'top32TwelfthItem', title: 'Top 32' },
    { key: 'top32ThirteenthItem', title: 'Top 32' },
    { key: 'top32FourteenthItem', title: 'Top 32' },
    { key: 'top32FifteenthItem', title: 'Top 32' },
    { key: 'top32SixteenthItem', title: 'Top 32' }
];

const top64 = [
    { key: 'top64FirstItem', title: 'Top 64' },
    { key: 'top64SecondItem', title: 'Top 64' },
    { key: 'top64ThirdItem', title: 'Top 64' },
    { key: 'top64FourthItem', title: 'Top 64' },
    { key: 'top64FifthItem', title: 'Top 64' },
    { key: 'top64SixthItem', title: 'Top 64' },
    { key: 'top64SeventhItem', title: 'Top 64' },
    { key: 'top64EighthItem', title: 'Top 64' },
    { key: 'top64NinthItem', title: 'Top 64' },
    { key: 'top64TenthItem', title: 'Top 64' },
    { key: 'top64EleventhItem', title: 'Top 64' },
    { key: 'top64TwelfthItem', title: 'Top 64' },
    { key: 'top64ThirteenthItem', title: 'Top 64' },
    { key: 'top64FourteenthItem', title: 'Top 64' },
    { key: 'top64FifteenthItem', title: 'Top 64' },
    { key: 'top64SixteenthItem', title: 'Top 64' },
    { key: 'top64SeventeenthItem', title: 'Top 64' },
    { key: 'top64EighteenthItem', title: 'Top 64' },
    { key: 'top64NineteenthItem', title: 'Top 64' },
    { key: 'top64TwentiethItem', title: 'Top 64' },
    { key: 'top64TwentyFirstItem', title: 'Top 64' },
    { key: 'top64TwentySecondItem', title: 'Top 64' },
    { key: 'top64TwentyThirdItem', title: 'Top 64' },
    { key: 'top64TwentyFourthItem', title: 'Top 64' },
    { key: 'top64TwentyFifthItem', title: 'Top 64' },
    { key: 'top64TwentySixthItem', title: 'Top 64' },
    { key: 'top64TwentySeventhItem', title: 'Top 64' },
    { key: 'top64TwentyEighthItem', title: 'Top 64' },
    { key: 'top64TwentyNinthItem', title: 'Top 64' },
    { key: 'top64ThirtiethItem', title: 'Top 64' },
    { key: 'top64ThirtyFirstItem', title: 'Top 64' },
    { key: 'top64ThirtySecondItem', title: 'Top 64' }
];


export default function Interface() {

    const [interfaceState, setInterfaceState] = useState([firstPlace, secondPlace, top4])



    const exampleArray = [firstPlace, secondPlace, top4, top8, top16, top32, top64]

    const addTournamentRow = () => {
        setInterfaceState(oldArray => [...oldArray, exampleArray[interfaceState.length]])
        console.log("🚀 ~ file: page.jsx:57 ~ Interface ~ interfaceState:", interfaceState)
    }

    const deleteLastItem = () => {
        setInterfaceState(prevState => {
            const newState = [...prevState]; // Create a copy of the state array
            newState.pop(); // Remove the last item from the copied array
            return newState; // Return the updated array as the new state
        });
    };

    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    let tournamentStore = useTournamentStore(state => state)


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

    { interfaceState.map((item, index) => (item[0].title)) }


    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper
                pagetitle={tournamentStore?.tournamentType === 'national' ?
                    'Create a national tournament' :
                    'Create a regional tournament'}
            >

                <SecondaryWindowHeader sectionTitle={'Tournament Informations'} />

                {tournamentStore.tournamentType === 'national' ? <NationalTournamentInterface /> : null}
                <SecondaryWindowHeader
                    informationTitle={'Go ahead and click on any item to easily edit its information.'}
                    sectionTitle={'Tournament Tree'} />
                <TournamentDetails>
                    <Box
                        sx={{
                            width: '100%',
                        }}>
                        {interfaceState.map((item, index) => {
                            let variableName = '';
                            if (item === firstPlace) {
                                variableName = 'firstPlace';
                            } else if (item === secondPlace) {
                                variableName = 'secondPlace';
                            } else if (item === top4) {
                                variableName = 'top4';
                            } else if (item === top8) {
                                variableName = 'top8';
                            } else if (item === top16) {
                                variableName = 'top16';
                            } else if (item === top32) {
                                variableName = 'top32';
                            } else if (item === top64) {
                                variableName = 'top64';
                            }
                            // Weitere else if-Blöcke für die anderen Konstanten

                            return (
                                <TournamentTreeRow
                                    key={index}
                                    chipIcon={<GiFamilyTree style={{ width: '12.5px', height: '12.5px' }} />}
                                    interfaceIndex={index}
                                    currentInterfaceState={interfaceState.length}
                                    treeRow={item}
                                    variableName={variableName} // Übergebe den Namen der Konstanten als 'variableName' Prop
                                />
                            );
                        })}
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                md: 'space-between',

                            },
                            flexDirection: {
                                xs: 'column',
                                md: 'row'
                            }

                        }}>
                            <Box sx={{

                                display: 'flex',
                                justifyContent: {
                                    xs: 'space-between',
                                    md: 'flex-start'
                                }
                            }}>
                                <Button
                                    sx={{
                                        marginRight: '10px'
                                    }}
                                    onClick={deleteLastItem}
                                    startIcon={<BiTrash />}>
                                    Delete
                                </Button>
                                <Button
                                    onClick={addTournamentRow}
                                    startIcon={<BiPlus />}>
                                    Add
                                </Button>
                            </Box>
                            <Button
                                startIcon={<BiSend />}
                                variant="outlined">
                                Post Tournament
                            </Button>
                        </Box>
                    </Box>
                </TournamentDetails >
            </InnerWindowWrapper >
        </OuterWindowWrapper >
    )
}

'use client'
import {
    TextField,
    Box,
    Typography,

} from '@mui/material'
import SecondaryWindowHeader from '../components/SecondaryWindowHeader';



import NationalTournamentInterface from './components/NationalTournamentInterface';
import { useTournamentStore } from './tournamentStore';
import OuterWindowWrapper from '../components/OuterWindowWrapper';
import InnerWindowWrapper from '../components/InnerWindowWrapper';
import TournamentToggle from './components/TournamentToggle';

import { useEffect, useState } from 'react';
import TournamentTree from './components/TournamentTreeRow';
import TournamentDetails from '../components/TournamentDetails';
import TournamentTreeRow from './components/TournamentTreeRow'

export default function Interface() {

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
                    <TournamentTreeRow></TournamentTreeRow>
                </TournamentDetails>
            </InnerWindowWrapper>
        </OuterWindowWrapper >
    )
}
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
import { useEffect } from 'react';
import TournamentTree from './components/TournamentTree';


export default function Interface() {
    let tournamentStore = useTournamentStore(state => state)



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
                <TournamentTree />
            </InnerWindowWrapper>
        </OuterWindowWrapper >
    )
}
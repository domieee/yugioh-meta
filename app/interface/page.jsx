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

export default function Interface() {
    let tournamentStore = useTournamentStore(state => state)


    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper
                menuOptions={<TournamentToggle type={'asds'} />}
                pagetitle={tournamentStore?.tournamentType === 'national' ?
                    'Create a national tournament' :
                    'Create a regional tournament'}
            >

                <SecondaryWindowHeader sectionTitle={'Tournament Informations'} />

                {tournamentStore.tournamentType === 'national' ? <NationalTournamentInterface /> : null}
            </InnerWindowWrapper>
        </OuterWindowWrapper >
    )
}
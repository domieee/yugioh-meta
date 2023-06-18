'use client'
import {
    TextField,
    Box,
    Typography,

} from '@mui/material'


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

                <Typography
                    variant="h6"
                    sx={{
                        justifyContent: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'center'
                        }
                    }}>
                    Tournament Informations
                </Typography>

                {tournamentStore.tournamentType === 'national' ? <NationalTournamentInterface /> : null}
            </InnerWindowWrapper>
        </OuterWindowWrapper >
    )
}
'use client'

import {
    TextField,
    Box,
    Typography,

} from '@mui/material'

import {
    useState,
    useEffect
} from 'react'

import NationalTournamentInterface from './components/NationalTournamentInterface';
import { useTournamentStore } from './tournamentStore';
import OuterWindowWrapper from '../components/OuterWindowWrapper';
import InnerWindowWrapper from '../components/InnerWindowWrapper';
import TournamentToggle from './components/TournamentToggle';

export default function Interface() {
    let tournamentStore = useTournamentStore(state => state)



    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = ''; // This is required for Chrome compatibility

            return ''; // This is required for Firefox compatibility
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <OuterWindowWrapper>
            <InnerWindowWrapper
                menuOptions={<TournamentToggle />}
                pagetitle={tournamentStore.tournamentType === 'national' ?
                    'Create a national tournament' :
                    'Create a regional tournament'}
            >

                <Box sx={{
                    display: 'flex',
                    height: '50px',
                    alignItems: 'center',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'space-between',
                        lg: 'space-between'
                    }
                }}>

                    <Typography
                        variant="h5"
                        sx={{
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'center',
                                lg: 'center'
                            }
                        }}>
                    </Typography>

                </Box>

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
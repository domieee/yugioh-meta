'use client'

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


export default function RegisterButton() {

    const router = useRouter()

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Run any client-side code here
        setLoaded(true);
    }, []);

    const handleRegisterClick = () => {
        router.push('/register')
    }

    const handleTournamentClick = () => {
        router.push('/tournaments')
    }

    if (!loaded) {
        return null; // Return null while component is loading
    }

    const token = Cookies.get('token')


    return (
        token ?
            <Button
                autoFocus
                onClick={handleTournamentClick}
                variant='outlined'
                endIcon={<ArrowForwardRoundedIcon />} >
                Show latest tournaments
            </Button> :
            <Button
                autoFocus
                sx={{ marginLeft: 'auto' }}
                onClick={handleRegisterClick}
                variant='outlined'
                endIcon={<LoginRoundedIcon />}>
                Sign up your account
            </Button>
    )
}

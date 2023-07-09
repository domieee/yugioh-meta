'use client'

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';


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

    if (!loaded) {
        return null; // Return null while component is loading
    }

    const token = Cookies.get('token')


    return (
        token ? null : <Button
            onClick={handleRegisterClick}
            sx={{ marginLeft: 'auto' }}
            variant='outlined'>Sign up your account</Button>
    )
}

'use client'

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import Link from "next/link"
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';

import LoadingButton from '@mui/lab/LoadingButton';
import Cookies from 'js-cookie';
import { css } from '@emotion/react';

import { useInterfaceStore } from "../../interfaceStore";


import './login.scss'
import { Box, Stack } from "@mui/material";
import { useStore } from "../../components/store";

export default function Login() {
    const [fetching, setFetching] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorKey, setErrorKey] = useState('');

    const [data, setData] = useState({
        mailOrName: '',
        password: ''
    });

    const updateAlert = useInterfaceStore((state) => state.updateAlert);
    const updateSuccess = useInterfaceStore((state) => state.updateSuccess);
    const updateAlertVisibility = useInterfaceStore((state) => state.updateAlertVisibility);
    const updateSuccessVisibility = useInterfaceStore((state) => state.updateSuccessVisibility)

    // Access the alert visibility
    const alertVisible = useInterfaceStore((state) => state.alert.visibility);
    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)


    const router = useRouter()
    console.log(router)
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    }

    const errorStyles = {
        fieldset: {
            outlineColor: errorKey != '' ? 'red' : undefined,
        },
    };

    const loginUser = async (e) => {
        console.log("🚀 ~ file: page.jsx:77 ~ loginUser ~ data.mailOrName:", data.mailOrName)
        console.log("🚀 ~ file: page.jsx:77 ~ loginUser ~ data.password:", data.password)

        const requestBody = {
            mailOrName: String(data.mailOrName),
            password: String(data.password)
        };

        setFetching(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}login`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(requestBody)


        })

        if (response.status === 200) {

            const json = await response.json()
            Cookies.set('token', json, { expires: 7 })
            const currentToken = Cookies.get('token');

            const userInformation = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}receive-user-informations`, {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    token: currentToken
                })
            })

            if (userInformation.status === 200) {
                const json = await userInformation.json()
                console.log("🚀 ~ file: page.jsx:98 ~ loginUser ~ json:", json)
                updateSuccess('You´re in! Successfully logged in and ready to dive in.')
                updateSuccessVisibility(true)


                // Handle the user states in the user store
                await setUserName(json.username)
                await setUserID(json.id)
                await setUserRole(json.role)
                setSuccessOpen(true)
                setTimeout(() => {
                    setFetching(false)
                    router.push('/')

                }, 500)

            } else if (userInformation.status === 400) {
                const json = await response.json()
                console.log(json)
            }

        } else if (response.status === 400) {

            const error = await response.json()
            console.log(error)
            setFetching(false)

            // Handle the errors in the UI
            updateAlertVisibility(true)
            updateAlert(error.msg)
            setTimeout(() => {
                setErrorKey('')

            }, 5000)

        } else {
            const error = await response.json()
            console.log(error)
        }
    }

    return (

        <section className="loginPage">
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '35px'
            }}>
                <Typography variant="h6" display="block" >
                    Sign In
                </Typography>
                <Divider></Divider>
                <Stack
                    spacing={1}
                    direction='column'
                    justifyContent="center"
                    alignItems='center'>

                    <Box>
                        <Typography
                            sx={errorKey === 'email' || errorKey === 'mailOrPassword' ?
                                { color: 'red', transition: 'color 0.1s linear' } :
                                { color: 'white', transition: 'color 0.1s linear' }}
                            variant="overline"
                            display="block" >
                            E-Mail Or Username
                        </Typography>
                        <TextField
                            sx={{ errorStyles }}
                            id="outlined-basic"
                            name="email"
                            placeholder="johndoe@mail.com"
                            variant="outlined"
                            size="small"
                            value={data.email}
                            onChange={e => setData({ ...data, mailOrName: e.target.value })} />
                    </Box>

                    <Box>
                        <Typography
                            sx={errorKey === 'password' || errorKey === 'mailOrPassword' ?
                                { color: 'red', transition: 'color 0.1s linear' } :
                                { color: 'white', transition: 'color 0.1s linear' }}
                            variant="overline"
                            display="block" >
                            Password
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            variant="outlined"
                            size="small"
                            value={data.password}
                            bgColor='#fff'
                            onChange={e => setData({ ...data, password: e.target.value })} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <Checkbox size='small' />
                        <Typography variant='body2'>Stay signed in</Typography>
                    </Box>
                </Stack>

                <LoadingButton
                    variant="outlined"
                    size="small"
                    loading={fetching}
                    onClick={() => loginUser()}
                    sx={{
                        width: '50%',
                        marginInline: 'auto',
                        marginBlock: '10px 10px'
                    }}>
                    Sign In
                </LoadingButton>


                <Box
                    sx={{
                        marginInline: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>

                    <Typography
                        sx={{ textAlign: 'center' }}
                        variant="caption"
                        display="block"
                        gutterBottom>
                        Not registered yet?
                        <Link href='/register'>
                            <Typography
                                sx={{
                                    marginLeft: '2.5px',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                                textAlign="center"
                                variant="caption"
                                display="inline"
                                gutterBottom>Sign Up
                            </Typography>
                        </Link>
                    </Typography>
                </Box>


            </Card>

        </section >
    )
}
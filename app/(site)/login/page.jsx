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
import LoadingButton from '@mui/lab/LoadingButton';
import Cookies from 'js-cookie';
import { css } from '@emotion/react';


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
        setFetching(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}login`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                mailOrName: data.mailOrName,
                password: data.password
            })
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
            setAlertOpen(true)
            setErrorMessage(error.msg)
            setErrorKey(error.key)
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
                            placeholder="••••••••"
                            variant="outlined"
                            size="small"
                            value={data.password}
                            onChange={e => setData({ ...data, password: e.target.value })} />
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
                        marginBlock: '15px 10px'
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

            {/* Snackbar to handle success feedback during the login process */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={alertOpen}
                autoHideDuration={5000}
                onClose={handleAlertClose}>
                <Alert severity="error" >{errorMessage && errorMessage}</Alert>
            </Snackbar>

            {/* Snackbar to handle error feedback during the login process */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={alertOpen}
                autoHideDuration={5000}
                onClose={handleAlertClose}>
                <Alert severity="error" >{errorMessage && errorMessage}</Alert>
            </Snackbar>

        </section >
    )
}
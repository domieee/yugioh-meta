'use client'

import { useState, useRef, useEffect, forwardRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import Link from "next/link"
import './register.scss'
import Cookies from 'js-cookie';
import { useStore } from "../../components/store";
import { css } from '@emotion/react';

import { Preview } from "@mui/icons-material";
import Controller from "@/app/components/Controls";
import { Divider } from "@mui/material";


export default function Register() {
    const [color, setColor] = useState('inherit')

    const [successOpen, setSuccessOpen] = useState(false);

    const [fetching, setFetching] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorKey, setErrorKey] = useState('');

    const router = useRouter()

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)

    const handleClick = () => {
        setAlertOpen(true);
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    }

    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessOpen(false);
    }

    const hoverStyles = css`color: red`;

    const registerUser = async () => {

        setFetching(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}register`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword,
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
            });

            if (userInformation.status === 200) {
                const json = await userInformation.json()
                await setUserName(json.username)
                await setUserID(json.id)
                await setUserRole(json.role)
                setSuccessOpen(true)
                setTimeout(() => {
                    setFetching(false)
                    router.push('/');
                }, 1000)

            } else if (userInformation.status === 400) {
                const json = await response.json()
                console.log(json)
            }

        } else if (response.status === 400) {
            const error = await response.json()
            console.log(error)
            setFetching(false)
            setErrorMessage(error.msg)
            setErrorKey(error.key)
            setAlertOpen(true)
            setTimeout(() => {
                setErrorKey('')
            }, 5000)

            console.log(errorMessage)
        } else {
            const json = await response.json()
            console.log(json)
        }
    }

    return (
        <section className="registerPage">

            <Card
                boxShadow={0}
                borderRadius={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '35px'
                }}>
                <Typography variant="h6" display="block" >
                    Sign Up
                </Typography>
                <Divider />
                <Stack
                    spacing={1}
                    direction='column'
                    justifyContent="center"
                    alignItems='center'>

                    <Box>
                        <Typography
                            sx={errorKey === 'username' ?
                                { color: 'red', transition: 'color 0.1s linear' } :
                                { color: 'white', transition: 'color 0.1s linear' }}
                            variant="overline"
                            display="block" >
                            Username
                        </Typography>
                        <TextField
                            id="username"
                            name="username"
                            placeholder="johndoe1337"
                            variant="outlined"
                            size="small"
                            value={data.username}
                            onChange={e => {
                                setData({ ...data, username: e.target.value })
                            }} />
                    </Box>

                    <Box>
                        <Typography
                            sx={errorKey === 'email' ?
                                { color: 'red', transition: 'color 0.1s linear' } :
                                { color: 'white', transition: 'color 0.1s linear' }}
                            variant="overline"
                            display="block" >
                            E-Mail
                        </Typography>
                        <TextField
                            id="email"
                            name="email"
                            placeholder="johndoe@mail.com"
                            variant="outlined"
                            size="small"
                            value={data.email}
                            onChange={e => setData({ ...data, email: e.target.value })} />
                    </Box>
                    <Box>
                        <Typography variant="overline" display="block" >
                            Password
                        </Typography>
                        <TextField
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            variant="outlined"
                            size="small"
                            value={data.password}
                            onChange={e => setData({ ...data, password: e.target.value })} />
                    </Box>
                    <Box>
                        <Typography variant="overline" display="block" >
                            Confirm Password
                        </Typography>
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="••••••••"
                            variant="outlined"
                            size="small"
                            value={data.confirmPassword}
                            onChange={e => setData({ ...data, confirmPassword: e.target.value })} />
                    </Box>
                </Stack>

                <LoadingButton
                    variant="outlined"
                    size="small"
                    loading={fetching}
                    onClick={() => registerUser()}
                    sx={{
                        width: '50%',
                        marginInline: 'auto',
                        marginBlock: '15px 10px'
                    }}
                >
                    Sign up
                </LoadingButton>
                <Box
                    sx={{
                        marginInline: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>

                    <Typography
                        textAlign="center"
                        variant="caption"
                        display="inline"
                        gutterBottom>
                        Already registered?
                        <Link href='/login'>
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
                                gutterBottom>
                                Sign In
                            </Typography>
                        </Link>
                    </Typography>
                </Box>

            </Card>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={successOpen}
                autoHideDuration={5000}
                onClose={handleSuccessClose}>
                <Alert severity="success" >Registration successfull</Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={alertOpen}
                autoHideDuration={5000}
                onClose={handleAlertClose}>
                <Alert severity="error" >{errorMessage && errorMessage}</Alert>
            </Snackbar>

        </section>
    )
}
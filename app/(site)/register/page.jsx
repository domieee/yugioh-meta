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

import { Preview } from "@mui/icons-material";
import Controller from "@/app/components/Controls";


export default function Register() {
    const [color, setColor] = useState('inherit')
    const [errorMessage, setErrorMessage] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorKey, setErrorKey] = useState(false);
    const [fetching, setFetching] = useState(false);

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
            })

            if (userInformation.status === 200) {
                const json = await userInformation.json()
                await setUserName(json.username)
                await setUserID(json.id)
                await setUserRole(json.role)
                setTimeout(() => {
                    setFetching(false)
                    setSuccessOpen(true)
                    router.push('/')
                }, 500)

            } else if (userInformation.status === 400) {
                const json = await response.json()
                console.log(json)
            }

        } else if (response.status === 400) {
            const json = await response.json()
            console.log(json)

            setTimeout(() => {
                setFetching(false)
                setErrorMessage(json.msg)
                setAlertOpen(true)
            }, 500)

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
                <Stack
                    spacing={1}
                    direction='column'
                    justifyContent="center"
                    alignItems='center'>

                    <Box>
                        <Typography variant="overline" display="block" >
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
                        <Typography variant="overline" display="block" >
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


                    <LoadingButton
                        variant="outlined"
                        size="small"
                        loading={fetching}
                        onClick={() => registerUser()}
                        sx={{
                            width: '50%',
                            marginInline: 'auto'
                        }}
                    >
                        Sign up
                    </LoadingButton>

                    <Typography
                        textAlign="center"
                        variant="caption"
                        display="block"
                        gutterBottom>
                        Already registered?
                        <Link href='/login'> Sign in</Link>
                    </Typography>
                </Stack>
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
'use client'

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import Link from "next/link"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Cookies from 'js-cookie';

import './login.scss'
import { Box, Stack } from "@mui/material";
import { useStore } from "../../components/store";

export default function Login() {
    const [fetching, setFetching] = useState(false);
    const [color, setColor] = useState('inherit')
    const [successOpen, setSuccessOpen] = useState(false);

    const [data, setData] = useState({
        mailOrName: '',
        password: ''
    });

    const setUserName = useStore((state) => state.setUserName)
    const setUserID = useStore((state) => state.setUserID)
    const setUserRole = useStore((state) => state.setUserRole)


    const router = useRouter()
    console.log(router)

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
            setFetching(false)
            console.log(json)
        } else {
            const error = await response.json()
            console.log(error)
        }
    }

    return (
        <>
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
                            <Typography variant="overline" display="block" >
                                E-Mail Or Username
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                name="email"
                                placeholder="john@doe.com"
                                variant="outlined"
                                size="small"
                                value={data.email}
                                onChange={e => setData({ ...data, mailOrName: e.target.value })} />
                        </Box>



                        <Box>
                            <Typography variant="overline" display="block" >
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


                        <LoadingButton
                            variant="outlined"
                            size="small"
                            loading={fetching}
                            onClick={() => loginUser()}
                            sx={{
                                width: '50%',
                                marginInline: 'auto'
                            }}>
                            Sign In
                        </LoadingButton>

                        <Typography
                            sx={{ textAlign: 'center' }}
                            variant="caption"
                            display="block"
                            gutterBottom>
                            Not registered yet?
                            <Link
                                style={{
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                                href='/register'> Sign Up</Link>
                        </Typography>
                    </Stack>
                </Card>
            </section>
        </>
    )
}
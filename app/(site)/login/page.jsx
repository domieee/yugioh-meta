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

import './login.scss'
import { Box, Stack } from "@mui/material";

export default function Login() {
    const [fetching, setFetching] = useState(false);
    const [color, setColor] = useState('inherit')

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const router = useRouter()
    console.log(router)

    const loginUser = async (e) => {
        e.preventDefault()
        setFetching(true)
        await signIn('credentials', { ...data, redirect: false })
            .then(() => {
                setColor('success')
                setTimeout(() => {
                    router.push('/')
                    setFetching(false)
                }, 1000)

            })
            .catch(() => alert('An error occurred. Please try again'))
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
                                E-Mail
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                name="email"
                                placeholder="john@doe.com"
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
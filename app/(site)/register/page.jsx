'use client'

import { useState, useRef, useEffect, forwardRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import Link from "next/link"
import './register.scss'
import { Preview } from "@mui/icons-material";


export default function Register() {
    const [color, setColor] = useState('inherit')
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [errorKey, setErrorKey] = useState(false);

    const router = useRouter()

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });



    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const [fetching, setFetching] = useState(false);

    const registerUser = async () => {


        console.log(data)
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
            console.log(json)
        } else if (response.status === 400) {
            const json = await response.json()
            console.log(json)
            setErrorMessage(json.msg)
            setOpen(true)
            console.log(errorMessage)
        } else {
            const json = await response.json()
            console.log(json)
        }

        // setFetching(true)
        // axios.post('/api/register', data)

        //     .then(async (res) => {
        //         console.log(res)
        //         console.log('Registration successful')
        //         await signIn('credentials', { ...data, redirect: false })
        //             .then(() => {
        //                 setColor('success')
        //                 setTimeout(() => {
        //                     setFetching(false)
        //                     router.push('/')
        //                 }, 1000)

        //             })
        //     })

        //     .catch((err) => {
        //         setColor('danger')
        //         setTimeout(() => {
        //             setFetching(false)
        //             console.log('Registration failed')
        //         }, 1000)
        //     })
    }
    useEffect(() => {
        console.log(data.username);
    }, [data.username]);

    return (
        <section className="registerPage">

            <Card
                borderRadius={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '50px 75px'
                }}>
                <Typography variant="h6" display="block" >
                    Register
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


                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => registerUser()}
                        sx={{
                            width: '50%',
                            marginInline: 'auto'
                        }}
                    >
                        Sign up
                    </Button>

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


            {/* <form
                className="registerForm"
                onSubmit={registerUser}>
                <article className="formRow">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="johndoe1337"
                        ref={username} />
                </article>

                <article className="formRow">
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@doe.com"
                        ref={email} />
                </article>

                <article className="formRow">
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        ref={password} />
                </article>

                <article className="formRow">
                    <label htmlFor="email">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmation"
                        id="confirmation"
                        placeholder="Confirm Password"
                        ref={confirmPassword} />
                </article>

                <button type="submit">Register Account</button>

                <p>Already a member? <Link href='/login'>Sign in</Link></p>
            </form> */}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {errorMessage && errorMessage}
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={fetching}

            >
                <CircularProgress color={color} />
            </Backdrop>
        </section>
    )
}
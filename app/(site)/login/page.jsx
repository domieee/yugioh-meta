'use client'

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Link from "next/link"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './login.scss'

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
        <form
            className="loginForm">

            <article className="formRow">
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

            </article>

            <article className="formRow">
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
            </article>

            <Button
                variant="outlined"
                size="medium"
                onClick={e => loginUser(e)}
            >
                Sign in
            </Button>


            <Typography variant="caption" display="block" gutterBottom>
                Not registered yet?
                <Link href='/register'> Sign up</Link>
            </Typography>


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={fetching}

            >
                <CircularProgress color={color} />
            </Backdrop>
        </form >
    )
}
'use client'

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Link from "next/link"
import TextField from '@mui/material/TextField';

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
            onSubmit={loginUser}
            className="loginForm">

            <article className="formRow">

                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    size="small" />
                <label htmlFor="email">E-Mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@doe.com"
                    required
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })} />
            </article>

            <article className="formRow">
                <label htmlFor="email">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value })} />
            </article>

            <button type="submit">Login</button>

            <p>Not registered yet? <Link href='/register'>Sign up</Link></p>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={fetching}

            >
                <CircularProgress color={color} />
            </Backdrop>
        </form>
    )
}
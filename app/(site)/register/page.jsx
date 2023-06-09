'use client'

import { useState, useRef } from "react";
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import Link from "next/link"
import './register.scss'


export default function Register() {
    const [color, setColor] = useState('inherit')

    const router = useRouter()

    // const [data, setData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    let username = useRef('')
    let email = useRef('')
    let password = useRef('')
    let confirmPassword = useRef('')

    const [fetching, setFetching] = useState(false);

    const registerUser = async (e) => {

        console.log(username.current.value)
        e.preventDefault()

        const response = fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}register`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": true,
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                username: username.current.value,
                mail: email.current.value,
                password: password.current.value,
                confirmPassword: confirmPassword.current.value,
            })
        })

        if (response.ok) {
            const json = await response.json()
            console.log(json)
        } else if (!response.ok) {

            console.log(await response)
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

    return (
        <section className="registerPage">
            <form
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
            </form>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={fetching}

            >
                <CircularProgress color={color} />
            </Backdrop>
        </section>
    )
}
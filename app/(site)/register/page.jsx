'use client'

import { useState } from "react";
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import Link from "next/link"
import './register.scss'


export default function Register() {

    const router = useRouter()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [fetching, setFetching] = useState(false);

    const registerUser = async (e) => {
        e.preventDefault()
        setFetching(true)
        axios.post('/api/register', data)

            .then(async (res) => {
                console.log(res)
                console.log('Registration successful')
                await signIn('credentials', { ...data, redirect: false })
                    .then(() => {
                        router.push('/')
                    })
                router.replace('/')
            })

            .catch((err) => {
                setFetching(false)
                console.log('Registration failed')
                console.log(err)
            })
    }

    return (
        <section className="registerPage">

            {fetching ?
                <div className="registerForm">
                    <CircularProgress color="success" />
                </div>
                :
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
                            required
                            value={data.name}
                            onChange={e => setData({ ...data, name: e.target.value })} />
                    </article>

                    <article className="formRow">
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

                    <article className="formRow">
                        <label htmlFor="email">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmation"
                            id="confirmation"
                            placeholder="Confirm Password"
                            required
                            value={data.confirmPassword}
                            onChange={e => setData({ ...data, confirmPassword: e.target.value })} />
                    </article>

                    <button type="submit">Register Account</button>

                    <p>Already a member? <Link href='/login'>Sign in</Link></p>
                </form>}

        </section>
    )
}
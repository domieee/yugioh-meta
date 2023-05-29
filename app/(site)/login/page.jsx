'use client'

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import Link from "next/link"

import './login.scss'

export default function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const router = useRouter()
    console.log(router)

    const loginUser = async (e) => {
        e.preventDefault()
        console.log('first')
        await signIn('credentials', { ...data, redirect: false })
            .then(() => {
                router.push('/')
            })
            .catch(() => alert('An error occurred. Please try again'))
    }

    return (
        <form
            onSubmit={loginUser}
            className="loginForm">
            <button onClick={() => signIn('google')}>Sign in with google</button>
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

            <button type="submit">Login</button>

            <p>Not registered yet? <Link href='/register'>Sign up</Link></p>

        </form>
    )
}
'use client'

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './navigation.scss';

export default function Navigation() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (status === "loading") {
            setLoading(true);
        } else {
            setTimeout(() => {
                setProgress(100)
                setLoading(false)
                setTimeout(() => {
                    setProgress(0);
                }, 100)
            }, 300)

        }
    }, [status]);

    if (loading) {
        // Render loading state, e.g., a spinner or skeleton UI
        return (
            <>
                <nav className='navigation'>
                    <section className="navigation-links">
                        <Skeleton variant="text" sx={{ fontSize: '1.2rem', backgroundColor: '#545556', width: '120px' }} />
                    </section>
                    <p className='navigation-logo'>Yu-Gi-Oh! Meta</p>
                    <section className="navigation-validation">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: '#545556', width: '120px' }} />
                    </section>
                </nav>

            </>
        )
    }


    return (
        <>
            <nav className='navigation'>
                <section className="navigation-links">

                    <Link href='/statistics'>Statistics</Link>
                    <Link href='/tournaments'>Tournaments</Link>
                </section>
                <Link className='navigation-logo' href='/'>Yu-Gi-Oh! Meta</Link>
                <section className="navigation-validation">
                    {session ? (
                        <SignOutButton />
                    ) : (
                        <>
                            <Link className="loginLink" href='/login'>Login</Link>
                            <Link href='/register'>Register</Link>
                        </>
                    )}
                </section>
            </nav>

        </>
    );
}
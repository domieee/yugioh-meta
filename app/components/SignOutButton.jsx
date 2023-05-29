'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";



export default function SignOutButton() {

    const router = useRouter()

    const handleSignout = () => {
        signOut({ callbackUrl: 'http://localhost:3000/login' })
    }
    return (
        <button onClick={handleSignout}>Logout</button>
    )
}

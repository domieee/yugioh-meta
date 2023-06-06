'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Redirect({ session }) {
    const router = useRouter()

    if (session) {
        router.push('/dashboard')
    }
}

'use client'

import React, { useEffect } from 'react'

import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function HomeLink() {
    const router = useRouter()
    const currentRoute = router.pathname;
    console.log(currentRoute)

    return (
        <Link href='/'>Home</Link>
    )
}

import bcrypt from 'bcrypt'
import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const body = await request.json()

    console.log(body)

    const { name, email, password, confirmPassword } = body

    if (!name || !email || !password || !confirmPassword) {
        return new NextResponse('Missing required fields', { status: 400 })
    }

    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    })


    if (userExists) {
        throw new NextResponse('Email already exists', { status: 400 })
    }

    if (password !== confirmPassword) {
        throw new NextResponse('Passwords dont match', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    })

    return new NextResponse(JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
}
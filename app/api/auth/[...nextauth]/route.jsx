import NextAuth from 'next-auth/next'
import prisma from '../../../libs/prismadb'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: 'Name', type: 'name', placeholder: 'Name' },
                email: { label: 'Email', type: 'email', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
                confirmPassword: { label: 'confirmPassword', type: 'confirmPassword', placeholder: 'confirmPassword' }
            },
            async authorize(credentials) {

                if (!credentials.email || !credentials.password) {
                    throw new Error(`Credentials missing`)
                }

                const user = await prisma.user.findUnique({
                    where:
                    {
                        email: credentials.email
                    }
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error(`No user found`)
                }

                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!passwordMatch) {
                    throw new Error(`Invalid password`)
                }

                return user
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
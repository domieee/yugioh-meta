import Link from "next/link"
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

import './navigation.scss'

export default async function Navigation() {

    const session = await getServerSession(authOptions)

    return (
        <nav className='navigation'>
            <section className="navigation-links">
                <Link href='/'>Home</Link>
                <Link href='/statistics'>Statistics</Link>
            </section>
            <p className='navigation-logo'>Yu-Gi-Oh! Meta</p>
            <section className="navigation-validation">

                {session === null ?
                    <>
                        <Link href='/login'>Login</Link>
                        <Link href='/register'>Register</Link>
                    </> :
                    <button>Logout</button>
                }

            </section>
        </nav>

    )
}

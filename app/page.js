import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Image from 'next/image'
import Link from 'next/link'
import CircularProgress from '@mui/material/CircularProgress';
import Redirect from './components/Redirect'

export default async function Home() {

  const session = await getServerSession(authOptions)



  return (
    <>

      <div style={{ height: '100vh', position: 'relative', margin: '0' }}>
        <div style={{ position: 'relative' }}>
          <h1>Unleash Your Dueling Potential with Yu-Gi-Oh Meta: Where Legends Rise!</h1>
          <p>Your Source for Current Tournament Statistics and Insights. Elevate Your Dueling Game with In-Depth Analysis and Winning Strategies.</p>
          <Link href={`${process.env.NEXTAUTH_URL}/register`}>Register</Link>
        </div>
      </div >

    </>
  )
}

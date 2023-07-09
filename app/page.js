
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@mui/material'
import Cookies from 'js-cookie'

export default async function Home() {

  const token = Cookies.get('token')

  console.log(token)

  return (
    <>
      <section style={{ height: '90vh', position: 'relative', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <article>
          <Image
            src='/_48937081-5bc2-4567-98ed-6619c20f48de.png'
            alt='Buy me a Coffee Button'
            width={500}
            height={500} />
        </article>
        <article style={{ position: 'relative', marginLeft: '50px', maxWidth: '800px' }}>
          <h1 variant='h1'>Unleash Your Dueling Potential with Yu-Gi-Oh Meta!</h1>
          <p>Your Source for Current Tournament Statistics and Insights. Elevate Your Dueling Game with In-Depth Analysis and Winning Strategies.</p>
          {token ? null : <Link href={`${process.env.NEXTAUTH_URL}/register`}>Sign up your account</Link>}
        </article>
      </section >
      <section>

      </section>

    </>
  )
}

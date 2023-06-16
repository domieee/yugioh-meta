
import Link from 'next/link'

export default async function Home() {

  return (
    <>
      <div style={{ height: '100vh', position: 'relative', margin: '0' }}>
        <div style={{ position: 'relative' }}>
          <h1>Unleash Your Dueling Potential with Yu-Gi-Oh Meta!</h1>
          <p>Your Source for Current Tournament Statistics and Insights. Elevate Your Dueling Game with In-Depth Analysis and Winning Strategies.</p>
          <Link href={`${process.env.NEXTAUTH_URL}/register`}>Register</Link>
        </div>
      </div >

    </>
  )
}

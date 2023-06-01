import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'


export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <>

      <h1>Unleash Your Dueling Potential with Yu-Gi-Oh! Meta - Your Gateway to Winning Strategies!</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  )
}

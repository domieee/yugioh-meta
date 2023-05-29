import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'


export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <>
      <p>Home</p>
      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>

    </>
  )
}

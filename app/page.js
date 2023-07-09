
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@mui/material'
import Cookies from 'js-cookie'
import RegisterButton from './components/RegisterButton';

export default function Home({ token }) {
  console.log(token, 'token');

  const isClient = typeof window !== 'undefined';

  return (
    <>
      <section style={{ height: '90vh', position: 'relative', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <article>
          <Image
            className='rotation-animation'
            src='/_48937081-5bc2-4567-98ed-6619c20f48de.png'
            alt='Buy me a Coffee Button'
            width={500}
            height={500}
          />
        </article>
        <article style={{ position: 'relative', marginLeft: '50px', maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '10px', fontSize: '30px' }} variant='h1'>Unleash Your Dueling Potential with Yu-Gi-Oh Meta!</h1>
          <p style={{ marginBottom: '30px' }}>Your Source for Current Tournament Statistics and Insights. Elevate Your Dueling Game with In-Depth Analysis and Winning Strategies.</p>
          <RegisterButton />
        </article>
      </section>
      <section style={{ height: '100vh' }}></section>
    </>
  );
}

export async function getServerSideProps() {
  const token = Cookies.get('token') || null;
  console.log(token);
  console.log("🚀 ~ file: page.js:36 ~ getServerSideProps ~ token:", token)
  return {
    props: {
      token,
    },
  };
}
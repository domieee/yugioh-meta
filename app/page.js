
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
            _82d87970-2832-49bd-9349-1014dc9153c7
          />
        </article>
        <article className='border-bottom' style={{ position: 'relative', marginLeft: '50px', maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '10px', fontSize: '30px' }} variant='h1'>Unleash Your Dueling Potential with Yu-Gi-Oh Meta!</h1>
          <p style={{ marginBottom: '30px' }}>Your Source for Current Tournament Statistics and Insights. Elevate Your Dueling Game with In-Depth Analysis and Winning Strategies.</p>
          <RegisterButton />
        </article>
      </section>
      <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <article style={{ maxWidth: '800px' }}>
          <h2>Unlock the Power of Yu-Gi-Oh! Tournament Data</h2>
          <p>Accessing and analyzing Yugioh tournament data is challenging and time-consuming. Results are scattered across various platforms, making it difficult to gather comprehensive information and make informed decisions.</p>
          <p>Our centralized platform revolutionizes the way you engage with Yu-Gi-Oh! Tournaments.</p>
        </article>
        <Image
          src='/_82d87970-2832-49bd-9349-1014dc9153c7.jpeg'
          alt='Buy me a Coffee Button'
          width={450}
          height={450}

        />
      </section>
      <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2>Experience the competitive edge like never before.</h2>
        <article style={{ maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>

          <article style={{ textAlign: 'center' }}>
            <h3>Comprehensive Data</h3>
            <p >We gather tournament results, decklists, and player performances from multiple sources, ensuring all the information you need is in one place.</p>
          </article>
          <article style={{ textAlign: 'center' }}>
            <h3>User-Friendly Interface</h3>
            <p>Our intuitive design allows effortless navigation, making it easy to search, filter, and explore tournament data.</p>
          </article>
          <article style={{ textAlign: 'center' }}>
            <h3>Advanced Analytics</h3>
            <p>Gain valuable insights and track trends, enabling you to stay ahead of the game and refine your strategies.</p>
          </article>


        </article>
      </section>
    </>
  );
}

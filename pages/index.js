import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codewick Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

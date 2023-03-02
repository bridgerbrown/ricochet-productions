import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Landing from '@/components/home/landing'
import OurTeam from '@/components/home/our-team'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricochet Productions</title>
      </Head>
      <main className='bg-white relative w-screen min-h-screen'>
        <Navbar />
        <Landing />
        <OurTeam />
        <Footer />
      </main>
    </>
  )
}

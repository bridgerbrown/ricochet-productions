import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Landing from '@/components/home/Landing'
import OurTeam from '@/components/home/OurTeam'
import Mission from '@/components/home/Mission'
import RicochetBio from '@/components/home/Bio'
import Podcasts from '@/components/unused/podcasts'
import Contact from '@/components/home/Contact'
import PodcastList from '@/components/home/Podcasts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricochet Productions</title>
      </Head>
      <div className='bg-white relative w-screen min-h-screen scroll-smooth'>
        <Landing />
        <Mission />
        <div className='bg-gradient-to-b from-[#161b31] to-[#080b19]'>
          <RicochetBio />
          <PodcastList />
          <OurTeam />
        </div>
        <div className='bg-[#080b19]'>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Landing from '@/components/sections/Landing'
import Team from '@/components/sections/Team'
import Mission from '@/components/sections/Mission'
import RicochetBio from '@/components/sections/Bio'
import Contact from '@/components/sections/Contact'
import PodcastList from '@/components/sections/Podcasts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricochet Productions</title>
      </Head>
      <div className='bg-white relative w-screen min-h-screen scroll-smooth'>
        <Landing />
        <div className='bg-gradient-to-b from-[#161b31] to-[#080b19]'>
          <RicochetBio />
          <PodcastList />
          <Team />
        </div>
        <div className='bg-[#080b19]'>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

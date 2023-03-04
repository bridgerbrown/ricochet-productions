import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Landing from '@/components/home/landing'
import OurTeam from '@/components/home/our-team'
import Mission from '@/components/home/mission'
import RicochetBio from '@/components/home/bio'
import Podcasts from '@/components/unused/podcasts'
import Contact from '@/components/home/contact'
import PodcastList from '@/components/home/podcast-list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricochet Productions</title>
      </Head>
      <div className='bg-white relative w-screen min-h-screen'>
        <Navbar />
        <Landing />
        <Mission />
        <RicochetBio />
        <PodcastList />
        <OurTeam />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

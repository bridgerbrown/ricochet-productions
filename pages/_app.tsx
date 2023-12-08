import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'

const manrope = localFont({ src: [
  {
    path: '../public/fonts/manrope/regular.otf',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../public/fonts/manrope/light.otf',
    weight: '300',
  },
  {
    path: '../public/fonts/manrope/thin.otf',
    weight: '200',
    style: 'normal',
  },
  {
    path: '../public/fonts/manrope/semibold.otf',
    weight: '500',
    style: 'normal',
  },
  {
    path: '../public/fonts/manrope/bold.otf',
    weight: '600',
    style: 'normal',
  },
],
variable: '--font-manrope'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ricochet Productions</title>
        <meta property="og:title" content="Ricochet Productions" />
        <meta property="og:image" content={"/logo.png"} />
        <meta
          property="og:description"
          content="Storytelling through audio. Long form audio documentaries on topics and issues for an engaged and thoughtful audience."
        />
        <meta name="title" content="Ricochet Productions" />
        <meta name="image" content={"/logo.png"} />
        <meta
          name="description"
          content="Storytelling through audio. Long form audio documentaries on topics and issues for an engaged and thoughtful audience."
        />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, target-densityDpi=device-dpi"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>

      </Head>
      <main className={`${manrope.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

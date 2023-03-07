import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

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
    <main className={`${manrope.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

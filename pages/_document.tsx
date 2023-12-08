import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth bg-[#080b19] overflow-x-hidden' style={{scrollBehavior:'smooth'}}>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

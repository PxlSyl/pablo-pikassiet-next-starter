import '@/styles/main.scss'
import { Signika, Space_Grotesk } from 'next/font/google'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'

import TwSizeIndicator from '@/components/helpers/TwSizeIndicator'
import Footer from '@/components/navigation/footer/Footer'
import { Header } from '@/components/navigation/menu'
import { SearchProvider } from '@/components/navigation/search/SearchProvider'
import Providers from '@/components/partials/Providers'

const signika = Signika({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signika',
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    description: siteMetadata.description,

    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${signika.variable} ${space_grotesk.variable} scroll-smooth`}
    >
      <head>
        {/* responsive meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* favicon */}
        <link rel="shortcut icon" href={siteMetadata.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>

      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <SearchProvider>
            <Header />
            <main>{children}</main>
          </SearchProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

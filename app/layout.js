import './globals.css'

export const metadata = {
  metadataBase: new URL('https://typerush.app'),
  title: {
    default: 'TypeRush — Free Typing Speed Test | WPM Test Online',
    template: '%s | TypeRush'
  },
  description: 'Test your typing speed with TypeRush — the fastest, most accurate free WPM typing test online. Real-time stats, multiple difficulty levels, code mode, and instant results.',
  keywords: [
    'typing test', 'typing speed test', 'wpm test', 'words per minute test',
    'free typing test', 'online typing test', 'typing speed checker',
    'keyboard typing test', 'typing practice', 'improve typing speed',
    'typing test for beginners', 'typing test for developers', 'code typing test',
    'typerush', 'fast typing test', 'accurate typing test'
  ],
  authors: [{ name: 'TypeRush' }],
  creator: 'TypeRush',
  publisher: 'TypeRush',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typerush.app',
    siteName: 'TypeRush',
    title: 'TypeRush — Free Typing Speed Test | WPM Test Online',
    description: 'Test your typing speed for free. Real-time WPM, accuracy, streaks. Multiple difficulty levels including code mode.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TypeRush - Free Typing Speed Test' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TypeRush — Free Typing Speed Test | WPM Test Online',
    description: 'Test your typing speed for free. Real-time WPM, accuracy, streaks. Multiple difficulty levels including code mode.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://typerush.app'
  },
  verification: {
    google: 'abc123xyz...'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d0d0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "TypeRush",
              "description": "Free online typing speed test with real-time WPM, accuracy tracking, streaks, and multiple difficulty levels including code mode.",
              "url": "https://typerush.app",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Any",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "featureList": [
                "Real-time WPM tracking",
                "Accuracy measurement",
                "Multiple time modes: 15s, 30s, 60s, 120s",
                "Four difficulty levels: Easy, Medium, Hard, Code",
                "Streak counter",
                "Instant results with grade"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kittiphat Wongsuwan // Senior Creative Frontend Developer & UI/UX Designer',
  description:
    'Award-winning portfolio of Kittiphat Wongsuwan. Blending futuristic minimalism, production-grade Next.js, and immersive 3D Three.js WebGL experiences.',
  keywords: [
    'Creative Developer',
    'Senior Frontend Developer',
    'UI/UX Designer',
    'Three.js Portfolio',
    'Next.js 16',
    'React 19',
    'WebGL Developer',
    'Full Stack Designer',
    'Bangkok Developer'
  ],
  authors: [{ name: 'Kittiphat Wongsuwan', url: 'https://github.com/kittiphat-dev' }],
  creator: 'Kittiphat Wongsuwan',
  metadataBase: new URL('https://portfolio-kittiphat.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'th_TH',
    url: 'https://portfolio-kittiphat.vercel.app',
    title: 'Kittiphat Wongsuwan // Senior Creative Developer',
    description:
      'Immersive creative developer portfolio featuring real-time 3D WebGL, micro-interactions, and futuristic minimalism.',
    siteName: 'Kittiphat Wongsuwan Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kittiphat Wongsuwan // Creative Developer',
    description:
      'Immersive creative developer portfolio featuring real-time 3D WebGL and futuristic minimalism.',
    creator: '@kittiphat_dev'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        {/* Structured Data for SEO / Personal Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kittiphat Wongsuwan',
              alternateName: 'Kai',
              jobTitle: 'Senior Creative Frontend Developer & UI/UX Designer',
              url: 'https://portfolio-kittiphat.vercel.app',
              sameAs: [
                'https://github.com/kittiphat-dev',
                'https://linkedin.com/in/kittiphat-wongsuwan',
                'https://twitter.com/kittiphat_dev'
              ],
              knowsAbout: [
                'Next.js',
                'React',
                'TypeScript',
                'Three.js',
                'WebGL',
                'Tailwind CSS',
                'UI/UX Design',
                'Design Systems',
                'Motion Design'
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#05070e] text-slate-100 font-sans antialiased min-h-screen selection:bg-cyan-400 selection:text-slate-950">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

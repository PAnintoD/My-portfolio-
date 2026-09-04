import type { Metadata } from 'next';
import { Inter, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thanapoom Sidaeng — Software, Automation & AI Vision Developer',
  description:
    'Portfolio ของ ธนภูมิ สีแดง (Thanapoom Sidaeng / PAnintoD) - นักพัฒนาซอฟต์แวร์, ระบบอัตโนมัติ (Automation), AI Computer Vision (YOLOv8, OCR) และการเชื่อมต่อฮาร์ดแวร์ IoT',
  keywords: [
    'Thanapoom Sidaeng',
    'ธนภูมิ สีแดง',
    'PAnintoD',
    'Software Developer Thailand',
    'AI Computer Vision',
    'YOLOv8',
    'EasyOCR',
    'C# WinForms',
    'Arduino IoT',
    'React',
    'Firebase POS',
    'n8n Automation',
    'Linux Ubuntu'
  ],
  authors: [{ name: 'Thanapoom Sidaeng', url: 'https://github.com/PAnintoD' }],
  creator: 'Thanapoom Sidaeng',
  metadataBase: new URL('https://my-portfolio-panintod.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    alternateLocale: 'en_US',
    url: 'https://my-portfolio-panintod.vercel.app',
    title: 'ธนภูมิ สีแดง (Thanapoom Sidaeng) // Software, Automation & AI Vision Developer',
    description:
      'นักพัฒนาที่เน้นการลงมือสร้างจริง ถนัดการเชื่อมต่อซอฟต์แวร์เข้ากับฮาร์ดแวร์ IoT, การประมวลผลภาพด้วย AI และการพัฒนาระบบหลังบ้าน',
    siteName: 'Thanapoom Sidaeng Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thanapoom Sidaeng // Software & AI Vision Developer',
    description:
      'Hands-on builder bridging software, IoT microcontrollers, and real-time AI computer vision.',
    creator: '@PAnintoD'
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
    <html lang="th" className={`${inter.variable} ${manrope.variable} ${ibmPlexMono.variable} scroll-smooth dark`}>
      <head>
        {/* Structured Data for SEO / Personal Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'ธนภูมิ สีแดง',
              alternateName: 'Thanapoom Sidaeng',
              jobTitle: 'Software, Automation & AI Vision Developer',
              url: 'https://my-portfolio-panintod.vercel.app',
              sameAs: [
                'https://github.com/PAnintoD',
                'https://github.com/PAnintoD/My-portfolio-'
              ],
              knowsAbout: [
                'Python',
                'C# (.NET WinForms)',
                'JavaScript',
                'Lua',
                'YOLOv8',
                'EasyOCR',
                'OpenCV',
                'Arduino & Hardware IoT',
                'React',
                'Firebase',
                'n8n Workflow Automation',
                'Linux (Ubuntu)'
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${ibmPlexMono.variable} bg-[#080A0F] text-[#F0F3F6] font-sans antialiased min-h-screen selection:bg-[#7F9AB8]/30 selection:text-[#F0F3F6]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

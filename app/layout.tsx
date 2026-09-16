import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './globals.css';

const SITE_URL = 'https://obxalethia.art';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Alethia | Smart Contract Chamber for Institutional Deal Execution',
    template: '%s | Alethia'
  },
  description:
    'OBX Alethia is a smart contract chamber for institutional deal execution, starting with live three-way invoice matching. Built in South Africa on a path to FSP and CASP licensing.',
  applicationName: 'OBX Alethia',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/icons/OBXAlethia-Favicon.png', type: 'image/png' }]
  },
  openGraph: {
    type: 'website',
    siteName: 'OBX Alethia',
    url: SITE_URL,
    title: 'Alethia | Smart Contract Chamber for Institutional Deal Execution',
    description:
      'Your invoice approvals take three weeks. On-chain, they take three seconds. See the live three-way matching proof.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alethia | Smart Contract Chamber for Institutional Deal Execution',
    description:
      'Your invoice approvals take three weeks. On-chain, they take three seconds. See the live three-way matching proof.'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#151a1c'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

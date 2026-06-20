import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';


export const metadata: Metadata = {
  title: 'Alethia | Web3 ERP',
  description: 'OBX Alethia Web3 ERP platform for governed workflows, AI agents, and institutional operations.',
  applicationName: 'OBX ALETHIA',
  manifest: `/manifest.json`,
  icons: {
    icon: [{ url: '/icons/OBXAlethia-Favicon.png', type: 'image/png' }]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#020617'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect so font/CDN connections open immediately */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        {/* Fonts with display=swap so text renders immediately with fallback */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #020617;
            color: #e2e8f0;
            /* Eliminate 300ms tap delay globally on all touch devices */
            touch-action: manipulation;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
          }
          /* Ensure all interactive elements have no tap delay */
          a, button, [role="button"] {
            touch-action: manipulation;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0f172a;
          }
          ::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #475569;
          }
        `}</style>
      </head>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

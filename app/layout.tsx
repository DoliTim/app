import './globals.css';
import type { Metadata } from 'next';
import { NativeBridge } from '@/lib/native-bridge';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Frequency Healing App',
  description: 'Sacred frequency healing and meditation practice',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'FreqHeal',
  },
  icons: {
    apple: [
      { url: '/icons/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'FreqHeal',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    NativeBridge.initializeApp();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
        <link 
          rel="apple-touch-startup-image" 
          href="/splash/apple-splash-2048-2732.png" 
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" 
        />
        {/* Add more splash screen sizes for different iOS devices */}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <BackgroundFrequency />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
} 
'use client';

import './globals.css';
import type { Metadata } from 'next';
import { NativeBridge } from '@/lib/native-bridge';
import { useEffect } from 'react';

// Move metadata to a separate config file since we're using 'use client'
import { metadata } from '@/lib/metadata';
export { metadata };

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
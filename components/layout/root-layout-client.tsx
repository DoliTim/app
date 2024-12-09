'use client';

import React, { useEffect } from 'react';
import { NativeBridge } from '@/lib/native-bridge';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { BackgroundFrequency } from '@/components/background-frequency';
import { Toaster } from '@/components/ui/toaster';

export function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    NativeBridge.initializeApp();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <BackgroundFrequency />
      </div>
      <Toaster />
    </ThemeProvider>
  );
} 
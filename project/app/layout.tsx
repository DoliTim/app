import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundFrequency } from '@/components/background-frequency';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Schumann - Earth Frequency Healing',
  description: 'Experience the power of Earth\'s natural 7.83 Hz frequency through our revolutionary device and comprehensive learning platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
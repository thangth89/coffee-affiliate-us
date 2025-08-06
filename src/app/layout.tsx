// 2. Fix layout.tsx - Thêm suppressHydrationWarning
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReviewBanner from '@/components/ui/ReviewBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AeroPress Clone - Press for Better Coffee',
  description: 'Experience the perfect brew with our patented brewing technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ReviewBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
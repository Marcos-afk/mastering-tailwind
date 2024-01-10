import './globals.scss';

import { Sidebar } from '@src/components/sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mastering TailwindCSS',
  description: 'Learn how to use TailwindCSS to build modern websites.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

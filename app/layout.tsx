import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';

import {theme} from '@/theme';

import '@mantine/core/styles.css';
import './global.css';
import {Header, NavBar} from '@/components';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'WGXCDC',
  description: 'Women and Gender eXpansive Coders DC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <MantineProvider theme={theme}>
        <body className={inter.className}>
          <Header />
          <NavBar />
          {children}
        </body>
      </MantineProvider>
    </html>
  );
}

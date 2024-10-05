import './globals.css';
import React from 'react';
import GA from '@/utils/ga';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://cursor-party.aliceisjustplaying.partykit.dev/cursors.js"></Script>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
      <GA />
    </html>
  );
}

import './globals.css';
import React from 'react';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"></Script>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7d35b560a68b4b0bb695d5cb8bc7ddff"}'
        ></Script>
      </body>
    </html>
  );
}

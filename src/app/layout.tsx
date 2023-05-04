import './globals.css';
import React from 'react';

export const metadata = {
  title: 'bsky.sh',
  description: 'bsky.sh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/under-construction-favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/under-construction-favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/under-construction-favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>bsky.sh</title>
        <meta name="description" content="bsky.sh" />

        <meta property="og:url" content="https://bsky.sh" />
        <meta property="og:type" content="bsky.sh" />
        <meta property="og:title" content="bsky.sh" />
        <meta property="og:description" content="bsky.sh" />
        <meta property="og:image" content="https://bsky.sh/under-construction-favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bsky.sh" />
        <meta property="twitter:url" content="https://bsky.sh" />
        <meta name="twitter:title" content="bsky.sh" />
        <meta name="twitter:description" content="bsky.sh" />
        <meta name="twitter:image" content="https://bsky.sh/under-construction-favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

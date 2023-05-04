import React from 'react';

export const metadata = {
  title: 'alice.bsky.sh',
  description: 'alice.bsky.sh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/alice.site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>hi i&apos;m alice</title>
        <meta name="description" content="hi i'm alice" />

        <meta property="og:url" content="https://alice.bsky.sh" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="alice.bsky.sh" />
        <meta property="og:description" content="hi i'm alice" />
        <meta property="og:image" content="https://alice.bsky.sh/android-chrome-512x512.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="alice.bsky.sh" />
        <meta property="twitter:url" content="https://alice.bsky.sh" />
        <meta name="twitter:title" content="alice.bsky.sh" />
        <meta name="twitter:description" content="hi i'm alice" />
        <meta name="twitter:image" content="https://alice.bsky.sh/android-chrome-512x512.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { headers } from 'next/headers';

export function generateMetadata(): Metadata {
  const title = `BCL13 Talk Links and Resources`;
  const description = 'Links and resources for my BCL13 talk';
  const icon = '/bcl13.png';
  const absoluteUrl = `https://bcl13.bsky.sh`;
  const absoluteIconUrl = `https://bsky.sh${icon}`;

  return {
    title: title,
    description: description,
    icons: {
      icon: icon,
      apple: icon,
      shortcut: icon,
    },
    openGraph: {
      title: title,
      description: description,
      url: absoluteUrl,
      siteName: title,
      images: [
        {
          url: absoluteIconUrl,
        },
      ],
    },
    twitter: {
      card: 'summary',
      site: absoluteUrl,
      title: title,
      description: description,
      creator: '@__justplaying',
      images: absoluteIconUrl,
    },
  };
}

export default async function Page() {
  return (
    <>
      <div className="main">
        <h1>Thanks for coming to my talk!</h1>
        <Link href={`https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf`}>@alice.mosphere.at</Link> on Bluesky
        <h2>My projects</h2>
        <ul>
          <li>
            <Link href={`https://alice.bsky.sh`}>My blog</Link>
          </li>
          <li>
            <Link href={`https://emojistats.bsky.sh`}>Emoji Stats for Bluesky</Link>
          </li>
          <li>
            <Link href={`https://github.com/aliceisjustplaying/labeler-starter-kit-bsky`}>Bluesky Labeler Starter Kit</Link>
          </li>
          <li>
            <Link href={`https://bluesky-heatmap.fly.dev`}>Bluesky Posts Heatmap Generator</Link>
          </li>
          <li>
            <Link href={`https://github.com/aliceisjustplaying/languagestats-bsky`}>Language Stats</Link>
          </li>
          <li>
            <Link href={`https://alice.bsky.sh/post/3laega7icmi2q`}>How to self-host all of Bluesky except the AppView (for now)</Link>
          </li>
        </ul>
        <h2>Labelers</h2>
        <ul>
          <li>
            <Link href={`https://sortinghat.bsky.sh`}>sorting hat</Link>
          </li>
          <li>
            <Link href={`https://zodiacsigns.bsky.sh`}>zodiac signs</Link>
          </li>
          <li>
            <Link href={`https://mbti.bsky.sh`}>MBTI</Link>
          </li>
          <li>
            <Link href={`https://eras.bsky.sh`}>Taylor Swift Eras</Link>
          </li>
        </ul>
        <h2>Other Links</h2>
        <ul>
          <li>
            <Link href={`https://www.youtube.com/watch?v=F1sJW6nTP6E`}>Dan Abramov: Web Without Walls</Link>
          </li>
          <li>
            <Link href={`https://github.com/notjuliet/awesome-bluesky`}>Awesome Bluesky</Link>
          </li>
          <li>
            <Link href={`https://clearsky.app/`}>Clearsky</Link>
          </li>
          <li>
            <Link href={`https://tokimekibluesky.vercel.app/`}>Tokimeki Bluesky</Link>
          </li>
          <li>
            <Link href={`https://wolfgang.raios.xyz/`}>Wolfgang&apos;s Bluesky tools</Link>
          </li>
          <li>
            <Link href={`https://mary-ext.codeberg.page/bluesky-quiet-posters/`}>Bluesky Quiet Posters</Link>
          </li>
          <li>
            <Link href={`https://pdsls.dev`}>PDSLS</Link>
          </li>
        </ul>
        <h2>Support my work!</h2>
        <p>
          If you found this talk helpful, consider supporting me on <Link href={`https://github.com/sponsors/aliceisjustplaying`}>GitHub Sponsors</Link> or <Link href={`https://ko-fi.com/aliceisjustplaying`}>Ko-fi</Link>.
        </p>
      </div>
    </>
  );
}

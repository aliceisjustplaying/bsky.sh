import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { headers } from 'next/headers';

export function generateMetadata(): Metadata {
  const title = `Causal Islands Berlin 2024 Talk Links and Resources`;
  const description = 'Links and resources for my Causal Islands Berlin 2024 talk';
  const icon = '/ci.png';
  const absoluteUrl = `https://ci2024.bsky.sh`;
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
        <h2>My projects</h2>
        <ul>
          <li>
            <Link href={`https://emojistats.bsky.sh`}>Emoji Stats for Bluesky</Link>&nbsp;<b>(New!)</b>
          </li>
          <li>
            <Link href={`https://bluesky-heatmap.fly.dev`}>Bluesky Posts Heatmap Generator</Link>
          </li>
          <li>
            <Link href={`https://github.com/aliceisjustplaying/languagestats-bsky`}>Language Stats</Link>
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
            <Link href={`https://wolfgang.raios.xyz/`}>Wolfgang's Blueskytools</Link>
          </li>
          <li>
            <Link href={`https://mary-ext.codeberg.page/bluesky-quiet-posters/`}>Bluesky Quiet Posters</Link>
          </li>
          <li>
            <Link href={`https://psky.social/`}>Picosky</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

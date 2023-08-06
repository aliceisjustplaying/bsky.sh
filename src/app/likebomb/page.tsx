import type { Metadata } from 'next';
import React from 'react';
import { CodeBlock } from '../../utils/highlight';
// @ts-expect-error
import bookmarkleter from 'bookmarkleter';

export function generateMetadata(): Metadata {
  const title = `Unified (Bluesky + Klearsky + Twitter) Like Bomb`;
  const description = 'A way to like all posts in a thread easily.';
  const icon = '/revolving-hearts.png';
  const absoluteUrl = `https://likebomb.bsky.sh`;
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
      creator: '@alice.bsky.sh',
      images: absoluteIconUrl,
    },
  };
}

const code = `var d = document;
var $$ = d.querySelectorAll.bind(d);
var l = window.location.hostname;
switch (true) {
case l.includes('bsky.app'):
  var likeButtons = $$('div[aria-label="Like"]');
  var filteredLikeButtons = [...likeButtons].filter(likeButton => !!likeButton.offsetParent);
  filteredLikeButtons.forEach(e => e.click());
  break;
case l.includes('klearsky.pages.dev'):
  var likeButtons = $$('button[class~="like-count"][data-liked="false"]');
  likeButtons.forEach(e => e.click());
  break;
case l.includes('twitter.com'):
case l.includes('x.com'):
  var likeButtons = $$('div[data-testid="like"]');
  likeButtons.forEach(e => e.click());
  break;
}`;

const bookmarklet = bookmarkleter(code, {
  urlencode: true,
  iife: true,
  minify: true,
});

const bookmarkletHref = `<a href="${bookmarklet}">💞 like bomb 💞</a>`;

export default function Page() {
  return (
    <div style={{ width: '800px;' }}>
      <h1>Unified (Bluesky + Klearsky + Twitter) Like Bomb</h1>
      <div>
        Drag this to your bookmarks bar. Clicking it will like every visible post in the thread on Bluesky and{' '}
        <a href="https://klearsky.pages.dev">Klearsky</a>, and mostly all like buttons on a page on Twitter. You may
        have to scroll a bit on the latter to get them all; that&apos;s because Twitter unloads tweets as you scroll.
        <br />
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: bookmarkletHref,
          }}
        ></div>
        <br />
        <a href="https://page.brick.do/like-bomb-bookmarklet-lkKreDvYyP4d">Original twitter version</a> by{' '}
        <a href="https://staging.bsky.app/profile/did:plc:xbxpdv7nstw5ybmlneupnuaa">@nvpkp.bsky.social</a>. Created with
        help from the <a href="https://discord.gg/3srmDsHSZJ">Bluesky API Touchers Discord</a>. Bookmarklet created with{' '}
        <a href="https://chriszarate.github.io/bookmarkleter/">Bookmarkleter</a>.
      </div>
      <br />
      <div>
        Unminified source code:
        <CodeBlock code={code} language="javascript" />
      </div>
    </div>
  );
}

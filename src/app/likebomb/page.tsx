import type { Metadata } from 'next';
import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export function generateMetadata(): Metadata {
  const title = `Unified (Bluesky + Twitter) Like Bomb`;
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
var l = window.location.href;
if (l.includes('bsky.app')) {
  var allLikeButtons = $$('div[aria-label="Like"]');
  var filteredLikeButtons = [...allLikeButtons].filter(likeButton => !!likeButton.offsetParent);
  filteredLikeButtons.forEach((e) => e.click());
} else if (l.includes('twitter.com')) {
  var allLikeButtons = $$('div[data-testid="like"]');
  allLikeButtons.forEach((e) => e.click());
}`;

export default function Page() {
  return (
    <div style={{ width: '700px;' }}>
      <h1>Unified (Bluesky + Twitter) Like Bomb</h1>
      <div>
        Drag this to your bookmarks bar. Clicking it will like every visible post in the thread on Bluesky, and mostly
        all like buttons on a page on Twitter. You may have to scroll a bit on the latter to get them all; that&apos;s
        because Twitter unloads tweets as you scroll.
        <br />
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<a href="javascript:void%20function(){var%20a=document,b=a.querySelectorAll.bind(a),c=window.location.href;if(c.includes(%22bsky.app%22)){var%20d=b(%22div[aria-label=%22Like%22]%22),e=[...d].filter(a=%3E!!a.offsetParent);e.forEach(a=%3Ea.click())}else%20if(c.includes(%22twitter.com%22)){var%20d=b(%22div[data-testid=%22like%22]%22);d.forEach(a=%3Ea.click())}}();">💞 like bomb 💞</a>',
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
        <summary>(mostly) Unminified source code:</summary>
        <details>
          <pre
            dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
          ></pre>
        </details>
      </div>
    </div>
  );
}

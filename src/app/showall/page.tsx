import type { Metadata } from 'next';
import React from 'react';
import { CodeBlock } from '../../utils/highlight';
// @ts-expect-error
import bookmarkleter from 'bookmarkleter';

export function generateMetadata(): Metadata {
  const title = `Show All Replies`;
  const description = 'Quickly show all posts from people you muted in a thread.';
  const icon = '/see-no-evil-monkey.png';
  const absoluteUrl = `https://showall.bsky.sh`;
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
  [...$$('div')]
  .filter(div => div.innerHTML.trim() === 'Show post')
  .filter(div => !!div.offsetParent)
  .forEach(e => e.click());
  break;
case l.includes('twitter.com'):
case l.includes('x.com'):
  [...$$('span')]
  .filter(div => div.innerHTML.trim() === 'View')
  .forEach(e => e.click());
  break;
}`;

const bookmarklet = bookmarkleter(code, {
  urlencode: true,
  iife: true,
  minify: true,
});

const bookmarkletHref = `<a href="${bookmarklet}">🙈 show all 🙈</a>`;

export default function Page() {
  return (
    <div style={{ width: '800px;' }}>
      <h1>Show All Replies</h1>
      <div>
        Drag this to your bookmarks bar. Clicking it will show all replies in a Bluesky or Twitter thread from people
        you muted.
        <br />
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: bookmarkletHref,
          }}
        ></div>
        <br />
        Bookmarklet created with <a href="https://chriszarate.github.io/bookmarkleter/">Bookmarkleter</a>.
      </div>
      <br />
      <div>
        Unminified source code:
        <CodeBlock code={code} language="javascript" />
      </div>
    </div>
  );
}

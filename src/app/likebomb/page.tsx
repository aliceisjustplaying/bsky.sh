import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const title = `Bluesky Like Bomb`;
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

export default function Page() {
  return (
    <>
      <div>
        Drag this to your bookmarks bar. Clicking it will like every visible post in the thread.
        <br />
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<a href="javascript:void%20function()%7Bconst%20a=document.querySelectorAll(%22div%5Baria-label=%5C%22Like%5C%22%5D%22),b=%5B...a%5D.filter(a=%3E!!a.offsetParent);b.forEach(a=%3Ea.click())%7D();">bsky like bomb</a>',
          }}
        ></div>
        <br />
        <a href="https://page.brick.do/like-bomb-bookmarklet-lkKreDvYyP4d">Original twitter version</a> by{' '}
        <a href="https://staging.bsky.app/profile/did:plc:xbxpdv7nstw5ybmlneupnuaa">@nvpkp.bsky.social</a>.
      </div>
    </>
  );
}

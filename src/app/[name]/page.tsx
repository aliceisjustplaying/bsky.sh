import GA from '@/utils/ga';
import type { Metadata } from 'next';

interface person {
  name: string;
}

export function generateMetadata({ params }: { params: person }): Metadata {
  const title = `${params.name}.bsky.sh`;
  const description = 'nothing to see here';
  const icon = '/nope.png';
  const absoluteUrl = `https://${params.name}.bsky.sh`;
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

export default function Page({ params }: { params: person }) {
  return (
    <>
      <div>{params.name} does not exist</div>
      <GA />
    </>
  );
}

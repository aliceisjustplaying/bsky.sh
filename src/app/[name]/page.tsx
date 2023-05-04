import GA from '@/utils/ga';
import type { Metadata } from 'next';

interface person {
  name: string;
}

export function generateMetadata({ params }: { params: person }): Metadata {
  return {
    title: `${params.name}.bsky.sh`,
    description: 'nothing to see here',
    icons: '/nope.png',
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

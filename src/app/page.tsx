import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';

export const metadata = {
  title: 'bsky.sh',
  description: 'bsky.sh',
};

export default async function Page() {
  const host = headers().get('host');
  const protocol = headers().get('x-forwarded-proto');
  return (
    <>
      <div className="main">
        <h1>My Bluesky things</h1>
        <Link href={`${protocol}://alice.${host}`}>@alice.bsky.sh</Link> (me)
        <h2>Bookmarklets:</h2>
        <Link href={`${protocol}://likebomb.${host}`}>💞 like bomb bookmarklet 💞</Link>
        <Link href={`${protocol}://showall.${host}`}>🙈 show all bookmarklet 🙈</Link>
        <h2>Bluesky Labelers:</h2>
        <Link href={`${protocol}://sortinghat.${host}`}>sorting hat bluesky labeler</Link>
        <Link href={`${protocol}://zodiacsigns.${host}`}>zodiac signs bluesky labeler</Link>
        <h2>Other projects:</h2>
        <Link href={`https://emojistats.bsky.sh`}>Emoji Stats for Bluesky</Link> <b>(New!)</b>
        <Link href={`https://bluesky-heatmap.fly.dev`}>Bluesky Posts Heatmap Generator</Link>
      </div>
      <footer>
        <Image src="/underconstruction.gif" width={459} height={51} alt="under construction" />
      </footer>
    </>
  );
}

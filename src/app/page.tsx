import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';

export const metadata = {
  title: 'bsky.sh',
  description: 'bsky.sh',
};

export default async function Page() {
  const host = (await headers()).get('host');
  const protocol = (await headers()).get('x-forwarded-proto');
  return (
    <>
      <div className="main">
        <h1>🦋 My Bluesky things</h1>
        <Link href={`${protocol}://alice.${host}`}>@alice.bsky.sh</Link>&nbsp;(me)
        <h2>👩‍💻 Projects</h2>
        <Link href={`https://emojistats.bsky.sh`}>Emoji Stats for Bluesky</Link>&nbsp;<b>(New!)</b>
        <br />
        <Link href={`https://bluesky-heatmap.fly.dev`}>Bluesky Posts Heatmap Generator</Link>
        <br />
        <Link href={`${protocol}://perlsky.${host}`}>perlsky</Link>
        <br />
        <Link href={`${protocol}://atproto-smoke.${host}`}>atproto-smoke</Link>
        <h2>🏷️ Labelers</h2>
        <Link href={`${protocol}://sortinghat.${host}`}>sorting hat</Link>
        <br />
        <Link href={`${protocol}://zodiacsigns.${host}`}>zodiac signs</Link>
        <h2>🔖 Bookmarklets</h2>
        <Link href={`${protocol}://likebomb.${host}`}>💞 like bomb 💞</Link>
        <br />
        <Link href={`${protocol}://showall.${host}`}>🙈 show all 🙈</Link>
      </div>
      {/* <footer>
        <Image src="/underconstruction.gif" width={459} height={51} alt="under construction" />
      </footer> */}
    </>
  );
}

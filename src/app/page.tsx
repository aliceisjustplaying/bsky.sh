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
        <Link href={`${protocol}://likebomb.${host}`}>💞 like bomb bookmarklet 💞</Link>
        <Link href={`${protocol}://showall.${host}`}>🙈 show all bookmarklet 🙈</Link>
        <Link href={`${protocol}://alice.${host}`}>me</Link>
        <Link href={`${protocol}://sortinghat.${host}`}>sorting hat bluesky labeler</Link>
        <Link href={`${protocol}://zodiacsigns.${host}`}>zodiac signs bluesky labeler</Link>
      </div>
      <footer>
        <Image src="/underconstruction.gif" width={459} height={51} alt="under construction" />
      </footer>
    </>
  );
}

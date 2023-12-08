import Image from 'next/image';
// import Link from 'next/link';
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
        {/* <Link href="https://likebomb.bsky.sh">💞 like bomb bookmarklet 💞</Link>
        <Link href="https://showall.bsky.sh">🙈 show all bookmarklet 🙈</Link>
        <Link href="https://alice.bsky.sh">me</Link> */}
        <a href={`${protocol}://likebomb.${host}`}>💞 like bomb bookmarklet 💞</a>
        <a href={`${protocol}://showall.${host}`}>🙈 show all bookmarklet 🙈</a>
        <a href={`${protocol}://alice.${host}`}>me</a>
      </div>
      <footer>
        <Image src="/underconstruction.gif" width={459} height={51} alt="under construction" />
      </footer>
    </>
  );
}

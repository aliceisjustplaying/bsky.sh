import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'bsky.sh',
  description: 'bsky.sh',
};

export default function Page() {
  return (
    <>
      <div className="main">
        <Link href="https://likebomb.bsky.sh">💞 like bomb bookmarklet 💞</Link>
        <Link href="https://showall.bsky.sh">🙈 show all bookmarklet 🙈</Link>
        <Link href="https://alice.bsky.sh">me</Link>
      </div>
      <footer>
        <Image src="/underconstruction.gif" width={459} height={51} alt="under construction" />
      </footer>
    </>
  );
}

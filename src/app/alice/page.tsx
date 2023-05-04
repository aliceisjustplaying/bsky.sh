import GA from '@/utils/ga';

export const metadata = {
  title: 'alice.bsky.sh',
  description: "i'm alice",
};

export default function Home() {
  return (
    <>
      <div>hi i&apos;m alice</div>
      <GA />
    </>
  );
}

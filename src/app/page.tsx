import GA from '@/utils/ga';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="main">
        <Image src="/underconstruction.gif" width={459} height={51} alt="under construction" />
      </div>
      <GA />
    </>
  );
}

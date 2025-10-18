'use client';

import Button from '../ui/Button';
import Image from 'next/image';

export default function SponsorsSection() {

  const handleSponsorClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScSUsAlk9RGCOo_-LM2nO0guPPgDawrikoOQ6mLOVRf2pgURw/viewform');
  }

  return (
    <div className="sponsors-section my-16" id="sponsors">      
      <div style={{ maxWidth: '400px', margin: '20px auto' }}>
        <Button 
          className="!bg-[#25773b] !text-[#f5f6f6] !w-full !rounded-2xl gap-2 hover:!bg-[#1e5f2f]"
          onClick={handleSponsorClick}
        >
          <Image src="/handshake.svg" alt="" width={24} height={24} />
          Sponsor Olmak İster misiniz?
        </Button>

        <h3 className="text-white text-5xl font-semibold leading-none tracking-[-0.04em] text-center mt-8">
          💎 Ana Sponsor
        </h3>
        <Image src="/google-developers.svg" alt="" width={364} height={64} className="mt-8 mx-auto block" style={{ marginTop: '64px' }} />
      </div>
    </div>
  );
}

'use client';

import Button from '../ui/Button';
import Image from 'next/image';

export default function SpeakersSection() {
  
  const handleSpeakerClick = () => {
    window.location.href = '#';
  }

  return (
    <div className="speakers-section my-32" id="speakers">      
      <div style={{ maxWidth: '400px', margin: '20px auto' }}>
        <Button 
          className="!bg-[#E4AB04] !text-white !w-full !rounded-2xl gap-2 hover:!bg-[#cc9903]"
          onClick={handleSpeakerClick}
        >
          <Image src="/mic.svg" alt="" width={24} height={24} />
          Konuşmacı Olmak İster misiniz?
        </Button>
      </div>
    </div>
  );
}

'use client';

import Button from '../ui/Button';
import Image from 'next/image';
import SponsorCard from '../ui/SponsorCard';
import { useState, useEffect } from 'react';

export default function SponsorsSection() {
  const handleSponsorClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScSUsAlk9RGCOo_-LM2nO0guPPgDawrikoOQ6mLOVRf2pgURw/viewform');
  };

  const goldSponsors = [
    { label: "Sponsor 1", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 1" },
    { label: "Sponsor 2", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 2" },
    { label: "Sponsor 3", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 3" },
    { label: "Sponsor 4", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 4" },
    { label: "Sponsor 5", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 5" },
    { label: "Sponsor 6", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 6" },
    { label: "Sponsor 7", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 7" },
    { label: "Sponsor 8", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Sponsor 8" },
  ];

  const silverSponsors = [
    { label: "Silver Sponsor 1", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 1" },
    { label: "Silver Sponsor 2", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 2" },
    { label: "Silver Sponsor 3", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 3" },
    { label: "Silver Sponsor 4", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 4" },
    { label: "Silver Sponsor 5", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 5" },
    { label: "Silver Sponsor 6", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 6" },
    { label: "Silver Sponsor 7", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 7" },
    { label: "Silver Sponsor 8", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 8" },
    { label: "Silver Sponsor 9", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 9" },
    { label: "Silver Sponsor 10", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 10" },
    { label: "Silver Sponsor 11", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 11" },
    { label: "Silver Sponsor 12", src: "/google-developers-logo-png_seeklogo-394547.webp", alt: "Silver Sponsor 12" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="sponsors" className="py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Sponsor Ol Butonu */}
        <div className="max-w-md mx-auto mb-16">
          <Button
            className="!bg-[#25773b] !text-[#f5f6f6] !w-full !rounded-2xl gap-2 hover:!bg-[#1e5f2f]"
            onClick={handleSponsorClick}
          >
            <Image src="/handshake.svg" alt="" width={24} height={24} />
            Sponsor Olmak İster misiniz?
          </Button>
        </div>

        {/* Ana Sponsor */}
        <div className="mb-20">
          <h3 className="text-white text-4xl md:text-5xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            💎 Ana Sponsor
          </h3>
          <div className="flex justify-center">
            <Image
              src="/google-developers.svg"
              alt="Google Developers"
              width={364}
              height={64}
              className="max-w-full h-auto"
              loading='lazy'
              priority={false}
            />
          </div>
        </div>

        {/* Altın Sponsorlar */}
        <div className="mb-20">
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            🥇 Altın Sponsorlar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-[38px] md:gap-y-8">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                label={sponsor.label}
                src={sponsor.src}
                alt={sponsor.alt}
                size={isMobile ? 'small' : 'large'}
              />
            ))}
          </div>
        </div>

        {/* Gümüş Sponsorlar */}
        <div>
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            🥈 Gümüş Sponsorlar
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-x-[38px] md:gap-y-8">
            {silverSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                label={sponsor.label}
                src={sponsor.src}
                alt={sponsor.alt}
                size={isMobile ? 'small' : 'large'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
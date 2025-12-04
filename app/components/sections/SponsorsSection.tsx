'use client';

import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import SponsorCard from '../ui/SponsorCard';
import { useState, useEffect } from 'react';

export default function SponsorsSection() {
  const handleSponsorClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScSUsAlk9RGCOo_-LM2nO0guPPgDawrikoOQ6mLOVRf2pgURw/viewform');
  };

  const goldSponsors = [
    { label: "Kartaca", src: "/kartaca.png", alt: "Gold Sponsor Kartaca", href: "https://kartaca.com/", customSize: 189, backgroundColor: 'white' }
  ];

  const silverSponsors = [
    { label: "42 Türkiye", src: "/42_türkiye_beyaz.png", alt: "Silver Sponsor 42", href: "https://bilisimvadisi.com.tr/markalar/42-turkiye/" },
  ];

  const bronzSponsors = [
    { label: "Kou Teknopark", src: "/kou.png", alt: "Bronz Sponsor Kou Tekno", href: "https://kouteknopark.com/" },
    { label: "American Life", src: "/american.jpg", alt: "Bronz Sponsor American Life", href: "https://www.americanlife.com.tr/ingilizce-kursu/" },
  ];

  const medyaSponsors = [
    { label: "Çetkin Agency", src: "/cetkin-agency.png", alt: "Medya Sponsoru Çetkin Agency", href: "https://www.instagram.com/cetkin.agency/" },
  ];

  const etkinlikSponsors = [
    { label: "MyWigis", src: "/mywigi.jpeg", alt: "3D Yazıcı Sponsoru MyWigis", href: "https://www.instagram.com/mywigis/" },
    { label: "Miles Coffee", src: "/miles.png", alt: "Kahve Sponsoru Miles Coffee", href: "https://milescoffee.co/" },
    { label: "Miuul", src: "/miuul.png", alt: "Miuul", href: "https://miuul.com/" },
    { label: "Wish and Light", src: "/wishlight.jpg", alt: "Mum Sponsoru Wish and Light", href: "https://www.instagram.com/wish_and_light/" },

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
         <div className="mb-20">
          <h3 className="text-white text-4xl md:text-5xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            💎 Ana Sponsor
          </h3>
          <div className="flex justify-center">
            <Link href="https://developers.google.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/googlefordevelopers.svg"
                alt="GoogleDevelopers"
                width={364}
                height={64}
                className="max-w-full h-auto"
                loading='lazy'
                priority={false}
              />
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            🥇 Altın Sponsorlar
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-x-[38px] md:gap-y-8">
            {goldSponsors.map((sponsor, index) => (
              <Link key={index} href={sponsor.href} target="_blank" rel="noopener noreferrer">
                <SponsorCard
                  label={sponsor.label}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  size={isMobile ? 'small' : 'large'}
                  customSize={sponsor.customSize}
                  backgroundColor={sponsor.backgroundColor}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            🥈 Gümüş Sponsorlar
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-x-[38px] md:gap-y-8">
            {silverSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                label={sponsor.label}
                src={sponsor.src}
                alt={sponsor.alt}
                size={isMobile ? 'small' : 'large'}
                href={sponsor.href}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            🥉 Bronz Sponsorlar
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-x-[38px] md:gap-y-8">
            {bronzSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                label={sponsor.label}
                src={sponsor.src}
                alt={sponsor.alt}
                size={isMobile ? 'small' : 'large'}
                href={sponsor.href}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            📰 Medya Sponsoru
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-x-[38px] md:gap-y-8">
            {medyaSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                label={sponsor.label}
                src={sponsor.src}
                alt={sponsor.alt}
                size={isMobile ? 'small' : 'large'}
                href={sponsor.href}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-center mb-12">
            🎉 Partnerlerimiz
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-x-[38px] md:gap-y-8">
            {etkinlikSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                label={sponsor.label}
                src={sponsor.src}
                alt={sponsor.alt}
                size={isMobile ? 'small' : 'large'}
                href={sponsor.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
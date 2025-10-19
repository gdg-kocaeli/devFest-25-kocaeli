'use client';
import ProfileCard from '../ui/ProfileCard';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function SpeakersSection() {
  const speakers = [

    {
      name: 'M. Halil',
      surname: 'Akkaynak',
      title: 'Organizer',
      image: '/organizer-mha.png',
    },
    {
      name: 'Efe Alp',
      surname: 'Tuncel',
      title: 'Organizer',
      image: '/organizer-eat.jpeg',
    },
    {
      name: 'Ecem',
      surname: 'Yalçın',
      title: 'Organizer',
      image: '/organizer-ey.jpeg',
    },
    {
      name: 'M. Halil',
      surname: 'Akkaynak',
      title: 'Organizer',
      image: '/organizer-mha.png',
    },
    {
      name: 'Efe Alp',
      surname: 'Tuncel',
      title: 'Organizer',
      image: '/organizer-eat.jpeg',
    },
    {
      name: 'Ecem',
      surname: 'Yalçın',
      title: 'Organizer',
      image: '/organizer-ey.jpeg',
    },
    {
      name: 'M. Halil',
      surname: 'Akkaynak',
      title: 'Organizer',
      image: '/organizer-mha.png',
    },
    {
      name: 'Efe Alp',
      surname: 'Tuncel',
      title: 'Organizer',
      image: '/organizer-eat.jpeg',
    },
    {
      name: 'Ecem',
      surname: 'Yalçın',
      title: 'Organizer',
      image: '/organizer-ey.jpeg',
    },
    {
      name: 'M. Halil',
      surname: 'Akkaynak',
      title: 'Organizer',
      image: '/organizer-mha.png',
    },
    {
      name: 'Efe Alp',
      surname: 'Tuncel',
      title: 'Organizer',
      image: '/organizer-eat.jpeg',
    },
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
    <section id="speakers" className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          🎙️ Konuşmacılar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-[38px] md:gap-y-[32px] max-w-[1114px] mx-auto mb-8">
          {speakers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              surname={member.surname}
              title={member.title}
              image={member.image}
              size={isMobile ? 'small' : 'large'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
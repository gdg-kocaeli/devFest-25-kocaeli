'use client';
import ProfileCard from '../ui/ProfileCard';
import { useState, useEffect } from 'react';

export default function SpeakersSection() {
  const speakers = [
    {
      name: 'Ramesh',
      surname: 'Chander',
      title: 'Head of Developer Relations, MENA-T',
      company: '@Google',
      image:  '/ramesh-chander.jpeg', 
    },
    {
      name : 'Abdel ',
      surname : 'Sghiouar',
      title : 'Senior Cloud Developer Advocate',
      company : '@Google',
      image : '/abdel-sghiouar.png'
    },
    {
      name : 'Ersin',
      surname : 'Yetişen',
      title : 'Head Of Software Development',
      company : '@Kartaca',
      image : '/ersin-yetisen.png'
    },

    {
      name : 'Levent',
      surname : ' Kantaroğlu',
      title : 'Mobile Team Lead',
      company : '@THY Teknoloji',
      image : '/levent-kantaroglu.png',
    },
    {
      name : 'Bengisu',
      surname : 'Özkul',
      title : 'Flutter Developer',
      company : '@THY Teknoloji',
      image : '/bengisu.jpg',
    },
    {
      name : 'Esra',
      surname : 'Kadah',
      title : 'Senior App Developer',
      company : '@Antigua Mobile',
      image : '/esra-kadah.jpg',
    },
    {
      name : 'Alper',
      surname : 'Sarı',
      title : 'Cloud Native Engineer',
      company : '@bestcloudfor.me',
      image : '/alper-sari.jpeg',
    },
    {
      name : 'Kaan Enes',
      surname : 'Kapıcı',
      title : 'Senior Mobile Application Engineer Specialist ',
      company : '@İnnova Bilişim',
      image : '/kaan-enes-kapici.jpg',
    },
    {
      name : 'Mert',
      surname : 'Polat',
      title : 'SRE/Chaos Engineer',
      company : '@Intertech',
      image : '/mert-polat.jpg'
    },




    {
      name : 'Emin',
      surname : ' Çimen',
      title : 'Platform Engineer',
      company : '@Trendyol',
      image : '/emin-cimen.jpg'
    },
    {
      name : 'Ali Can',
      surname : 'Gündüz',
      title : 'Jr. Cloud Platform Specialist',
      company : '@Bulutistan',
      image : '/ali-can-gunduz.jpg',
    },
    {
      name : 'Esra',
      surname : 'Doğan',
      title : 'İş Analisti ve Uygulama Uzmanı',
      company : '@AKCEZ',
      image : '/esra-dogan.png',
    },
    {
      name : 'Melih',
      surname : 'Kuru',
      title : 'Software Developer',
      company : '@Kartaca',
      image : '/melih-kuru.png',
    },
    {
      name : 'Fahri',
      surname : 'Gedik',
      title : 'Software Developer',
      company : '@Volosoft',
      image : '/fahri-gedik.jpg',
    },
    {
      name : 'Abdulkerim',
      surname : 'Karaman',
      title : 'Mobile App Development Manager',
      company : '@AlbarakaTech Global',
      image : '/abdulkerim-karaman.jpg',
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
    <section id="speakers" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          🎙️ Konuşmacılar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-[38px] md:gap-y-[32px] max-w-[1115px] mx-auto justify-items-center">
          {speakers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              surname={member.surname}
              title={member.title}
              company={member.company}
              image={member.image}
              size={isMobile ? 'small' : 'large'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScheduleCard from '../ui/ScheduleCard';

type ScheduleItem = {
  type: 'KEYNOTE' | 'PANEL' | 'WORKSHOP' | 'MOLA' | 'KAPANIŞ' ;
  time: string;
  title: string;
  speaker?: string;
  speakerImage?: string | string[];
  isMola?: boolean;
};

export default function ScheduleSection() {
  const [selectedSalon, setSelectedSalon] = useState<'salon1' | 'salon2'>('salon1');

  const salon1Schedule: ScheduleItem[] = [
    {
      type: 'KEYNOTE',
      time: '10:45-11:15',
      title: 'Keynote',
      speaker: 'Ramesh Chander',
      speakerImage: '/ramesh-chander.jpeg',
    },
    {
      type: 'PANEL',
      time: '11:30-12:00',
      title: 'Gemini 2.x for developers',
      speaker: 'Abdel Sghiouar',
      speakerImage: '/abdel-sghiouar.png',
    },
    {
      type: 'PANEL',
      time: '12:15-12:45',
      title: 'Building Reliable, Scalable, and Insightful Data Platforms',
      speaker: 'Ersin Yetişen',
      speakerImage: '/ersin-yetisen.png',
    },
    {
      type: 'PANEL',
      time: '13:00-13:30',
      title: 'Asynchronous Programming in Flutter: A Deep Dive',
      speaker: 'Levent Kantaroğlu - Bengisu Özkul',
      speakerImage: ['/bengisu.jpg', '/levent-kantaroglu.png'],
    },
    {
      type: 'MOLA',
      time: '13:30-14:15',
      title: 'Launch - Network',
    },
    {
      type: 'PANEL',
      time: '14:15-14:45',
      title: 'Intelligent Cloud Era: Managing GCP with Cloud Assist',
      speaker: 'Alper Sarı',
      speakerImage: '/alper-sari.jpeg',
    },
    {
      type: 'PANEL',
      time: '15:00-15:30',
      title: 'Flutter at Native Speed: The FFI and Platform Channels Way',
      speaker: 'Esra Kadah',
      speakerImage: '/esra-kadah.jpg',
    },
    {
      type: 'PANEL',
      time: '15:45-16:15',
      title: 'The Modern Android AI Stack: A Deep Dive into Android Studio and Gemini',
      speaker: 'Kaan Enes Kapıcı',
      speakerImage: '/kaan-enes-kapici.jpg',
    },
    {
      type: 'PANEL',
      time: '16:20-16:50',
      title: 'The Dirty Side of DevSecOps  ',
      speaker: 'Mert Polat',
      speakerImage: '/mert-polat.jpg',
    },
  ];

  const salon2Schedule: ScheduleItem[] = [
    {
      type: 'PANEL',
      time: '11:30-12:00',
      title: 'Resilient Microservices for the AI Era',
      speaker: 'Emin Çimen',
      speakerImage: '/emin-cimen.jpg',
    },
    {
      type: 'PANEL',
      time: '12:15-12:45',
      title: 'DevOps for Frontend Developers',
      speaker: 'Ali Can Gündüz',
      speakerImage: '/ali-can-gunduz.jpg',
    },
    {
      type: 'PANEL',
      time: '13:00-13:30',
      title: 'The Bridge Between Business and Technology',
      speaker: 'Esra Doğan',
      speakerImage: '/esra-dogan.png',
    },
    {
      type: 'MOLA',
      time: '13:30-14:15',
      title: 'Launch - Network',
    },
    {
      type: 'PANEL',
      time: '14:15-14:45',
      title: 'Performance, Scalability, and Developer Experience: Go & Java',
      speaker: 'Melih Kuru',
      speakerImage: '/melih-kuru.png',
    },
    {
      type: 'PANEL',
      time: '15:00-15:30',
      title: 'Build Angular Apps with ABP Framework',
      speaker: 'Fahri Gedik',
      speakerImage: '/fahri-gedik.jpg',
    },
    {
      type: 'PANEL',
      time: '15:45-16:15',
      title: 'Building Smarter Mobile Apps with AI Agents',
      speaker: 'Abdulkerim Karaman',
      speakerImage: '/abdulkerim-karaman.jpg',
    },
    
  ];

  const currentSchedule = selectedSalon === 'salon1' ? salon1Schedule : salon2Schedule;

  return (
    <section id="schedule" className="py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          🕘 Program Akışı
        </h2>

        {/* Salon Butonları */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedSalon('salon1')}
            className={`
              flex items-center justify-center gap-3
              w-[180px] h-[52px]
              rounded-xl
              font-medium text-white
              transition-all duration-200
              ${selectedSalon === 'salon1' 
                ? 'bg-[#2F5EAD]' 
                : 'bg-transparent border-[0.75px] border-white'
              }
            `}
          >
            <Image 
              src="/game-icons_saloon.png" 
              alt="" 
              width={24} 
              height={24}
            />
            Salon 1
          </button>

          <button
            onClick={() => setSelectedSalon('salon2')}
            className={`
              flex items-center justify-center gap-3
              w-[180px] h-[52px]
              rounded-xl
              font-medium text-white
              transition-all duration-200
              ${selectedSalon === 'salon2' 
                ? 'bg-[#2F5EAD]' 
                : 'bg-transparent border-[0.75px] border-white'
              }
            `}
          >
            <Image 
              src="/game-icons_saloon.png" 
              alt="" 
              width={24} 
              height={24}
            />
            Salon 2
          </button>
        </div>

        {/* Program Kartları - Üstten padding ekledik */}
        <div className="flex flex-col gap-4 items-center overflow-x-hidden pt-3">
          {currentSchedule.map((item, index) => (
            <ScheduleCard
              key={index}
              type={item.type}
              time={item.time}
              title={item.title}
              speaker={item.speaker}
              speakerImage={item.speakerImage}
              isMola={item.isMola}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

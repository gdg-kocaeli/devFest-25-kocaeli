'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScheduleCard from '../ui/ScheduleCard';

type ScheduleItem = {
  type: 'KEYNOTE' | 'PANEL' | 'WORKSHOP' | 'MOLA' | 'KAPANIŞ';
  time: string;
  title: string;
  speaker?: string;
  speakerImage?: string;
  isMola?: boolean;
};

export default function ScheduleSection() {
  const [selectedSalon, setSelectedSalon] = useState<'salon1' | 'salon2'>('salon1');

  const salon1Schedule: ScheduleItem[] = [
    {
      type: 'KEYNOTE',
      time: '10:00-11:00',
      title: 'Yapay Zeka ile Geleceği Şekillendirmek',
      speaker: 'Bahadır Vatansever',
      speakerImage: '/organizer-mha.png',
    },
    {
      type: 'PANEL',
      time: '11:00-12:00',
      title: 'Yapay Zeka ile Geleceği Şekillendirmek',
      speaker: 'Bahadır Vatansever',
      speakerImage: '/organizer-mha.png',
    },
    {
      type: 'WORKSHOP',
      time: '12:00-13:00',
      title: 'Yapay Zeka ile Geleceği Şekillendirmek',
      speaker: 'Bahadır Vatansever',
      speakerImage: '/organizer-mha.png',
    },
    {
      type: 'MOLA',
      time: '13:00-14:00',
      title: 'Öğle Yemeği Molası',
      isMola: true,
    },
    {
      type: 'KAPANIŞ',
      time: '17:00-18:00',
      title: 'Kapanış Konuşması',
      speaker: 'Bahadır Vatansever',
      speakerImage: '/organizer-mha.png',
    },
  ];

  const salon2Schedule: ScheduleItem[] = [
    {
      type: 'KEYNOTE',
      time: '10:00-11:00',
      title: 'Yapay Zeka ile Geleceği Şekillendirmek',
      speaker: 'Ecem Yalçın',
      speakerImage: '/organizer-ey.jpeg',
    },
    {
      type: 'PANEL',
      time: '11:00-12:00',
      title: 'Yapay Zeka ile Geleceği Şekillendirmek',
      speaker: 'Ecem Yalçın',
      speakerImage: '/organizer-ey.jpeg',
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
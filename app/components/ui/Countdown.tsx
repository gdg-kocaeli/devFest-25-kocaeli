'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate?: string;
  className?: string;
}

export default function Countdown({ 
  targetDate = '2025-12-06T10:00:00',
  className = '' 
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`w-full max-w-2xl relative backdrop-blur-[30px] rounded-2xl bg-black/5 flex items-center justify-center gap-4 sm:gap-8 md:gap-16 text-center px-4 ${className}`}>
      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <div className="font-inter font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-none text-[#F5F6F6]">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div className="font-inter font-normal text-sm sm:text-base md:text-lg leading-none text-[#F5F6F6]">
          gün
        </div>
      </div>
      
      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <div className="font-inter font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-none text-[#F5F6F6]">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="font-inter font-normal text-sm sm:text-base md:text-lg leading-none text-[#F5F6F6]">
          saat
        </div>
      </div>
      
      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <div className="font-inter font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-none text-[#F5F6F6]">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="font-inter font-normal text-sm sm:text-base md:text-lg leading-none text-[#F5F6F6]">
          dakika
        </div>
      </div>
      
      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <div className="font-inter font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-none text-[#F5F6F6]">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="font-inter font-normal text-sm sm:text-base md:text-lg leading-none text-[#F5F6F6]">
          saniye
        </div>
      </div>
    </div>
  );
}

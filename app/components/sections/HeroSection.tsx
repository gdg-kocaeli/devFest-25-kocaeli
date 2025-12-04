'use client';

import Image from 'next/image';
import Ellipse3 from '../ui/Ellipse3';
import Button from '../ui/Button';
import Countdown from '../ui/Countdown';

export default function HeroSection() {


  const handleRegister = () => {
    window.open('https://gdg.community.dev/events/details/google-gdg-kocaeli-presents-devfest25-kocaeli/', '_blank');
  }

  const handleGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Kocaeli+Kongre+Merkezi', '_blank');
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 rounded-bl-[64px] rounded-br-[64px] sm:rounded-bl-[96px] sm:rounded-br-[96px] lg:rounded-bl-[128px] lg:rounded-br-[128px] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-bl-[64px] rounded-br-[64px] sm:rounded-bl-[96px] sm:rounded-br-[96px] lg:rounded-bl-[128px] lg:rounded-br-[128px]"
        style={{
          backgroundImage: 'url(/background.jpg)',
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      ></div>
      <Ellipse3 position="top-right" />
      <Ellipse3 position="bottom-left" />
      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-4xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
          <Image src="/logo.svg" alt="DevFest Kocaeli 2025" width={60} height={60} className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" />
          <div className="flex flex-col items-start">
            <span className="text-sm sm:text-base md:text-lg font-light tracking-tight font-outfit leading-tight" style={{ color: '#F5F6F6' }}>
              Google Developer Groups Kocaeli
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-outfit leading-tight">
              DevFest 2025
            </span>
          </div>
        </div>
        <h2 className="font-inter font-normal text-lg sm:text-xl md:text-2xl leading-tight text-center text-white mt-6 sm:mt-8 mb-4 sm:mb-6 px-4">
          Geleceğini şekillendirecek buluşma çok yakında.
        </h2>
        <div className="font-inter font-medium text-lg sm:text-xl md:text-2xl leading-tight text-white mb-3 sm:mb-4 text-center">
          📆 6 Aralık 2025 10:00
        </div>
        <div className="font-inter font-medium text-lg sm:text-xl md:text-2xl leading-tight text-white mb-4 sm:mb-6 text-center">
          📍 Kocaeli Kongre Merkezi
        </div>
        <a onClick={handleGoogleMaps} className="font-inter font-medium text-sm leading-none text-white hover:text-gray-300 mb-6 sm:mb-8 inline-flex items-center gap-2 transition-all cursor-pointer">
          Yol Tarifi Al
          <Image src="/north-arrow.svg" alt="North Arrow" width={16} height={16} />
        </a>
        <h1 className="font-inter font-semibold text-xl sm:text-2xl leading-tight text-center text-[#F5F6F6] mb-4 sm:mb-6">
          Aramıza Katıl!
        </h1>
        <p className="font-outfit font-normal text-sm sm:text-base leading-relaxed text-center text-white max-w-2xl px-4 mb-4">
          Sektörün en iyilerinden ilham alacağınız, en yeni teknolojileri bizzat deneyimleyeceğiniz ve sizi anlayan harika bir toplulukla bir araya geleceğiniz dopdolu bir program sizi bekliyor. Kod, tasarım ve inovasyon tutkusuyla birleşiyoruz.
        </p>
        <Button className="font-inter font-medium text-sm leading-none mt-2 sm:mt-4 mb-6 sm:mb-8" onClick={handleRegister}>
          Kayıt Ol
        </Button>
        <div className="flex flex-col items-center mt-6 sm:mt-8 mb-6 sm:mb-8 w-full">
          <div className="flex items-center gap-2 mb-4 flex-col sm:flex-row text-center sm:text-left">
            <span className="font-inter font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-none text-center text-white">⏳</span>
            <h3 className="font-inter font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-none text-center text-white">Geri Sayım</h3>
          </div>
          <Countdown targetDate="2025-12-06T10:00:00" className="py-4" />
        </div>
      </div>
    </section>
  );
}

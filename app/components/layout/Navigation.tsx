'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { componentStyles } from '../../styles/style-utils';

const navigationItems = [
  { id: 'sponsors', label: 'Sponsorlar' },
  // { id: 'speakers', label: 'Konuşmacılar' },
  // { id: 'schedule', label: 'Program' },
  { id: 'team', label: 'Ekip' },
  { id: 'iletisim', label: 'İletişim' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={componentStyles.navigation.nav(isScrolled)}>
      <div className={componentStyles.navigation.container}>
        <div className={componentStyles.navigation.navRow}>
          <button 
            onClick={() => scrollToSection('hero')}
            className={`${componentStyles.navigation.logo} flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200 gap-2`}
          >
            <Image 
              src="/logo.svg" 
              alt="DevFest Kocaeli 2025" 
              width={48} 
              height={48}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <div className="flex flex-row items-center gap-1 sm:gap-2">
              <span className="font-outfit font-bold text-lg sm:text-xl md:text-2xl">DevFest</span>
              <span className="font-outfit font-normal text-lg sm:text-xl md:text-2xl">Kocaeli</span>
            </div>
          </button>
          <div className={componentStyles.navigation.menuDesktop}>
            <div className={componentStyles.navigation.menuList}>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${componentStyles.navigation.menuItem(false)} cursor-pointer`}
                > 
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${componentStyles.navigation.mobileButton} cursor-pointer`}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={componentStyles.navigation.mobileIcon}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 sm:top-16 left-0 right-0 bg-[#333333] shadow-xl animate-slideDown z-50 mx-4 rounded-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2.5 text-[15px] font-medium text-[#E0E2E3] hover:text-blue-400 hover:bg-blue-400/10 rounded-md transition-all duration-200 font-inter cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

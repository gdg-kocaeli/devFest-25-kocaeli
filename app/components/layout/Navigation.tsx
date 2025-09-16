'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { componentStyles } from '../../styles/style-utils';

const navigationItems = [
  { id: 'sponsors', label: 'Sponsorlar' },
  { id: 'speakers', label: 'Konuşmacılar' },
  { id: 'schedule', label: 'Program' },
  { id: 'team', label: 'Ekip' },
  { id: 'contact', label: 'İletişim' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={componentStyles.navigation.nav(isScrolled)}>
      <div className={componentStyles.navigation.container}>
        <div className={componentStyles.navigation.navRow}>
          <div className={`${componentStyles.navigation.logo} flex items-center`}>
            <Image src="/logo.svg" alt="DevFest Kocaeli 2025" width={48} height={48} />
              <div className="flex flex-row items-end gap-2">
                <span className="font-outfit font-bold text-2xl">DevFest</span>
                <span className="font-outfit font-normal text-lg">Kocaeli</span>
            </div>
          </div>
          <div className={componentStyles.navigation.menuDesktop}>
            <div className={componentStyles.navigation.menuList}>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={componentStyles.navigation.menuItem(activeSection === item.id)}
                > 
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={componentStyles.navigation.mobileButton}
              aria-expanded="false"
            >
              <svg
                className={componentStyles.navigation.mobileIcon}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

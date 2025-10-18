import Image from 'next/image';
import GDGTitle from '../ui/GDGTitle';

export default function Footer() {
  return (
    <footer className="text-white py-6 md:py-8" style={{ backgroundColor: '#333333' }}>
      <div className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[152px]">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-8">
          {/* Logo and Information Section */}
          <div className="flex flex-col items-start md:items-end gap-1 md:gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src="/logo.svg"
                alt="GDG Kocaeli Logo"
                width={32}
                height={26}
                className="md:w-12 md:h-10 flex-shrink-0"
              />
              <GDGTitle />
            </div>
            <div className="flex flex-col items-start md:items-end gap-0.5 text-[8px] sm:text-[9px] md:text-sm text-gray-400 font-outfit text-left md:text-right">
              <span className="whitespace-nowrap">GDG Kocaeli ekibi tarafından geliştirildi.</span>
              <span className="whitespace-nowrap">Copyright © {new Date().getFullYear()} GDG Kocaeli</span>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <a
              href="https://instagram.com/gdgkocaeli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Instagram"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="md:w-9 md:h-9 flex-shrink-0"
              />
            </a>

            <a
              href="https://linkedin.com/company/gdgkocaeli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="md:w-9 md:h-9 flex-shrink-0"
              />
            </a>
            
            <a
              href="https://twitter.com/gdgkocaeli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Twitter"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="md:w-9 md:h-9 flex-shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

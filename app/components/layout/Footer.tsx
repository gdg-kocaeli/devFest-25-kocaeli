import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: '#333333', height: '120px'}}>
      <div className="max-w-none mx-auto px-[152px] h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          {/* Sol taraf - Logo ve bilgiler */}
          <div className="flex flex-col items-end gap-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.svg" 
                alt="GDG Kocaeli Logo" 
                width={48} 
                height={40}
                className="flex-shrink-0"
              />
              <div className="flex flex-col md:flex-row items-start gap-1 md:gap-2">
                <span className="text-xl md:text-2xl font-light text-gray-300 tracking-tight font-outfit">
                  Google Developer Groups
                </span>
                <span className="text-xl md:text-2xl font-medium text-white tracking-tight font-outfit">
                  Kocaeli
                </span>
              </div>
            </div>
            
            {/* Alt bilgiler */}
            <div className="flex flex-col items-end gap-1 text-sm text-gray-400 font-outfit">
              <span>GDG Kocaeli ekibi tarafından geliştirildi.</span>
              <span>Copyright © {new Date().getFullYear()} GDG Kocaeli</span>
            </div>
          </div>

          {/* Orta - Sosyal medya linkleri */}
          <div className="flex items-center justify-center gap-6">
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
                width={36} 
                height={36}
                className="flex-shrink-0"
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
                width={36} 
                height={36}
                className="flex-shrink-0"
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
                width={36} 
                height={36}
                className="flex-shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

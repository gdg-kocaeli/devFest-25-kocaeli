import React from 'react';
import Image from 'next/image';

type ScheduleCardProps = {
  type: 'KEYNOTE' | 'PANEL' | 'WORKSHOP' | 'MOLA' | 'KAPANIŞ';
  time: string;
  title: string;
  speaker?: string;
  speakerImage?: string | string[];
  isMola?: boolean;
};

const typeStyles = {
  KEYNOTE: {
    bg: '#EA4335',
    textColor: '#FFFFFF',
    text: 'KEYNOTE',
  },
  PANEL: {
    bg: '#4285F4',
    textColor: '#FFFFFF',
    text: 'PANEL',
  },
  WORKSHOP: {
    bg: '#FBBC04',
    textColor: '#000000',
    text: 'WORKSHOP',
  },
  MOLA: {
    bg: '#ECECEC',
    textColor: '#000000',
    text: 'MOLA',
  },
  KAPANIŞ: {
    bg: '#34A853',
    textColor: '#FFFFFF',
    text: 'KAPANIŞ',
  },
};

export default function ScheduleCard({
  type,
  time,
  title,
  speaker,
  speakerImage,
  isMola = false,
}: ScheduleCardProps) {
  const style = typeStyles[type];

  return (
    <div className="relative w-full max-w-[600px] mx-auto rounded-2xl border border-white bg-[#2a2a2a] p-4">
      {/* Type Badge - Mobilde içeride, desktopda dışarıda */}
      <div
        className="absolute -top-2 left-2 md:left-[-37px] px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap"
        style={{ 
          backgroundColor: style.bg,
          color: style.textColor,
        }}
      >
        {style.text}
      </div>

      {/* İçerik */}
      <div className="flex items-start justify-between mt-4">
        {/* Sol taraf */}
        <div className="flex flex-col gap-2 flex-1">
          {/* Saat */}
          <div className="text-[#bbbfc3] text-sm font-medium">
            {time}
          </div>

          {/* Başlık */}
          <div className="text-white text-base md:text-lg font-semibold max-w-[200px] md:max-w-[350px]">
            {title}
          </div>

          {/* Konuşmacı */}
          {speaker && !isMola && (
            <div className="text-[#bbbfc3] text-sm">
              {speaker}
            </div>
          )}
        </div>

        {/* Sağ taraf - Fotoğraf */}
        {speakerImage && !isMola && (
          <div className="flex items-center justify-center">
            {Array.isArray(speakerImage) ? (
              <div className="flex -space-x-4">
                {speakerImage.map((src, index) => (
                  <div key={index} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                    <Image
                      src={src}
                      alt={speaker || `speaker ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden flex-shrink-0 ml-4">
                <Image
                  src={speakerImage as string}
                  alt={speaker || ''}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
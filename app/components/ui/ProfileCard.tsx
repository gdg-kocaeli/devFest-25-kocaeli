import { FunctionComponent } from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  surname: string;
  title: string;
  company?: string;
  linkedin?: string;
  twitter?: string;
  image?: string;
  size?: 'small' | 'large';
}

const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  name,
  surname,
  title,
  company,
  linkedin,
  twitter,
  image,
  size = 'large'
}) => {
  const isSmall = size === 'small';

  
  const shadowClass = isSmall 
    ? 'shadow-[0px_1px_8px_#f442e2]' 
    : 'shadow-[0px_2px_16px_#f442e2]';

  return (
    <div className={`
      relative rounded-[32px] 
      bg-[rgba(51,51,51,0.5)] border-[0.5px] border-[#f442e2] 
      flex flex-col items-center justify-between text-center 
      text-[#f5f6f6] font-['Inter']
      ${isSmall ? 'w-full h-full p-3' : 'w-[250px] h-[320px] p-4'}
      ${shadowClass}
    `}>
      
      <div className="flex flex-col items-center text-center gap-2">
      {image && (
        <div 
          className={`
            ${isSmall ? 'w-24 h-24' : 'w-[150px] h-[150px]'} 
            rounded-full overflow-hidden
          `}
          style={{ transform: 'translateZ(0)' }}
        >
          <Image
            src={image}
            alt={`${name} ${surname}`}
            width={150}
            height={150}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className={`font-medium ${isSmall ? 'text-base' : 'text-xl'}`}>
        {name} {surname}
      </div>
      
      <div className="flex flex-col gap-1">
        <div className={`text-[#bbbfc3] ${isSmall ? 'text-sm' : 'text-base'}`}>
          {title}
        </div>
        {company && (
          <div className={`text-[#bbbfc3] ${isSmall ? 'text-xs' : 'text-sm'}`}>
            {company}
          </div>
        )}
      </div>
      
      </div>

      <div className="flex gap-3">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src="/linkedin.svg" alt="LinkedIn" width={isSmall ? 32 : 36} height={isSmall ? 32 : 36} />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src="/twitter.svg" alt="Twitter" width={isSmall ? 32 : 36} height={isSmall ? 32 : 36} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
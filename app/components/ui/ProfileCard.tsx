import { FunctionComponent } from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  surname: string;
  title: string;
  linkedin?: string;
  twitter?: string;
  image?: string;
}

const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  name,
  surname,
  title,
  linkedin,
  twitter,
  image
}) => {
  return (
    <div className="w-80 relative shadow-[0px_2px_16px_#f442e2] rounded-[32px] bg-[rgba(51,51,51,0.5)] border-[0.5px] border-[#f442e2] h-[320px] flex flex-col items-center justify-center px-4 gap-4 text-center text-xl text-[#f5f6f6] font-['Inter']">
      {image && (
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          <Image
            src={image}
            alt={`${name} ${surname}`}
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="font-medium">
        {name} {surname}
      </div>
      
      <div className="text-base text-[#bbbfc3]">
        {title}
      </div>
      
      <div className="flex gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={36}
              height={36}
            />
          </a>
        )}
        
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/twitter.svg"
              alt="Twitter"
              width={36}
              height={36}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import Image from 'next/image';

type SponsorCardProps = {
    label?: string;
    src?: string;
    alt?: string;
    size?: 'small' | 'large';
};

export default function SponsorCard({
    label = "Sponsor",
    src,
    alt,
    size = 'large'
}: SponsorCardProps) {
    const isSmall = size === 'small';

    return (
        <div
            style={{
                width: '100%',
                aspectRatio: '1/1',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                padding: isSmall ? '12px' : '16px',
            }}
            aria-label={alt ?? label}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt ?? label}
                    fill
                    style={{ 
                        objectFit: "contain",
                        padding: '8px'
                    }}
                    loading="lazy"
                    quality={75}
                />
            ) : (
                <svg
                    width="60%"
                    height="60%"
                    viewBox="0 0 100 100"
                    role="img"
                    aria-hidden="true"
                    style={{ display: "block" }}
                >
                    <rect width="100" height="100" rx="8" fill="rgba(255, 255, 255, 0.05)" />
                    <g transform="translate(10,10)" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="4">
                        <rect x="0" y="0" width="80" height="50" rx="4" />
                        <path d="M0 60 L30 30 L50 50 L80 20 L80 60 Z" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            )}

            <span style={{ 
                position: "absolute", 
                width: 1, 
                height: 1, 
                padding: 0, 
                margin: -1, 
                overflow: "hidden", 
                clip: "rect(0,0,0,0)", 
                whiteSpace: "nowrap", 
                border: 0 
            }}>
                {label}
            </span>
        </div>
    );
}
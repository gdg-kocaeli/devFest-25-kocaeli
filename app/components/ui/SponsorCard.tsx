import React from "react";
import Image from 'next/image';
import Link from 'next/link';

type SponsorCardProps = {
    label?: string;
    src?: string;
    alt?: string;
    size?: 'small' | 'large';
    href?: string;
    customSize?: number;
    backgroundColor?: string;
};

export default function SponsorCard({
    label = "Sponsor",
    src,
    alt,
    size = 'large',
    href,
    customSize,
    backgroundColor
}: SponsorCardProps) {
    const isSmall = size === 'small';

    const cardContent = (
        <div
            style={{
                width: customSize ? `${customSize}px` : '140px',
                height: customSize ? `${customSize}px` : '140px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: backgroundColor || "rgba(255, 255, 255, 0.05)",
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

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
import React from 'react';

import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX
} from '@tabler/icons-react';
import Image from 'next/image';

export type TDappHeaderProps = {
  fonts?: string;
  projectName?: string;
  icons?: Record<string, string>;
};

const socialIcons: Record<string, React.ElementType> = {
  Facebook: IconBrandFacebook,
  X: IconBrandX,
  Discord: IconBrandDiscord,
  Github: IconBrandGithub,
  Instagram: IconBrandInstagram
};

const urlPatterns: Record<string, RegExp> = {
  Facebook: /^https:\/\/(www\.)?facebook\.com\/.+/,
  X: /^https:\/\/(www\.)?twitter\.com\/.+/,
  Discord: /^https:\/\/(www\.)?discord\.com\/.+/,
  Github: /^https:\/\/(www\.)?github\.com\/.+/,
  Instagram: /^https:\/\/(www\.)?instagram\.com\/.+/
};

const isValidUrl = (key: string, url: string): boolean => {
  return urlPatterns[key]?.test(url) ?? false;
};

export default function DappHeader({ projectName, fonts, icons }: TDappHeaderProps) {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex h-24 w-24 items-center justify-center rounded-full bg-black'>
        <Image src='/project-logo.png' alt='Project Logo' width={44} height={44} />
      </div>
      <div>
        <h1
          className='text-[32px] font-bold'
          style={{
            fontFamily: fonts
          }}
        >
          {projectName}
        </h1>
        <div className='flex items-center gap-3'>
          {icons &&
            Object.keys(icons).map((key) => {
              const Icon = socialIcons[key];
              const url = icons[key];
              return Icon && url && isValidUrl(key, url) ? (
                <a href={url} key={key} target='_blank' rel='noopener noreferrer'>
                  <Icon stroke={2} />
                </a>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}

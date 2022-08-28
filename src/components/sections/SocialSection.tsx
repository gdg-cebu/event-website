import omit from 'lodash/omit';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from '../common/Markdown';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Link as LinkIcon,
} from 'react-feather';

import type * as React from 'react';
import type * as Feather from 'react-feather';
import type * as types from 'types';

const SOCIAL_ICONS: Record<string, Feather.Icon> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  website: LinkIcon,
};

const SocialSection: React.FC<types.SocialSection> = (section) => {
  return (
    <section className="py-8 px-6 md:py-20">
      <div className="xl:container mx-auto flex flex-wrap md:flex-nowrap items-center">
        <div className="w-full md:max-w-lg">
          {renderContent(section)}
          {renderLinks(section)}
        </div>
        {renderImage(section)}
      </div>
    </section>
  );
};

const renderContent = ({ content }: types.SocialSection): React.ReactNode => {
  if (!content) {
    return null;
  }
  return <Markdown content={content} className="mb-5" />;
};

const renderLinks = ({ links }: types.SocialSection): React.ReactNode => {
  if ((links?.length ?? 0) === 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap -m-2">
      {links.map((link, index) => (
        <Link key={index} href={link.url} passHref>
          <a
            className={[
              'flex',
              'items-center',
              'justify-center',
              'w-10',
              'h-10',
              'm-2',
              'rounded-full',
              'font-zero',
              'bg-blue-800',
              'hover:bg-blue-900',
              'focus:bg-blue-900',
            ].join(' ')}
            title={link.label}
          >
            {getSocialIconForUrl(link.url)}
          </a>
        </Link>
      ))}
    </div>
  );
};

const renderImage = ({ image }: types.SocialSection): React.ReactNode => {
  if (!image?.url) {
    return null;
  }
  const aspectRatio = `${image.width || 16} / ${image.height || 9}`;
  return (
    <div className="md:flex-grow ml-auto mt-10 md:mt-0 md:pl-8">
      <div className="h-20 md:h-28 relative md:ml-auto" style={{ aspectRatio }}>
        <Image src={image.url} alt={image.alt} layout="fill" objectFit="contain" objectPosition="center center" />
      </div>
    </div>
  );
};

const getSocialIconForUrl = (url: string): React.ReactNode => {
  let IconComponent = SOCIAL_ICONS.website;
  try {
    const origin = new URL(url).origin;
    const keys = Object.keys(omit(SOCIAL_ICONS, ['website']));
    for (const key of keys) {
      if (origin.includes(key)) {
        IconComponent = SOCIAL_ICONS[key];
        break;
      }
    }
  } catch (error) {
    // silenly fail
  }
  return <IconComponent className="w-5 h-5 text-white" />;
};

export default SocialSection;

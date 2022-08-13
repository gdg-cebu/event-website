import Image from 'next/image';
import Link from 'next/link';

import type * as React from 'react';
import type * as types from 'types';

const PartnersSection: React.FC = () => {
  const section: types.PartnersSection = {
    title: 'Partners',
    groups: [
      {
        title: 'General partner',
        partners: [
          {
            name: 'Google',
            logo: {
              url: '/images/google-logo.svg',
              alt: 'Google',
              width: 600,
              height: 300,
            },
            url: 'https://google.com',
          },
        ],
      },
    ],
  };

  return (
    <section className="py-8 px-6 md:py-20">
      <div className="xl:container mx-auto">
        <h1 className="mb-10 text-3xl md:text-4xl">{section.title}</h1>
        {renderPartnerGroups(section)}
      </div>
    </section>
  );
};

const renderPartnerGroups = ({ groups }: types.PartnersSection): React.ReactNode => {
  return (
    <>
      {groups.map((group, index) => (
        <div key={index} className="mt-10">
          <h2 className="mb-8 text-lg md:text-xl">{group.title}</h2>
          <div className="flex flex-wrap items-center -my-3">{group.partners.map(renderPartner)}</div>
        </div>
      ))}
    </>
  );
};

const renderPartner = (partner: types.Partner, index: number): React.ReactNode => {
  const { name, url, logo, height = 60 } = partner;
  const aspectRatio = `${logo?.width || 16} / ${logo?.height || 9}`;

  const wrapContent = (content: React.ReactNode): React.ReactNode => {
    const props = {
      className: 'my-3 mx-6',
      style: { height: `${height}px`, aspectRatio },
    };
    if (url) {
      return (
        <Link key={index} href={url} passHref>
          <a {...props}>{content}</a>
        </Link>
      );
    }
    return (
      <div key={index} {...props}>
        {content}
      </div>
    );
  };

  return wrapContent(
    logo ? (
      <div className="w-full h-full relative">
        <Image
          src={logo.url}
          alt={logo.alt}
          title={name}
          layout="fill"
          objectFit="contain"
          objectPosition="center center"
        />
      </div>
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
        <p>{partner.name}</p>
      </div>
    )
  );
};

export default PartnersSection;

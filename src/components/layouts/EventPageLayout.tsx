import Image from 'next/image';

import type * as React from 'react';
import type * as types from 'types';

type Props = { title: string; subtitle?: string; showLogo?: boolean };

const EventPageLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, title, subtitle, showLogo = false }) => {
  const eventConfig: types.EventConfig = {
    name: 'Event Name',
    description:
      'This event brings together developers from around the globe for talks, hands-on learning with Google experts, and a first look at latest developer products.',
    logo: {
      url: '/images/default-logo.png',
      alt: 'Event Logo',
      width: 130,
      height: 130,
    },
    date: new Date('2022-11-01'),
    venue: 'Ayala Center Cebu',
  };

  return (
    <div>
      <header className="pt-8 px-6 md:pt-20">
        <div className="xl:container mx-auto">
          {showLogo && renderLogo(eventConfig.logo)}
          <h1 className="text-4xl md:text-5xl font-normal">{title}</h1>
          {subtitle && <p className="md:max-w-2xl mt-8 text-lg md:text-xl">{subtitle}</p>}
        </div>
      </header>

      {children}
    </div>
  );
};

const renderLogo = (logo: types.Image): React.ReactNode => {
  if (!logo) {
    return null;
  }
  const aspectRatio = `${logo.width || 16} / ${logo.height || 9}`;
  return (
    <div className="relative h-28 mb-8" style={{ aspectRatio }}>
      <Image src={logo.url} alt={logo.alt} layout="fill" objectFit="contain" objectPosition="center center" />
    </div>
  );
};

export default EventPageLayout;

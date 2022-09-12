import { useContext } from 'react';
import Image from 'next/image';
import BaseLayout from '../common/BaseLayout';
import DynamicSection from '../common/DynamicSection';
import { EventConfigContext } from '../../contexts/event-config';

import type * as React from 'react';
import type * as types from 'types';

const EventPageLayout: React.FC<types.EventPage> = ({ title, subtitle, showLogo = false, sections }) => {
  const eventConfig = useContext(EventConfigContext);

  return (
    <BaseLayout>
      <header className="pt-8 px-6 md:pt-20">
        <div className="xl:container mx-auto">
          {showLogo && renderLogo(eventConfig.logo)}
          <h1 className="text-4xl md:text-5xl font-normal">{title}</h1>
          {subtitle && <p className="md:max-w-2xl mt-8 text-lg md:text-xl">{subtitle}</p>}
        </div>
      </header>

      {sections.map((section, index) => (
        <DynamicSection key={index} section={section} />
      ))}
    </BaseLayout>
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

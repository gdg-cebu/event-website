import Image from 'next/image';

import type * as React from 'react';
import type * as types from 'types';

const SpeakersSection: React.FC<types.SpeakersSection> = (section) => {
  return (
    <section className="py-8 px-6 md:py-20">
      <div className="xl:container mx-auto">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {section.speakers.map((speaker, index) => (
            <article key={index} className="p-6 border border-gray-100 rounded text-center">
              {renderImage(speaker)}
              {renderDetails(speaker)}
              {speaker.bio && <p className="mt-auto text-sm md:text-base line-clamp-4">{speaker.bio}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const renderImage = ({ image }: types.Speaker): React.ReactNode => {
  return (
    <div className="w-28 h-28 mx-auto mb-6 relative">
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          className="rounded-full"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gray-100" />
      )}
    </div>
  );
};

const renderDetails = ({ name, designation, company }: types.Speaker): React.ReactNode => {
  return (
    <>
      <h2 className="text-lg md:text-xl">{name}</h2>
      {(designation || company) && (
        <p className="mb-6 text-sm md:text-base">
          {designation}
          {designation && company && ', '}
          {company}
        </p>
      )}
    </>
  );
};

export default SpeakersSection;

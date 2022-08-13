import Image from 'next/image';

import type * as React from 'react';
import type * as types from 'types';

const SpeakersSection: React.FC = () => {
  const section: types.SpeakersSection = {
    speakers: [
      {
        name: 'Arnelle Balane',
        designation: 'Software Developer',
        company: 'Newlogic',
        bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
        image: {
          url: '/images/speakers/arnelle-balane.jpg',
          alt: 'Arnelle Balane',
          width: 500,
          height: 500,
        },
      },
      {
        name: 'Arnelle Balane',
        designation: 'Software Developer',
        bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
      },
      {
        name: 'Arnelle Balane',
        company: 'Newlogic',
        bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
        image: {
          url: '/images/speakers/arnelle-balane.jpg',
          alt: 'Arnelle Balane',
          width: 500,
          height: 500,
        },
      },
    ],
  };

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

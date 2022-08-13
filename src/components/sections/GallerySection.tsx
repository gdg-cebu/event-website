import Image from 'next/image';
import Button from '../common/Button';
import styles from './GallerySection.module.css';

import type * as React from 'react';
import type * as types from 'types';

const GallerySection: React.FC = () => {
  const section: types.GallerySection = {
    title: 'Past highlights',
    description:
      'Last year we built lots of excitement. Check out photos from featured talks, hands-on learning sessions, and after-hours fun.',
    cta: {
      url: 'https://arnellebalane.com/',
      label: 'See all photos',
    },
    images: [],
  };
  const data = prepareSectionData(section);

  return (
    <section className="p-1">
      <div className={styles.grid}>
        {renderContent(data)}
        {renderImages(data)}
      </div>
    </section>
  );
};

const renderContent = ({ title, description, cta }: types.GallerySection): React.ReactNode => {
  return (
    <div className={`flex flex-col items-start py-12 px-6 md:px-12 -mx-1 md:mx-0 ${styles.content}`}>
      <h2 className="mb-4 text-xl md:text-2xl font-bold">{title}</h2>
      {description && <p className="mb-4 text-base md:text-lg">{description}</p>}
      {cta && (
        <Button href={cta.url} className="mt-auto">
          {cta.label}
        </Button>
      )}
    </div>
  );
};

const renderImages = ({ images }: types.GallerySection): React.ReactNode => {
  if ((images?.length ?? 0) === 0) {
    return (
      <>
        {new Array(9).fill(0).map((_, index) => (
          <div key={index} className={`w-full h-full bg-gray-100 ${styles.item}`} />
        ))}
      </>
    );
  }
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className={`w-full h-full bg-gray-100 relative ${styles.item}`}>
          <Image src={image.url} alt={image.alt} layout="fill" objectFit="cover" objectPosition="center center" />
        </div>
      ))}
    </>
  );
};

const prepareSectionData = (section: types.GallerySection): types.GallerySection => {
  if (section.images?.length ?? 0 > 0) {
    let images: types.Image[] = [];
    while (images.length < 9) {
      images = [...images, ...section.images];
    }
    images = images.slice(0, 9);
    section.images = images;
  }
  return section;
};

export default GallerySection;

import Image from 'next/image';

import type * as React from 'react';
import type * as types from 'types';

const Footer: React.FC = () => {
  const footer: types.FooterConfig = {
    copyright: 'Copyright © 2022. All rights reserved.',
  };

  return (
    <footer className="py-10 px-6 mt-auto bg-gray-100">
      <div className="xl:container mx-auto">
        <div className="flex flex-wrap items-center -mx-4 -my-2">
          {renderLogo(footer)}
          {footer.copyright && <p className="mx-4 my-2 text-sm md:text-base">{footer.copyright}</p>}
        </div>
      </div>
    </footer>
  );
};

const renderLogo = ({ logo }: types.FooterConfig): React.ReactNode => {
  if (!logo) {
    return null;
  }
  const aspectRatio = `${logo.width || 16} / ${logo.height || 9}`;
  return (
    <div className="h-16 mx-4 my-2 relative" style={{ aspectRatio }}>
      <Image src={logo.url} alt={logo.alt} layout="fill" objectFit="contain" objectPosition="left center" />
    </div>
  );
};

export default Footer;

import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import NavDrawer from './NavDrawer';

import type * as React from 'react';
import type * as types from 'types';

const Header: React.FC = () => {
  const headerConfig: types.HeaderConfig = {
    title: 'Event Name',
    titleImage: {
      url: '/images/default-logo.png',
      alt: 'Event Logo',
      width: 130,
      height: 130,
    },
    titleImageHeight: 64,
    showTitle: true,
    navLinks: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Speakers',
        url: '/speakers/',
      },
      {
        label: 'Schedule',
        url: '/schedule/',
      },
    ],
  };

  return (
    <header className="py-4 px-6">
      <div className="xl:container mx-auto flex items-center">
        {renderTitle(headerConfig)}
        {renderNav(headerConfig)}
        {renderDrawer(headerConfig)}
      </div>
    </header>
  );
};

const renderTitle = ({
  title,
  titleImage,
  titleImageHeight = 64,
  showTitle = true,
}: types.HeaderConfig): React.ReactNode => {
  if (!showTitle) {
    return null;
  }
  return (
    <Link href="/" passHref>
      {titleImage ? (
        <a
          className="inline-block relative"
          style={{
            aspectRatio: `${titleImage.width || 16} / ${titleImage.height || 9}`,
            height: `${titleImageHeight}px`,
          }}
        >
          <Image
            src={titleImage.url}
            alt={titleImage.alt}
            layout="fill"
            objectFit="contain"
            objectPosition="left center"
          />
        </a>
      ) : (
        <a className="inline-block py-2 px-4 -ml-4 rounded text-xl font-medium hover:bg-gray-100 focus:bg-gray-100">
          <h1>{title}</h1>
        </a>
      )}
    </Link>
  );
};

const renderNav = ({ navLinks }: types.HeaderConfig): React.ReactNode => {
  if (!navLinks || navLinks.length === 0) {
    return null;
  }
  return (
    <div className="hidden md:block ml-auto -mr-4">
      <Nav links={navLinks} />
    </div>
  );
};

const renderDrawer = (headerConfig: types.HeaderConfig): React.ReactNode => {
  return (
    <div className="md:hidden ml-auto -mr-3">
      <NavDrawer {...headerConfig} />
    </div>
  );
};

export default Header;

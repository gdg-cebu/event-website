import Link from 'next/link';

import type * as React from 'react';
import * as types from 'types';
import Nav from './Nav';

const Header: React.FC = () => {
  const headerConfig: types.HeaderConfig = {
    title: 'DevFest Cebu 2022',
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
        {renderNavLinks(headerConfig)}
      </div>
    </header>
  );
};

const renderTitle = ({ title, showTitle }: types.HeaderConfig): React.ReactNode => {
  if (!showTitle) {
    return null;
  }
  return (
    <Link href="/" passHref>
      <a className="inline-block py-2 px-4 -ml-4 rounded-md text-xl font-medium hover:bg-gray-100 focus:bg-gray-100">
        <h1>{title}</h1>
      </a>
    </Link>
  );
};

const renderNavLinks = ({ navLinks }: types.HeaderConfig): React.ReactNode => {
  if (!navLinks || navLinks.length == 0) {
    return null;
  }
  return (
    <div className="ml-auto -mr-4">
      <Nav links={navLinks} />
    </div>
  );
};

export default Header;

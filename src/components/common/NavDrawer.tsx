import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import Drawer from './Drawer';

import type * as React from 'react';
import * as types from 'types';

const NavDrawer: React.FC<types.HeaderConfig> = ({ title, showTitle, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  const getActiveClass = (url: string) =>
    url === asPath ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 focus:bg-gray-100';

  return (
    <>
      <button className="block md:hidden w-11 h-11 rounded-full hover:bg-gray-100 focus:bg-gray-100">
        <MenuIcon className="w-6 h-6 mx-auto" onClick={() => setIsOpen(true)} />
      </button>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <div className="mb-6">{renderTitle({ title, showTitle })}</div>

          {(navLinks?.length ?? 0) > 0 && (
            <div>
              {navLinks?.map((link, index) => (
                <Link key={index} href={link.url} passHref>
                  <a className={`block py-2 px-4 my-1 rounded-md ${getActiveClass(link.url)}`}>{link.label}</a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

const renderTitle = ({ title, showTitle }: types.HeaderConfig): React.ReactNode => {
  if (!showTitle) {
    return null;
  }
  return (
    <Link href="/" passHref>
      <a className="block py-2 px-4 rounded-md text-xl font-medium hover:bg-gray-100 focus:bg-gray-100">
        <h1>{title}</h1>
      </a>
    </Link>
  );
};

export default NavDrawer;

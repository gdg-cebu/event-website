import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/outline';
import Drawer from './Drawer';

import type * as React from 'react';
import * as types from 'types';

const NavDrawer: React.FC<types.HeaderConfig> = ({ ...headerConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();
  const { navLinks } = headerConfig;

  const getActiveClass = (url: string) =>
    url === asPath ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 focus:bg-gray-100';

  return (
    <>
      <button className="block md:hidden w-11 h-11 rounded-full hover:bg-gray-100 focus:bg-gray-100">
        <MenuIcon className="w-6 h-6 mx-auto" onClick={() => setIsOpen(true)} />
      </button>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">
          <div className="mb-6">{renderTitle(headerConfig)}</div>

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
        <a className="block py-2 px-4 rounded-md text-xl font-medium hover:bg-gray-100 focus:bg-gray-100">
          <h1>{title}</h1>
        </a>
      )}
    </Link>
  );
};

export default NavDrawer;
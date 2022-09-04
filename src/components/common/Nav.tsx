import { useRouter } from 'next/router';
import Link from 'next/link';

import type * as React from 'react';
import type * as types from 'types';

export type Props = { links: types.Link[] };

const Nav: React.FC<Props> = ({ links }) => {
  const { asPath } = useRouter();
  const getActiveClass = (url: string) =>
    url === asPath ? 'bg-primary-faded text-primary' : 'hover:bg-complementary-faded focus:bg-complementary-faded';

  return (
    <>
      <nav className="-mx-1">
        {links.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            <a className={`inline-block py-2 px-4 mx-1 rounded ${getActiveClass(link.url)}`}>{link.label}</a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Nav;

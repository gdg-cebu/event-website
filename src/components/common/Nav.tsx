import { useRouter } from 'next/router';
import Link from 'next/link';

import type * as React from 'react';
import * as types from 'types';

export type Props = { links: types.Link[] };

const Nav: React.FC<Props> = ({ links }) => {
  const { asPath } = useRouter();
  const getActiveClass = (url: string) =>
    url === asPath ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 focus:bg-gray-100';

  return (
    <nav className="-mx-1">
      {links.map((link, index) => (
        <Link key={index} href={link.url} passHref>
          <a className={`inline-block py-2 px-4 mx-1 rounded-md ${getActiveClass(link.url)}`}>{link.label}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

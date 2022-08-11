import Link from 'next/link';

import type * as React from 'react';

export type Props = { className?: string; href?: string };

const Button: React.FC<React.PropsWithChildren<Props>> = ({ children, className, href }) => {
  const classNames = [
    'inline-block',
    'py-3',
    'px-8',
    'border',
    'border-gray-200',
    'rounded',
    'text-base',
    'font-medium',
    'text-blue-800',
    'hover:border-blue-100',
    'hover:bg-blue-50',
    'focus:border-blue-100',
    'focus:bg-blue-50',
    className,
  ].join(' ');

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={classNames}>{children}</a>
      </Link>
    );
  }

  return <button className={classNames}>{children}</button>;
};

export default Button;

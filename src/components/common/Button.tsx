import Link from 'next/link';

import type * as React from 'react';

export type Props = { className?: string; href?: string; variant?: 'default' | 'primary' };

const Button: React.FC<React.PropsWithChildren<Props>> = ({ children, className, href, variant = 'default' }) => {
  const classNames = [
    'inline-block',
    'py-3',
    'px-8',
    'border',
    'rounded',
    'text-base',
    'font-medium',
    variant === 'default' &&
      'border-gray-200 text-blue-800 hover:border-blue-100 hover:bg-blue-50 focus:border-blue-100 focus:bg-blue-50',
    variant === 'primary' &&
      'border-blue-800 bg-blue-800 text-white hover:bg-blue-900 hover:border-blue-900 focus:bg-blue-900 focus:border-blue-900',
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

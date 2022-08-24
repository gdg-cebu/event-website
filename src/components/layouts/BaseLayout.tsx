import { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { SiteConfigContext } from '../../contexts/site-config';

import type * as React from 'react';

const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const siteConfig = useContext(SiteConfigContext);
  const { header, footer } = siteConfig;

  return (
    <>
      {header && <Header {...header} />}
      {children}
      {footer && <Footer {...footer} />}
    </>
  );
};

export default BaseLayout;

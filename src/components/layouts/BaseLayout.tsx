import { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { SiteConfigContext } from '../../contexts/site-config';

import type * as React from 'react';
import type * as types from 'types';

const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const siteConfig = useContext(SiteConfigContext);
  const siteObjectId = (siteConfig as types.SourcebitObject).__metadata.id;
  const { header, footer } = siteConfig;

  return (
    <>
      {header && (
        <div data-sb-object-id={siteObjectId}>
          <Header {...header} sb=".header" />
        </div>
      )}
      {children}
      {footer && (
        <div className="mt-auto" data-sb-object-id={siteObjectId}>
          <Footer {...footer} sb=".footer" />
        </div>
      )}
    </>
  );
};

export default BaseLayout;

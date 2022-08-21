import DynamicSection from '../common/DynamicSection';

import type * as React from 'react';
import type * as types from 'types';

export type Props = { page: types.HomePage };

const HomePageLayout: React.FC<types.HomePage> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <DynamicSection key={index} section={section} />
      ))}
    </>
  );
};

export default HomePageLayout;

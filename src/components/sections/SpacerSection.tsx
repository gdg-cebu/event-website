import * as types from '../../../types';
import type * as React from 'react';

const SIZE_CLASSES: Record<types.SpacerSize, string> = {
  [types.SpacerSize.SMALL]: 'h-10 md:h-20',
  [types.SpacerSize.MEDIUM]: 'h-16 md:h-32',
  [types.SpacerSize.LARGE]: 'h-20 md:h-44',
  [types.SpacerSize.FLEX]: 'flex-grow',
};

const SpacerSection: React.FC<types.SpacerSection> = ({ size = types.SpacerSize.SMALL }) => {
  const className = SIZE_CLASSES[size];
  return <section className={className} />;
};

export default SpacerSection;

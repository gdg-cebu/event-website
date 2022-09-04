import Markdown from '../common/Markdown';

import type * as React from 'react';
import type * as types from 'types';

const StatsSection: React.FC<types.StatsSection> = (section) => {
  return (
    <section className="py-8 px-6 md:py-20">
      <div className="xl:container mx-auto flex items-start flex-wrap lg:flex-nowrap">
        {renderContent(section)}
        {renderStats(section)}
      </div>
    </section>
  );
};

const renderContent = ({ content }: types.StatsSection): React.ReactNode => {
  if (!content) {
    return null;
  }
  return <Markdown content={content} className="lg:max-w-2xl lg:mr-32 2xl:mr-52" />;
};

const renderStats = ({ stats }: types.StatsSection): React.ReactNode => {
  if (!stats || stats.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap flex-grow mt-10 lg:mt-0 -mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="mr-20 lg:mr-8 mb-8 lg:w-52">
          <p className="text-4xl md:text-5xl">{stat.value}</p>
          <hr className="block w-16 h-1 border-0 my-2 bg-primary" />
          <p className="text-base md:text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

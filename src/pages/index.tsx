import Header from '../components/common/Header';
import EventInfoSection from '../components/sections/EventInfoSection';
import StatsSection from '../components/sections/StatsSection';
import SpacerSection from '../components/sections/SpacerSection';
import GallerySection from '../components/sections/GallerySection';
import PartnersSection from '../components/sections/PartnersSection';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <EventInfoSection />
      <StatsSection />
      <SpacerSection />
      <GallerySection />
      <SpacerSection />
      <PartnersSection />
    </>
  );
};

export default Home;

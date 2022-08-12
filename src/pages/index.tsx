import Header from '../components/common/Header';
import EventInfoSection from '../components/models/EventInfoSection';
import StatsSection from '../components/models/StatsSection';
import SpacerSection from '../components/models/SpacerSection';
import GallerySection from '../components/models/GallerySection';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <EventInfoSection />
      <StatsSection />
      <SpacerSection />
      <GallerySection />
    </>
  );
};

export default Home;

import EventInfoSection from '../components/sections/EventInfoSection';
import StatsSection from '../components/sections/StatsSection';
import SpacerSection from '../components/sections/SpacerSection';
import GallerySection from '../components/sections/GallerySection';
import PartnersSection from '../components/sections/PartnersSection';
import SocialSection from '../components/sections/SocialSection';
import DividerSection from '../components/sections/DividerSection';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <EventInfoSection />
      <StatsSection />
      <SpacerSection />
      <GallerySection />
      <SpacerSection />
      <PartnersSection />
      <SpacerSection />
      <DividerSection />
      <SocialSection />
    </>
  );
};

export default Home;

import Header from '../components/common/Header';
import EventInfoSection from '../components/models/EventInfoSection';
import StatsSection from '../components/models/StatsSection';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <EventInfoSection />
      <StatsSection />
    </>
  );
};

export default Home;

import Header from '../components/common/Header';
import EventInfoSection from '../components/models/EventInfoSection';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <EventInfoSection />
    </>
  );
};

export default Home;

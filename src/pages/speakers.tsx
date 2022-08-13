import EventPageLayout from '../components/layouts/EventPageLayout';
import SocialSection from '../components/sections/SocialSection';

import type { NextPage } from 'next';

const Speakers: NextPage = () => {
  return (
    <EventPageLayout
      title="Speakers"
      subtitle="Learn Google's latest developer products from Googlers, Google Developer Experts, guest speakers and more."
    >
      <SocialSection />
    </EventPageLayout>
  );
};

export default Speakers;

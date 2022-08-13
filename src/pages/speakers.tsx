import EventPageLayout from '../components/layouts/EventPageLayout';
import SpeakersSection from '../components/sections/SpeakersSection';
import DividerSection from '../components/sections/DividerSection';
import SocialSection from '../components/sections/SocialSection';

import type { NextPage } from 'next';

const Speakers: NextPage = () => {
  return (
    <EventPageLayout
      title="Speakers"
      subtitle="Learn Google's latest developer products from Googlers, Google Developer Experts, guest speakers and more."
    >
      <SpeakersSection />
      <DividerSection />
      <SocialSection />
    </EventPageLayout>
  );
};

export default Speakers;

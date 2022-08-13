import EventPageLayout from '../components/layouts/EventPageLayout';
import SpeakersSection from '../components/sections/SpeakersSection';
import SpacerSection from '../components/sections/SpacerSection';
import DividerSection from '../components/sections/DividerSection';
import SocialSection from '../components/sections/SocialSection';
import * as types from '../../types';

import type { NextPage } from 'next';

const Speakers: NextPage = () => {
  return (
    <EventPageLayout
      title="Speakers"
      subtitle="Learn Google's latest developer products from Googlers, Google Developer Experts, guest speakers and more."
    >
      <SpeakersSection />
      <SpacerSection size={types.SpacerSize.FLEX} />
      <DividerSection />
      <SocialSection />
    </EventPageLayout>
  );
};

export default Speakers;

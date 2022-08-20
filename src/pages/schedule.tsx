import EventPageLayout from '../components/layouts/EventPageLayout';
import ScheduleSection from '../components/sections/ScheduleSection';
import SpacerSection from '../components/sections/SpacerSection';
import DividerSection from '../components/sections/DividerSection';
import SocialSection from '../components/sections/SocialSection';
import * as types from '../../types';

import type { NextPage } from 'next';

const Schedule: NextPage = () => {
  return (
    <EventPageLayout
      title="Schedule"
      subtitle="Learn Google's latest developer products from Googlers, Google Developer Experts, guest speakers and more."
    >
      <ScheduleSection />
      <SpacerSection size={types.SpacerSize.FLEX} />
      <DividerSection />
      <SocialSection />
    </EventPageLayout>
  );
};

export default Schedule;

import { getComponent } from '../registry';

const DynamicSection = ({ section }) => {
  const SectionComponent = getComponent(section.type);
  if (!SectionComponent) {
    throw new Error(`Unknown section: ${section.type}`);
  }
  return <SectionComponent {...section} />;
};

export default DynamicSection;

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
interface Section {}

export interface Image {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Link {
  label: string;
  url: string;
}

export interface EventConfig {
  name: string;
  description: string;
  logo: Image;
  date: Date;
  venue: string;
}

export interface HeaderConfig {
  title?: string;
  titleImage?: Image;
  titleImageHeight?: number;
  showTitle?: boolean;
  navLinks?: Link[];
}

export interface FooterConfig {
  copyright?: string;
  logo?: Image;
}

export interface EventInfoSection extends Section {
  logo?: Image;
  description?: string;
  date?: Date;
  venue?: string;
  cta?: Link;
  banner?: Image;
}

export interface Stats {
  label: string;
  value: string;
}

export interface StatsSection extends Section {
  content?: string;
  stats?: Stats[];
}

export enum SpacerSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  FLEX = 'flex',
}

export interface SpacerSection extends Section {
  size?: SpacerSize;
}

export interface GallerySection extends Section {
  images: Image[];
  title: string;
  description?: string;
  cta?: Link;
}

export interface Partner {
  name: string;
  url?: string;
  logo?: Image;
  height?: number;
}

export interface PartnersGroup {
  title: string;
  partners: Partner[];
}

export interface PartnersSection extends Section {
  title: string;
  groups: PartnersGroup[];
}

export interface SocialSection extends Section {
  content: string;
  links: Link[];
  image?: Image;
}

export interface Speaker {
  name: string;
  designation?: string;
  company?: string;
  bio?: string;
  image?: Image;
}

export interface SpeakersSection extends Section {
  speakers: Speaker[];
}

export interface Session {
  title: string;
  startTime: Date;
  endTime: Date;
  speakers?: Speaker[];
  spanAllTracks?: boolean;
}

export interface ScheduleTrack {
  title: string;
  details?: string;
  sessions: Session[];
}

export interface ScheduleSection extends Section {
  tracks: ScheduleTrack[];
}

export interface HomePage {
  sections: Section[];
}

export interface EventPage {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  sections: Section[];
}

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

export interface EventInfoSection {
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

export interface StatsSection {
  content?: string;
  stats?: Stats[];
}

export enum SpacerSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  FLEX = 'flex',
}

export interface SpacerSection {
  size?: SpacerSize;
}

export interface GallerySection {
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

export interface PartnersSection {
  title: string;
  groups: PartnersGroup[];
}

export interface SocialSection {
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

export interface SpeakersSection {
  speakers: Speaker[];
}

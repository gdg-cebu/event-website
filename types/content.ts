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

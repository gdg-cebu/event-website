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

export interface HeaderConfig {
  title?: string;
  titleImage?: Image;
  titleImageHeight?: number;
  showTitle?: boolean;
  navLinks?: Link[];
}

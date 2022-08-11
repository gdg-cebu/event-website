export interface Link {
  label: string;
  url: string;
}

export interface HeaderConfig {
  title?: string;
  showTitle?: boolean;
  navLinks?: Link[];
}

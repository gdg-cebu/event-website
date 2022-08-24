import { defaultEventConfig } from '../contexts/event-config';
import { defaultSiteConfig } from '../contexts/site-config';

import * as types from 'types';

export function slugToUrlPath(slug: string | string[]): string {
  if (typeof slug === 'string') {
    return '/' + slug;
  }
  return '/' + slug.join('/');
}

export function resolveStaticProps(urlPath: string, data: types.SourcebitData): types.PageProps {
  const page = data.pages.find((page) => page.__metadata.urlPath === urlPath);
  const siteConfig =
    (data.objects.find((object) => object.__metadata.id === 'content/data/site.json') as types.SiteConfig) ||
    defaultSiteConfig;
  const eventConfig =
    (data.objects.find((object) => object.__metadata.id === 'content/data/event.json') as types.EventConfig) ||
    defaultEventConfig;
  return { page, siteConfig, eventConfig };
}

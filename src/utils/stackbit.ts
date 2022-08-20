import type * as types from 'types';

export function slugToUrlPath(slug: string | string[]): string {
  if (typeof slug === 'string') {
    return '/' + slug;
  }
  return '/' + slug.join('/');
}

export function resolveStaticProps(urlPath: string, data: types.SourcebitData): types.PageProps {
  const page = data.pages.find((page) => page.__metadata.urlPath === urlPath);
  return page ? { page } : {};
}

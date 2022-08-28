import get from 'lodash/get';
import { defaultEventConfig } from '../contexts/event-config';
import { defaultSiteConfig } from '../contexts/site-config';

const resolvers = {
  HomePage(object, data) {
    object.frontmatter.sections = object.frontmatter.sections?.map((section) => resolveReferences(section, data));
    return object;
  },
  EventPage(object, data) {
    object.frontmatter.sections = object.frontmatter.sections?.map((section) => resolveReferences(section, data));
    return object;
  },
  SpeakersSection(object, data) {
    object.speakers = object.speakers?.map((speaker) => resolveObjectPath(speaker, data));
    return object;
  },
};

export function slugToUrlPath(slug) {
  return '/' + [].concat(slug).join('/');
}

export function resolveObjectPath(path, data) {
  return data.objects.find((object) => object.__metadata.relProjectPath === path);
}

export function resolveReferences(object, data) {
  if (!object) {
    return null;
  }
  const type = get(object, '__metadata.modelName', get(object, 'type'));
  if (!(type in resolvers)) {
    return object;
  }
  const resolver = resolvers[type];
  return resolver(object, data);
}

export function resolveStaticProps(urlPath, data) {
  const page = resolveReferences(
    data.pages.find((page) => page.__metadata.urlPath === urlPath),
    data
  );
  const siteConfig =
    data.objects.find((object) => object.__metadata.id === 'content/data/site.json') || defaultSiteConfig;
  const eventConfig =
    data.objects.find((object) => object.__metadata.id === 'content/data/event.json') || defaultEventConfig;
  return { page, siteConfig, eventConfig };
}

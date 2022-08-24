import type * as types from 'types';

export interface SourcebitObjectMetaData {
  id: string;
  source: string;
  sourceName: string;
  sourcePath: string;
  relSourcePath: string;
  relProjectPath: string;
  modelType: string;
  modelName: string;
  modelLabel: string;
  urlPath: string;
}

export interface SourcebitObjectFrontMatter {
  layout: string;
}

type SourcebitHomePageFrontMatter = SourcebitObjectFrontMatter & types.HomePage;
type SourcebitEventPageFrontMatter = SourcebitObjectFrontMatter & types.EventPage;

export interface BaseSourcebitObject {
  __metadata: SourcebitObjectMetaData;
}

type SourcebitObject =
  | (BaseSourcebitObject & {
      frontmatter: SourcebitHomePageFrontMatter | SourcebitEventPageFrontMatter;
    })
  | (BaseSourcebitObject & types.EventConfig)
  | (BaseSourcebitObject & types.SiteConfig);

export interface SourcebitData {
  objects: SourcebitObject[];
  pages: SourcebitObject[];
}

export type PageProps =
  | {
      page?: SourcebitObject;
      siteConfig: types.SiteConfig;
      eventConfig: types.EventConfig;
    }
  | Record<string, never>;

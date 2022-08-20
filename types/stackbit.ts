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

export interface SourcebitObject {
  __metadata: SourcebitObjectMetaData;
  frontmatter: SourcebitHomePageFrontMatter | SourcebitEventPageFrontMatter;
}

export interface SourcebitData {
  objects: SourcebitObject[];
  pages: SourcebitObject[];
}

export type PageProps =
  | {
      page: SourcebitObject;
    }
  | Record<string, never>;

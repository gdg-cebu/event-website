import { sourcebitDataClient } from 'sourcebit-target-next';
import { resolveStaticProps, slugToUrlPath } from '../utils/stackbit';

import type * as React from 'react';
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import type * as types from 'types';

const DynamicPage: React.FC<types.PageProps> = ({ page }) => {
  return null;
};

export default DynamicPage;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const data = await sourcebitDataClient.getData();
  const paths = data.pages.map((page) => page.__metadata.urlPath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<types.PageProps>> {
  const data = await sourcebitDataClient.getData();
  const urlPath = slugToUrlPath(context.params?.slug ?? []);
  const props = resolveStaticProps(urlPath, data);
  return {
    props,
  };
}

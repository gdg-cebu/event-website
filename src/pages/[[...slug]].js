import { sourcebitDataClient } from 'sourcebit-target-next';
import { getComponent } from '../components/registry';
import { resolveStaticProps, slugToUrlPath } from '../utils/stackbit';

const DynamicPage = ({ page }) => {
  const PageComponent = getComponent(page.frontmatter.layout);
  if (!PageComponent) {
    throw new Error(`Unknown layout: ${page.frontmatter.layout}`);
  }
  return <PageComponent {...page.frontmatter} />;
};

export default DynamicPage;

export async function getStaticPaths() {
  const data = await sourcebitDataClient.getData();
  const paths = data.pages.map((page) => page.__metadata.urlPath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await sourcebitDataClient.getData();
  const urlPath = slugToUrlPath(context.params?.slug ?? []);
  const props = resolveStaticProps(urlPath, data);
  return {
    props,
  };
}

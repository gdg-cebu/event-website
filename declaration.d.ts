declare module '*.module.css' {
  const styles = Record<string, string>;
  export default styles;
}
declare module '*.css';

declare module 'sourcebit-target-next' {
  type SourcebitData = import('./types').SourcebitData;

  interface SourcebitDataClient {
    getData: () => Promise<SourcebitData>;
  }

  export const sourcebitDataClient: SourcebitDataClient;
}

declare module 'sourcebit-target-next/with-remote-data-updates';

declare module '*.module.css';
declare module '*.css';

declare module 'sourcebit-target-next' {
  type SourcebitData = import('./types').SourcebitData;

  interface SourcebitDataClient {
    getData: () => Promise<SourcebitData>;
  }

  export const sourcebitDataClient: SourcebitDataClient;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_TAG_MANAGER_ID: string;
  readonly VITE_GOOGLE_MAP_API_KEY: string;
  readonly STORYBOOK_GOOGLE_MAP_API_KEY: string;
  readonly VITE_API_URL: string;
  readonly VITE_PW: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

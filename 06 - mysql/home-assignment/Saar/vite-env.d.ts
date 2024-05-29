interface ImportMetaEnv {
  readonly VITE_MYSQLPASS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

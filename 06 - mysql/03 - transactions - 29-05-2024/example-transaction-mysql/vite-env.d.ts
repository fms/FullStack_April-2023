interface ImportMetaEnv {
  readonly VITE_MYSQLPASSWORD: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

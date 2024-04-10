// src/reportWebVitals.ts

import { onCLS, getFID, getLCP } from 'web-vitals';

export const reportWebVitals = () => {
  onCLS();
  getFID();
  getLCP();
};


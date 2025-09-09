import { createContext } from 'react';

export type TranslateCtx = {
  language: 'TH' | 'EN';
  setLanguage: (lang: 'TH' | 'EN') => void;
  translate: (th: string, en: string) => string;
};

export const TranslateContext = createContext<TranslateCtx>({
  language: 'TH',
  setLanguage: () => console.warn('TranslateContext not initialized'),
  translate: (th) => th,
});




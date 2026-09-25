'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function BodyWrapper({ children }) {
  const { lang } = useLanguage();

  return (
    <div className={lang === 'hi' ? 'devanagari' : ''}>
      {children}
    </div>
  );
}

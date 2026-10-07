'use client';

import { useLanguage } from '@/context/LanguageContext';
import CHANDER_VIHAR_CONTENT from './content/chander-vihar-initiatives.content';
import ChanderViharHeroSection from './components/ChanderViharHeroSection';
import ChanderViharOverviewSection from './components/ChanderViharOverviewSection';
import ChanderViharWorkSection from './components/ChanderViharWorkSection';
import ChanderViharAreaGuide from './components/ChanderViharAreaGuide';
import ChanderViharFacebookSection from './components/ChanderViharFacebookSection';
import ChanderViharCtaSection from './components/ChanderViharCtaSection';

export function InitiativesView() {
  const { lang } = useLanguage();
  const c = CHANDER_VIHAR_CONTENT[lang];
  const isHi = lang === 'hi';

  return (
    <div className={isHi ? 'devanagari' : ''}>
      <ChanderViharHeroSection content={c} />
      <ChanderViharOverviewSection content={c} isHi={isHi} />
      <ChanderViharWorkSection content={c} />
      <ChanderViharAreaGuide content={c} isHi={isHi} />
      <ChanderViharFacebookSection content={c} />
      <ChanderViharCtaSection content={c} />
    </div>
  );
}

export default InitiativesView;

'use client';

import { useLanguage } from '@/context/LanguageContext';
import ABOUT_CONTENT from './content/about.content';
import AboutHeroSection from './components/AboutHeroSection';
import AboutIntroSection from './components/AboutIntroSection';
import AboutGlanceSection from './components/AboutGlanceSection';
import AboutWhyMattersSection from './components/AboutWhyMattersSection';
import AboutApproachSection from './components/AboutApproachSection';
import AboutBehindSection from './components/AboutBehindSection';
import AboutVisionSection from './components/AboutVisionSection';
import AboutCtaSection from './components/AboutCtaSection';

export function AboutView() {
  const { lang } = useLanguage();
  const c = ABOUT_CONTENT[lang];
  const isHi = lang === 'hi';

  return (
    <div className={isHi ? 'devanagari' : ''}>
      <AboutHeroSection content={c} />
      <AboutIntroSection content={c} isHi={isHi} />
      <AboutGlanceSection content={c} />
      <AboutWhyMattersSection content={c} isHi={isHi} />
      <AboutApproachSection content={c} />
      <AboutBehindSection content={c} isHi={isHi} />
      <AboutVisionSection content={c} isHi={isHi} />
      <AboutCtaSection content={c} />
    </div>
  );
}

export default AboutView;

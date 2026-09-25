'use client';

import { useLanguage } from '@/context/LanguageContext';
import HOW_WE_WORK_CONTENT from './content/how-we-work.content';
import HowWeWorkHeroSection from './components/HowWeWorkHeroSection';
import HowWeWorkStepsSection from './components/HowWeWorkStepsSection';
import HowWeWorkFounderSection from './components/HowWeWorkFounderSection';
import HowWeWorkServicesSection from './components/HowWeWorkServicesSection';
import HowWeWorkWhoSection from './components/HowWeWorkWhoSection';
import HowWeWorkPromiseSection from './components/HowWeWorkPromiseSection';
import HowWeWorkGoodConnectionSection from './components/HowWeWorkGoodConnectionSection';
import HowWeWorkCtaSection from './components/HowWeWorkCtaSection';

export function HowWeWorkView() {
  const { lang } = useLanguage();
  const c = HOW_WE_WORK_CONTENT[lang];
  const isHi = lang === 'hi';

  return (
    <div className={isHi ? 'devanagari' : ''}>
      <HowWeWorkHeroSection content={c} />
      <HowWeWorkStepsSection content={c} />
      <HowWeWorkFounderSection content={c} isHi={isHi} />
      <HowWeWorkServicesSection content={c} />
      <HowWeWorkWhoSection content={c} />
      <HowWeWorkPromiseSection content={c} />
      <HowWeWorkGoodConnectionSection content={c} isHi={isHi} />
      <HowWeWorkCtaSection content={c} />
    </div>
  );
}

export default HowWeWorkView;

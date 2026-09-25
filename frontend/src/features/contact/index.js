'use client';

import { useLanguage } from '@/context/LanguageContext';
import CONTACT_CONTENT from './content/contact.content';
import ContactHeroSection from './components/ContactHeroSection';
import ContactDetailsSection from './components/ContactDetailsSection';
import ContactFounderSection from './components/ContactFounderSection';
import ContactFaqSection from './components/ContactFaqSection';
import ContactCtaSection from './components/ContactCtaSection';

export function ContactView() {
  const { lang } = useLanguage();
  const c = CONTACT_CONTENT[lang];
  const isHi = lang === 'hi';

  return (
    <div className={isHi ? 'devanagari' : ''}>
      <ContactHeroSection content={c} />
      <ContactDetailsSection content={c} isHi={isHi} />
      <ContactFounderSection content={c} isHi={isHi} />
      <ContactFaqSection content={c} />
      <ContactCtaSection content={c} />
    </div>
  );
}

export default ContactView;

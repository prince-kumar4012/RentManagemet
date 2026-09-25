'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import HOME_CONTENT from './content/home.content';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StorySection from './components/StorySection';
import HowItWorksSection from './components/HowItWorksSection';
import DifferenceSection from './components/DifferenceSection';
import HomeFounderSection from './components/HomeFounderSection';
import CommunitySection from './components/CommunitySection';
import CtaSection from './components/CtaSection';
import { InquiryModal } from '@/components/ui';

export function HomeView() {
  const { lang } = useLanguage();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Rent');

  const content = HOME_CONTENT[lang];
  const isHi = lang === 'hi';

  const handleOpenInquiry = (serviceName = 'Rent') => {
    setSelectedService(serviceName);
    setInquiryModalOpen(true);
  };

  return (
    <div className={isHi ? 'devanagari' : ''}>
      <HeroSection content={content} isHi={isHi} onOpenInquiry={handleOpenInquiry} />
      <ServicesSection content={content} isHi={isHi} onOpenInquiry={handleOpenInquiry} />
      <StorySection content={content} isHi={isHi} />
      <HowItWorksSection content={content} onOpenInquiry={handleOpenInquiry} />
      <DifferenceSection content={content} />
      <HomeFounderSection content={content} isHi={isHi} />
      <CommunitySection isHi={isHi} />
      <CtaSection content={content} isHi={isHi} onOpenInquiry={handleOpenInquiry} />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default HomeView;

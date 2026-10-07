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
import CommunityGallerySection from './components/CommunityGallerySection';
import MediaSection from './components/MediaSection';
import StatsSection from './components/StatsSection';
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
      {/* 1. Hero Section (Kept 100% exact to user's screenshot 1) */}
      <HeroSection content={content} isHi={isHi} onOpenInquiry={handleOpenInquiry} />

      {/* 2. Property Services Section (Kept 100% exact to user's screenshot 2) */}
      <ServicesSection content={content} isHi={isHi} onOpenInquiry={handleOpenInquiry} />

      {/* 3. Our Foundation / Story Section */}
      <StorySection content={content} isHi={isHi} />

      {/* 4. How It Works Section */}
      <HowItWorksSection content={content} onOpenInquiry={handleOpenInquiry} />

      {/* 5. CVP Exchange Difference Section */}
      <DifferenceSection content={content} />

      {/* 6. Founder & Team Section */}
      <HomeFounderSection content={content} isHi={isHi} />

      {/* 7. Ground Action Photo Gallery */}
      <CommunityGallerySection isHi={isHi} />

      {/* 8. Facebook & YouTube Media Section */}
      <MediaSection content={content} />

      {/* 9. Testimonials & Community Trust Section */}
      <StatsSection isHi={isHi} />

      {/* 10. Bottom CTA Section */}
      <CtaSection content={content} isHi={isHi} onOpenInquiry={handleOpenInquiry} />

      {/* Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default HomeView;

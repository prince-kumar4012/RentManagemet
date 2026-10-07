'use client';

import { MapPin, ArrowRight } from 'lucide-react';
import { WhatsAppIcon, PhoneIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export default function HeroSection({ content, isHi, onOpenInquiry }) {
  return (
    <section className="relative bg-slate-100 overflow-hidden">
      {/* Full-width Panoramic Hero Banner Image */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center">
        
        {/* Background Hero Banner */}
        <img
          src="/images/banners/heroBanner.jpg"
          alt="Connecting People. Building Trust. — Chander Vihar"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-right-top"
        />

        {/* Left-to-right white gradient mask for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-transparent lg:w-[65%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent sm:hidden pointer-events-none" />

        {/* Top Right Script Text (Positioned next to Pajji's head) */}
        <div className="hidden lg:block absolute top-8 right-[22%] lg:right-[26%] xl:right-[28%] z-10 text-left pointer-events-none select-none">
          <p className="font-serif italic text-2xl lg:text-3xl text-slate-800 font-bold leading-tight tracking-wide drop-shadow-2xs opacity-90 whitespace-pre-line">
            {isHi ? 'एक सशक्त\nचंदर विहार\nएक साथ' : 'A Stronger\nChander Vihar\nTogether'}
          </p>
        </div>

        {/* Left Content Panel */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="max-w-xl text-slate-900">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#EBF7FC] border border-[#BAE6FD] text-[#0284C7] font-bold text-xs px-4 py-1.5 rounded-full mb-6 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#00A3AD] fill-current" />
              <span>{content.hero_location || (isHi ? 'चंदर विहार • दिल्ली' : 'CHANDER VIHAR • DELHI')}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-3">
              <span className="text-[#0F172A] block">{content.h1_line1}</span>
              <span className="text-[#00A3AD] block">{content.h1_line2}</span>
            </h1>

            {/* Orange Subtitle Highlight */}
            <p className="text-[#FF9900] font-bold text-lg sm:text-xl mb-5 leading-snug">
              {content.tagline}
            </p>

            {/* Body Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-lg">
              {content.hero_body}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`tel:${SITE_CONFIG.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
              >
                <PhoneIcon className="w-4 h-4 fill-current shrink-0" />
                <span>{content.cta1}</span>
                <ArrowRight className="w-4 h-4 shrink-0 ml-0.5" />
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                <span>{content.cta2}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

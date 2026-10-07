'use client';

import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon, PhoneIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export default function CtaSection({ content, isHi }) {
  const checkItems = isHi
    ? ['संपत्ति · गोदाम · दुकान', 'PM-UDAY सहायता डेस्क', 'नागरिक व सामुदायिक सहायता']
    : ['Property · Godown · Shop', 'PM-UDAY Help Desk', 'Community Support'];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Skyline Banner Image (cta-skyline-banner.jpg) */}
      <img
        src="/images/banners/cta-skyline-banner.jpg"
        alt="Chander Vihar Property Exchange CTA"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => { e.target.src = '/images/banners/heroBanner.jpg'; }}
      />

      {/* Soft Light Overlay for Text Readability */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Plain Text */}
        <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
          {content?.cta_badge || (isHi ? 'आज ही शुरुआत करें' : 'START CONVERSATION TODAY')}
        </p>

        {/* Centered Main Heading */}
        <h2 className="font-extrabold text-[#0F172A] text-2xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight max-w-3xl mx-auto mb-4">
          {content?.cta_title || (isHi
            ? 'भरोसेमंद संपर्कों के साथ अपनी प्रॉपर्टी यात्रा आज ही शुरू करें।'
            : 'Start Your Property Journey Today With Connections You Can Trust.')}
        </h2>

        {/* Centered Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-normal">
          {content?.cta_body || (isHi
            ? 'चाहे आपको खरीदना हो, बेचना हो, किराए पर लेना हो या PM-UDAY दस्तावेज़ीकरण सहायता चाहिए — गुल्लू जी और टीम आपकी सहायता हेतु सदैव उपलब्ध हैं।'
            : 'Whether you want to buy, sell, rent, or need PM-UDAY documentation help — Gullu Ji and team are here to guide you.')}
        </p>

        {/* Side-by-side Centered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#00A884] hover:bg-[#008f70] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
            <span>{content?.cta_btn1 || (isHi ? 'व्हाट्सएप करें' : 'WhatsApp Us')}</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.rawPhone}`}
            className="inline-flex items-center justify-center gap-2.5 bg-[#00A3AD] hover:bg-[#008A93] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
          >
            <PhoneIcon className="w-4 h-4 fill-current shrink-0" />
            <span>{content?.cta_btn2 || (isHi ? 'हमसे बात करें' : 'Talk to Us')}</span>
          </a>
        </div>

        {/* Centered Checkmark Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-800 text-xs sm:text-sm font-bold mb-3">
          {checkItems.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* Bottom Italic Support Caption */}
        <p className="text-slate-500 italic text-xs font-medium">
          {content?.cta_support || (isHi
            ? 'चंदर विहार एवं निलोठी — आपका अपना स्थानीय नेटवर्क, आपका अपना समुदाय।'
            : 'Chander Vihar & Nilothi — Your Local Network, Your Community.')}
        </p>

      </div>
    </section>
  );
}

'use client';

import { PhoneIcon, WhatsAppIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export default function ContactCtaSection({ content }) {
  return (
    <section className="bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy leading-tight tracking-tight mb-4">
          {content.final_title}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">{content.final_body}</p>
        
        {/* 1 row mobile dual CTAs matching Figma design system */}
        <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:gap-4 justify-center mb-6">
          <a
            href={`tel:${SITE_CONFIG.rawPhone}`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-3 sm:px-8 py-3.5 rounded-full text-xs sm:text-base font-bold transition-all shadow-md hover:scale-105 active:scale-95 text-center"
          >
            <PhoneIcon className="w-4 h-4 shrink-0 fill-current" />
            <span>{content.cta_call}</span>
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-8 py-3.5 rounded-full text-xs sm:text-base font-bold transition-all shadow-md hover:scale-105 active:scale-95 text-center"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
            <span>{content.cta_whatsapp}</span>
          </a>
        </div>
        <p className="text-slate-500 text-xs sm:text-sm font-normal italic">{content.final_support}</p>
      </div>
    </section>
  );
}

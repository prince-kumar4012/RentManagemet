'use client';

import { PhoneIcon, WhatsAppIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export default function AboutCtaSection({ content }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
          GET IN TOUCH
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">{content.cta_title}</h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-xl mx-auto">{content.cta_body}</p>

        {/* 1 row mobile dual CTAs */}
        <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:gap-4 justify-center max-w-md mx-auto">
          <a
            href={`tel:${SITE_CONFIG.rawPhone}`}
            className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white px-5 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all text-center"
          >
            <PhoneIcon className="w-4 h-4 shrink-0 fill-current text-cyan-400" />
            <span>{content.cta_btn1 || 'Talk to Us'}</span>
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all text-center"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
            <span>{content.cta_btn2 || 'WhatsApp Us'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

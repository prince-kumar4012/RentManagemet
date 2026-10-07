'use client';

import { PhoneIcon, WhatsAppIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export default function ChanderViharCtaSection({ content }) {
  return (
    <section className="bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-dpxNavy mb-4 tracking-tight">{content.cta_title}</h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">{content.cta_body}</p>
        <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:gap-4 justify-center">
          <a
            href={`tel:${SITE_CONFIG.rawPhone}`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg text-xs sm:text-base font-bold transition text-center shadow-sm"
          >
            <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-current" /> <span>{content.cta_btn1}</span>
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-8 py-3 sm:py-3.5 rounded-lg text-xs sm:text-base font-bold transition text-center shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-current" /> <span>{content.cta_btn2}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function CtaSection({ content, isHi, onOpenInquiry }) {
  const checkItems = isHi
    ? ['Property · Godown · Shop', 'PM-UDAY Help Desk', 'Community Support']
    : ['Property · Godown · Shop', 'PM-UDAY Help Desk', 'Community Support'];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {content.cta_badge}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy leading-tight tracking-tight mb-5">
          {content.cta_title}
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-10 font-normal">{content.cta_body}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-500/15 backdrop-blur-md border border-emerald-400/35 text-emerald-700 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white px-9 py-4 rounded-xl text-base font-black shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" /> {content.cta_btn1}
          </a>
          <a
            href={`tel:${SITE_CONFIG.rawPhone}`}
            className="inline-flex items-center justify-center gap-2.5 bg-dpxTeal/12 backdrop-blur-md border border-dpxTeal/30 text-dpxTeal hover:bg-dpxTeal hover:border-dpxTeal hover:text-white px-9 py-4 rounded-xl text-base font-black shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-5 h-5" /> {content.cta_btn2}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-6">
          {checkItems.map((item) => (
            <span key={item} className="flex items-center gap-2 text-slate-700 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-dpxTeal shrink-0" />
              {item}
            </span>
          ))}
        </div>

        <p className="text-slate-500 text-xs mt-4 font-normal italic">{content.cta_support}</p>
      </div>
    </section>
  );
}

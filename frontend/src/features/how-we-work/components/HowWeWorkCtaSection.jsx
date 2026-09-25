'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function HowWeWorkCtaSection({ content }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-dpxNavy mb-4 tracking-tight">{content.cta_title}</h2>
        <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">{content.cta_body}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${SITE_CONFIG.rawPhone}`}
            className="inline-flex items-center justify-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-8 py-3.5 rounded-xl text-sm font-bold transition"
          >
            <Phone className="w-4 h-4" /> {content.cta_btn1}
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl text-sm font-bold transition"
          >
            <MessageCircle className="w-4 h-4" /> {content.cta_btn2}
          </a>
        </div>
      </div>
    </section>
  );
}

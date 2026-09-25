'use client';

import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function CtaSection({ content, isHi, onOpenInquiry }) {
  const checkItems = isHi
    ? ['स्थानीय फोकस', 'ईमानदार बातचीत', 'भरोसेमंद कनेक्शन']
    : ['Local Focus', 'Honest Conversations', 'Trusted Connections'];

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
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
            className="inline-flex items-center justify-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-9 py-4 rounded-xl text-base font-black shadow-md transition"
          >
            <Phone className="w-5 h-5" /> {content.cta_btn1}
          </button>
          <a
            href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-9 py-4 rounded-xl text-base font-black shadow-md transition"
          >
            <MessageCircle className="w-5 h-5" /> {content.cta_btn2}
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

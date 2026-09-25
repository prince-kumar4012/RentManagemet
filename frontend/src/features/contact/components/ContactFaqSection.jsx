'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl overflow-hidden border transition-all duration-200 ${
        open ? 'border-dpxTeal/60 bg-white shadow-md' : 'border-slate-200/90 bg-white'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50/60 transition-colors"
      >
        <span className={`font-extrabold text-base leading-snug transition-colors ${open ? 'text-dpxTeal' : 'text-dpxNavy'}`}>
          {q}
        </span>
        <span
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
            open ? 'bg-dpxTeal text-white rotate-180' : 'bg-slate-100 text-slate-400'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-normal">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function ContactFaqSection({ content }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.faq_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight">
            {content.faq_title}
          </h2>
        </div>
        <div className="space-y-3">
          {content.faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

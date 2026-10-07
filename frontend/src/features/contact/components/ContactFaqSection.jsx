'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5 sm:p-6 rounded-[20px] border border-slate-200/80 bg-white mb-4 shadow-2xs hover:shadow-md transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 bg-white transition-colors cursor-pointer"
      >
        <span className={`font-extrabold text-base sm:text-lg leading-snug tracking-tight transition-colors ${open ? 'text-[#00A3AD]' : 'text-[#0F172A]'}`}>
          {q}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            open ? 'bg-[#00A3AD] text-white rotate-180 shadow-2xs' : 'bg-cyan-50 text-[#00A3AD]'
          }`}
        >
          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal border-t border-slate-100 pt-3">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ContactFaqSection({ content }) {
  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.faq_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {content.faq_title}
          </h2>
        </div>
        <div>
          {content.faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

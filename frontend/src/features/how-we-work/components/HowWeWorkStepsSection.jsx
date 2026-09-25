'use client';

import { ArrowRight } from 'lucide-react';

export default function HowWeWorkStepsSection({ content, onOpenInquiry }) {
  if (!content.hiw_steps) return null;

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.hiw_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-3">
            {content.hiw_title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {content.hiw_steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-dpxNavy font-black text-xs flex items-center justify-center mb-3">
                {step.num}
              </span>
              <h3 className="font-black text-dpxNavy text-base mb-2 leading-snug">{step.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">{step.body}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
            className="inline-flex items-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-8 py-3.5 rounded-xl text-sm font-bold transition"
          >
            <span>{content.hiw_cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

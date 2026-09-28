'use client';

import { ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ content, onOpenInquiry }) {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.hiw_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-4">
            {content.hiw_title}
          </h2>
          <p className="text-slate-600 text-base font-normal leading-relaxed">{content.hiw_body}</p>
        </div>

        {/* Steps — horizontal connector line on desktop */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-dpxTeal/30 to-transparent z-0" />

          {content.hiw_steps.map((step, i) => (
            <div
              key={step.num}
              className="relative z-10 bg-white rounded-2xl border border-slate-200 hover:border-dpxTeal/60 hover:shadow-lg transition-all duration-300 p-6 flex flex-col group"
            >
              {/* Step number bubble */}
              <div className="w-10 h-10 rounded-full bg-white border-2 border-dpxTeal/30 text-dpxTeal group-hover:bg-dpxTeal group-hover:border-dpxTeal group-hover:text-white font-black text-sm flex items-center justify-center mb-4 transition-all duration-300 shadow-sm backdrop-blur-sm">
                {step.num}
              </div>
              <h3 className="font-black text-dpxNavy text-sm mb-2 leading-snug tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal flex-1">{step.body}</p>
              {/* Bottom accent */}
              <div className="mt-4 h-0.5 w-8 rounded-full bg-dpxTeal/40 group-hover:w-full group-hover:bg-dpxTeal transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
            className="inline-flex items-center gap-2.5 bg-dpxTeal/15 backdrop-blur-md border border-dpxTeal/30 text-dpxTeal hover:bg-dpxTeal hover:text-white hover:border-dpxTeal px-9 py-4 rounded-xl text-base font-black shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{content.hiw_cta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

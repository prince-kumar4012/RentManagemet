'use client';

import { ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ content, onOpenInquiry }) {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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

        {/* Steps Workflow Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {content.hiw_steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/90 hover:border-dpxTeal/50 hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-dpxNavy text-white font-black text-xs flex items-center justify-center group-hover:bg-dpxTeal transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-dpxTeal transition-colors">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-black text-dpxNavy text-base mb-2 leading-snug">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
            className="inline-flex items-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-9 py-4 rounded-xl text-base font-black shadow-md transition"
          >
            <span>{content.hiw_cta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { ArrowRight } from 'lucide-react';

export default function HowWeWorkStepsSection({ content, onOpenInquiry }) {
  if (!content.hiw_steps) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            ✦ {content.hiw_eyebrow} ✦
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-3">
            {content.hiw_title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-14">
          {content.hiw_steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-[24px] border border-slate-200/90 bg-white hover:border-cyan-200 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <span className="w-10 h-10 rounded-2xl bg-cyan-100/90 border border-cyan-200/60 text-[#00A3AD] font-black text-xs flex items-center justify-center mb-4 shadow-2xs group-hover:bg-[#00A3AD] group-hover:text-white transition-colors duration-300">
                  {step.num}
                </span>
                <h3 className="font-extrabold text-[#0F172A] text-lg mb-2 leading-snug tracking-tight group-hover:text-[#00A3AD] transition-colors">{step.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
            className="inline-flex items-center gap-2.5 bg-[#00A3AD] hover:bg-[#008A93] text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all cursor-pointer"
          >
            <span>{content.hiw_cta}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

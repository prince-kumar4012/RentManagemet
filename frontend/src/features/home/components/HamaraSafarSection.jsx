'use client';

import { CheckCircle2 } from 'lucide-react';

export default function HamaraSafarSection({ content }) {
  return (
    <section id="hamara-safar" className="bg-slate-50/50 py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.safar_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight mb-3">
            {content.safar_title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            {content.safar_subtitle}
          </p>
        </div>

        {/* Steps grid matching Figma design system (rounded-[28px] cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {content.safar_steps.map((step, idx) => {
            const Icon = step.icon;
            const badgeStyles = [
              'bg-cyan-50 text-dpxTeal border-cyan-100',
              'bg-amber-50 text-dpxOrange border-amber-100',
              'bg-emerald-50 text-emerald-600 border-emerald-100',
              'bg-purple-50 text-purple-600 border-purple-100',
            ][idx % 4];

            return (
              <div
                key={step.num}
                className="flex flex-col justify-between p-8 rounded-[28px] bg-white border border-slate-200/90 hover:border-cyan-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-xs ${badgeStyles}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-dpxTeal bg-cyan-50 border border-cyan-100 px-3.5 py-1.5 rounded-full">
                      STEP {step.num}
                    </span>
                  </div>

                  <p className="text-[11px] font-black uppercase tracking-widest text-dpxTeal mb-1">
                    {step.label}
                  </p>

                  <h3 className="font-black text-dpxNavy text-2xl leading-snug mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                <ul className="space-y-3 pt-5 border-t border-slate-100">
                  {step.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-dpxTeal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

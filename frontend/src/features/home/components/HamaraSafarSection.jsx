'use client';

import { CheckCircle2 } from 'lucide-react';

export default function HamaraSafarSection({ content }) {
  return (
    <section id="hamara-safar" className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-dpxTealLight border border-dpxTeal/20 text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.safar_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-4">
            {content.safar_title}
          </h2>
          <p className="text-slate-500 text-base font-normal leading-relaxed">
            {content.safar_subtitle}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.safar_steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg group shadow-sm"
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm"
                    style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <span className="text-xs font-black tracking-widest" style={{ color: step.color }}>
                    {step.num}
                  </span>
                </div>

                {/* Label badge */}
                <span
                  className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg mb-3"
                  style={{ background: `${step.color}12`, color: step.color }}
                >
                  {step.label}
                </span>

                {/* Title */}
                <h3 className="font-black text-slate-900 text-sm leading-snug mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-slate-500 text-xs leading-relaxed mb-5 font-normal">
                  {step.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {step.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: step.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom color accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-40 group-hover:opacity-80 transition-opacity"
                  style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

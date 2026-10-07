'use client';

import { ArrowRight } from 'lucide-react';

export default function HowWeWorkServicesSection({ content, onOpenInquiry }) {
  if (!content.services) return null;

  return (
    <section id={content.services_id || 'services'} className="bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.services_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight">
            {content.services_title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-5">
                    <Icon className="w-5.5 h-5.5 text-dpxTeal" />
                  </div>
                  <h3 className="font-black text-dpxNavy text-lg mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {s.body}
                  </p>
                </div>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry(s.title)}
                  className="inline-flex items-center gap-2 text-dpxTeal font-bold text-sm hover:text-dpxTealDark transition-colors group"
                >
                  <span>{s.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



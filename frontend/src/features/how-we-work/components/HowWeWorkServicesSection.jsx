'use client';

import { ArrowRight } from 'lucide-react';

export default function HowWeWorkServicesSection({ content, onOpenInquiry }) {
  if (!content.services) return null;

  return (
    <section id={content.services_id || 'services'} className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.services_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight">
            {content.services_title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-dpxTeal" />
                  </div>
                  <h3 className="font-black text-dpxNavy text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                    {s.body}
                  </p>
                </div>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry(s.title)}
                  className="inline-flex items-center gap-2 text-dpxTeal font-bold text-sm hover:underline"
                >
                  <span>{s.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

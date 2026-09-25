'use client';

import { Quote } from 'lucide-react';

export default function ChanderViharOverviewSection({ content, isHi }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Founder Photo Card */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="relative h-[420px] w-full overflow-hidden">
              <img
                src="/images/sukhvinder-pajji.jpg"
                alt="Sukhvinder Pajji"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>

            <div className="p-5 text-center bg-white border-t border-slate-100">
              <h3 className="font-black text-dpxNavy text-xl tracking-tight mb-1">Sukhvinder Pajji</h3>
              <p className="text-dpxTeal text-xs font-bold uppercase tracking-wider">
                {isHi ? 'संस्थापक व कम्युनिटी लीडर' : 'Founder & Community Lead'}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div>
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {content.overview_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy leading-tight mb-3 tracking-tight">
            {content.overview_title}
          </h2>
          <p className="text-dpxOrange font-bold text-sm mb-6">{content.overview_subtitle}</p>

          <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
            {content.overview_body}
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
            {content.overview_body2}
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <Quote className="w-6 h-6 text-dpxTeal mb-2 opacity-80" />
            <p className="text-dpxNavy font-bold text-base leading-snug italic">{content.founder_quote}</p>
            <p className="text-dpxOrange font-black text-sm mt-3">— Sukhvinder Pajji</p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { CheckCircle2 } from 'lucide-react';

export default function HowWeWorkPromiseSection({ content }) {
  if (!content.promise_points) return null;

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.promise_eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight mb-4">
              {content.promise_title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">{content.promise_body}</p>
          </div>

          <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-10 space-y-3">
            {content.promise_points.map((pt) => (
              <div key={pt} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-6 h-6 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-dpxTeal" />
                </div>
                <span className="font-bold text-dpxNavy text-sm sm:text-base">{pt}</span>
              </div>
            ))}
            <p className="text-dpxOrange text-xs sm:text-sm font-bold italic pt-2">
              {content.promise_support}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



'use client';

import { CheckCircle2 } from 'lucide-react';

export default function HowWeWorkPromiseSection({ content }) {
  if (!content.promise_points) return null;

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.promise_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-4">
            {content.promise_title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-normal">{content.promise_body}</p>
        </div>

        <div className="border-l-2 border-slate-200 pl-6 space-y-3">
          {content.promise_points.map((pt) => (
            <div key={pt} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-dpxTeal shrink-0" />
              <span className="font-bold text-dpxNavy text-sm">{pt}</span>
            </div>
          ))}
          <p className="text-slate-500 text-xs italic pt-2 font-normal">{content.promise_support}</p>
        </div>
      </div>
    </section>
  );
}

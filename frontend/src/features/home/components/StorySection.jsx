'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StorySection({ content, isHi }) {
  return (
    <section id="story" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Story Narrative */}
        <div className="lg:col-span-7">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {content.story_eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy leading-tight tracking-tight mb-6">
            {content.story_title}
          </h2>
          <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
            <p className="bg-slate-50/80 border-l-4 border-dpxTeal p-4 rounded-r-2xl font-medium text-slate-700">
              {content.story_body}
            </p>
            <p>{content.story_body2}</p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 bg-dpxNavy hover:bg-slate-800 text-white font-black px-7 py-3.5 rounded-xl text-sm transition shadow-md"
          >
            <span>{isHi ? 'पूरी कहानी पढ़ें' : 'Read Our Full Story'}</span>
            <ArrowRight className="w-4 h-4 text-dpxTeal" />
          </Link>
        </div>

        {/* Right 4 Pillars Cards Grid */}
        <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
          {content.story_pillars.map((p, i) => (
            <div
              key={p.key}
              className="bg-slate-50/80 hover:bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-dpxTeal/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-black text-dpxNavy text-base tracking-tight">{p.key}</h4>
                  <span className="text-[10px] font-black tracking-widest text-dpxTeal uppercase">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

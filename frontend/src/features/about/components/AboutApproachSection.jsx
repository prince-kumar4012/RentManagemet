'use client';

import { MapPin, MessageSquare, ShieldCheck, Users, Heart, SlidersHorizontal } from 'lucide-react';

export default function AboutApproachSection({ content }) {
  const icons = [MapPin, MessageSquare, ShieldCheck, Users, Heart, SlidersHorizontal];

  const renderTitle = (title) => {
    if (!title) return title;
    if (title.includes('Driven By Connections.')) {
      const parts = title.split('Driven By Connections.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Driven By Connections.</span>
        </>
      );
    }
    if (title.includes('निष्पक्षता से संचालित।') || title.includes('संचालित।')) {
      const parts = title.split(title.includes('निष्पक्षता से संचालित।') ? 'निष्पक्षता से संचालित।' : 'संचालित।');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">{title.includes('निष्पक्षता से संचालित।') ? 'निष्पक्षता से संचालित।' : 'संचालित।'}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.approach_eyebrow}
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {renderTitle(content.approach_title)}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.approach_points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={point.title}
                className="flex items-start gap-4 p-6 sm:p-7 rounded-[24px] border border-slate-200/80 bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-100/80 text-[#00A3AD] border border-cyan-200/60 flex items-center justify-center shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0F172A] text-lg mb-1.5 tracking-tight group-hover:text-[#00A3AD] transition-colors">{point.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function HowWeWorkFounderSection({ content, isHi }) {
  if (!content.founder_title) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Founder Portrait (Reduced height to balance shorter right text content) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[360px] h-[360px] sm:h-[400px] lg:h-[420px] rounded-[24px] overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
            <img
              src="/images/sukhvinder-pajji.jpg"
              alt="Sukhvinder Pajji"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="font-extrabold text-xl sm:text-2xl leading-tight mb-0.5">Sukhvinder Pajji</h3>
              <p className="text-[#FF9900] text-xs font-bold uppercase tracking-wider">
                {content.founder_badge || (isHi ? 'संस्थापक व कम्युनिटी लीडर' : 'Founder & Community Lead')}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Text Narrative (Clean typography & vertical spacing) */}
        <div className="lg:col-span-7">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            ✦ {content.founder_eyebrow} ✦
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-2 tracking-tight">
            {content.founder_title}
          </h2>

          <p className="text-[#FF9900] font-bold text-sm sm:text-base mb-5 leading-snug">
            {content.founder_subtitle}
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
            {content.founder_body}
          </p>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 font-normal">
            {content.founder_body2}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/chander-vihar-initiatives"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <span>{content.founder_cta}</span>
              <ArrowRight className="w-4 h-4 text-[#FF9900]" />
            </Link>

            {content.founder_fb_url && (
              <a
                href={content.founder_fb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00A3AD] hover:bg-[#008A93] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all"
              >
                <span>{content.founder_fb_cta}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



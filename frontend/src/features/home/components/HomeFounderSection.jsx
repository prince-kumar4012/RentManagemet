'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function HomeFounderSection({ content, isHi }) {
  if (!content.founder_title) return null;

  return (
    <section id="founder" className="bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ── SUKHVINDER PAAJI PROFILE LAYOUT: LEFT IMAGE (35%) | RIGHT CONTENT (65%) ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column (Approx 35% / 4.5 cols): Original Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[360px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <img
                src="/images/sukhvinder-pajji.jpg"
                alt={SITE_CONFIG.founderName}
                className="w-full h-auto object-cover object-top"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="p-4 bg-white border-t border-slate-100 text-center">
                <h3 className="font-bold text-dpxNavy text-xl tracking-tight mb-0.5">{SITE_CONFIG.founderAlias}</h3>
                <p className="text-dpxNavy text-xs font-bold uppercase tracking-wider">
                  {content.founder_badge || (isHi ? 'संस्थापक व कम्युनिटी लीडर' : 'Founder & Community Lead')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Approx 65% / 7.5 cols): Complete Narrative & Content */}
          <div className="lg:col-span-7">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.founder_eyebrow}
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-dpxNavy leading-tight mb-2 tracking-tight">
              {content.founder_title}
            </h2>
            <p className="text-dpxNavy font-bold text-base sm:text-lg mb-4">{content.founder_subtitle}</p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 font-normal">
              {content.founder_body}
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {content.founder_body2}
            </p>

            {/* Key Initiatives Bullet List */}
            {content.founder_initiatives && (
              <div className="mb-8 p-6 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-dpxNavy font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
                  {isHi ? 'ज़मीनी सामाजिक व नागरिक कार्य' : 'Ground-Level Civic Initiatives'}
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {content.founder_initiatives.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-800 text-sm sm:text-base font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-dpxNavy shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action CTAs - 1 row side-by-side on mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:gap-4">
              <Link
                href="/chander-vihar-initiatives"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-dpxTeal hover:bg-dpxTealDark text-white font-bold px-3 sm:px-6 py-3 sm:py-3.5 rounded-lg text-xs sm:text-base transition-colors shadow-sm text-center"
              >
                <span>{content.founder_cta}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
              </Link>
              {content.founder_fb_url && (
                <a
                  href={content.founder_fb_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 sm:px-6 py-3 sm:py-3.5 rounded-lg text-xs sm:text-base transition-colors shadow-sm text-center"
                >
                  <span>{content.founder_fb_cta}</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

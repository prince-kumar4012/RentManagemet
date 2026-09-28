'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function HomeFounderSection({ content, isHi }) {
  if (!content.founder_title) return null;

  return (
    <section id="founder" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Founder Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="relative h-56 sm:h-72 lg:h-[400px] w-full overflow-hidden">
              <img
                src="/images/sukhvinder-pajji.jpg"
                alt={SITE_CONFIG.founderName}
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>

            {/* Bottom Badge */}
            <div className="p-5 text-center bg-white border-t border-slate-100">
              <h3 className="font-black text-dpxNavy text-xl tracking-tight mb-1">{SITE_CONFIG.founderAlias}</h3>
              <p className="text-dpxTeal text-xs font-bold uppercase tracking-wider">
                {content.founder_badge || (isHi ? 'संस्थापक व कम्युनिटी लीडर' : 'Founder & Community Lead')}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Narrative & Initiatives Card */}
        <div className="lg:col-span-7">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {content.founder_eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy leading-tight mb-3 tracking-tight">
            {content.founder_title}
          </h2>
          <p className="text-dpxOrange font-bold text-sm mb-6">{content.founder_subtitle}</p>

          <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
            {content.founder_body}
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
            {content.founder_body2}
          </p>

          {/* Key Initiatives Bullet List Box */}
          {content.founder_initiatives && (
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 mb-8">
              <p className="text-dpxNavy font-black text-xs uppercase tracking-wider mb-3">
                {isHi ? 'ज़मीनी सामाजिक व नागरिक कार्य' : 'Ground-Level Civic Initiatives'}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.founder_initiatives.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-700 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-dpxTeal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/chander-vihar-initiatives"
              className="inline-flex items-center gap-2 bg-dpxNavy/10 backdrop-blur-sm border border-dpxNavy/20 text-dpxNavy hover:bg-dpxNavy hover:text-white font-black px-6 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>{content.founder_cta}</span>
              <ArrowRight className="w-4 h-4 text-dpxTeal" />
            </Link>
            {content.founder_fb_url && (
              <a
                href={content.founder_fb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white backdrop-blur-sm border border-slate-200 text-dpxNavy font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:border-dpxTeal/40"
              >
                <span>{content.founder_fb_cta}</span>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

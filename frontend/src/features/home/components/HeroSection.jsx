'use client';

import { Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function HeroSection({ content, isHi, onOpenInquiry }) {
  return (
    <section
      className="relative overflow-hidden min-h-[88vh] flex items-center py-16 lg:py-24"
      style={{
        backgroundImage: "url('/images/banners/heroBanner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dynamic Layered Overlays */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(17,40,74,0.85) 0%, rgba(10,20,40,0.95) 70%, rgba(10,20,40,0.98) 100%)',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00A3AD_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Content (Cols 7) */}
        <div className="lg:col-span-7">
          {/* Locality Tag */}
          <div className="inline-flex items-center gap-2 bg-dpxTeal/20 border border-dpxTeal/40 px-3.5 py-1.5 rounded-lg mb-6 text-dpxTeal text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-dpxTeal" />
            <span>{content.badge}</span>
          </div>

          <h1
            className={`font-black text-white leading-[1.08] tracking-tight mb-5 ${
              isHi ? 'text-4xl sm:text-5xl lg:text-[56px]' : 'text-4xl sm:text-5xl lg:text-[60px]'
            }`}
          >
            {content.h1_line1}
            <br />
            <span className="text-dpxTeal">
              {content.h1_line2}
            </span>
          </h1>

          <p className="text-dpxOrange font-bold text-base sm:text-lg mb-6 tracking-wide flex items-center gap-2">
            <span className="w-8 h-0.5 bg-dpxOrange rounded-full" />
            {content.tagline}
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            {content.hero_body}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
              className="inline-flex items-center justify-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-8 py-4 rounded-xl text-base font-black shadow-lg shadow-teal-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              {content.cta1}
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-base font-black shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              {content.cta2}
            </a>
          </div>

          <div className="border-l-2 border-dpxTeal/80 pl-4 py-1">
            <p className="text-slate-400 text-xs sm:text-sm font-semibold italic">
              {content.hero_support}
            </p>
          </div>
        </div>

        {/* Right Panel (Cols 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 text-white shadow-2xl">
            <p className="text-xs font-black text-dpxTeal uppercase tracking-widest mb-4 pb-2">
              {content.hero_secondary}
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {content.services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    onClick={() => onOpenInquiry && onOpenInquiry(s.title)}
                    className="group bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-dpxTeal/50 rounded-xl p-3.5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-105"
                      style={{ background: `${s.color}25`, border: `1px solid ${s.color}40` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-black text-sm text-white">{s.title}</p>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-dpxTeal group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <p className="text-xs text-slate-300 font-semibold mb-3">
                {isHi ? 'हमसे सीधे संपर्क करें:' : 'Reach us directly:'}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${SITE_CONFIG.rawPhone}`}
                  className="text-center bg-white/10 hover:bg-dpxOrange text-white py-2.5 rounded-xl text-xs font-black transition border border-white/10"
                >
                  {SITE_CONFIG.rawPhone}
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center bg-emerald-500/20 hover:bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-black transition border border-emerald-500/30"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Phone, MessageCircle, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function HeroSection({ content, isHi, onOpenInquiry }) {
  return (
    <div>
      {/* ── MAIN HERO ── */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[88vh] lg:min-h-[90vh]">

          {/* ── LEFT: White content panel ── */}
          <div className="relative flex items-center bg-white px-6 sm:px-10 lg:px-14 xl:px-20 py-12 lg:py-0 z-10 lg:w-[48%] xl:w-[44%] shrink-0">
            {/* Soft right-edge fade into image */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />

            <div className="max-w-lg w-full">
              {/* Location badge */}
              <div className="inline-flex items-center gap-1.5 mb-6">
                <MapPin className="w-3.5 h-3.5 text-dpxTeal" />
                <span className="text-dpxTeal text-[11px] font-black uppercase tracking-[0.18em]">
                  Chander Vihar • Delhi
                </span>
              </div>

              {/* H1 */}
              <h1 className={`font-black text-dpxNavy leading-[1.05] tracking-tight mb-4 ${
                isHi
                  ? 'text-3xl sm:text-4xl lg:text-[44px]'
                  : 'text-4xl sm:text-5xl lg:text-[52px]'
              }`}>
                {content.h1_line1}
                <br />
                <span className="text-dpxTeal">{content.h1_line2}</span>
              </h1>

              {/* Tagline */}
              <p className="text-dpxOrange font-bold text-base sm:text-lg mb-5 leading-snug">
                {content.tagline}
              </p>

              {/* Body */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-md">
                {content.hero_body}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-7">
                <a
                  href={`tel:${SITE_CONFIG.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-dpxNavy/8 backdrop-blur-sm border border-dpxNavy/25 text-dpxNavy hover:bg-dpxNavy hover:text-white px-6 py-3.5 rounded-xl font-black text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  {isHi ? 'Call Karo' : 'Talk to Us'}
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Namaste%20Gullu%20ji%2C%20main%20Chander%20Vihar%20se%20connect%20karna%20chahta%20hoon`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500/12 backdrop-blur-sm border border-emerald-500/30 text-emerald-700 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white px-6 py-3.5 rounded-xl font-black text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  {isHi ? 'WhatsApp Karo' : 'WhatsApp Us'}
                </a>
              </div>

              {/* Support note */}
              <p className="text-slate-400 text-xs font-medium italic border-l-2 border-dpxTeal/40 pl-3 leading-relaxed">
                {content.hero_support}
              </p>
            </div>
          </div>

          {/* ── RIGHT: banner2 full image panel ── */}
          <div className="relative flex-1 min-h-[60vw] sm:min-h-[420px] lg:min-h-0 overflow-hidden">
            {/* banner2.jpg — Delhi city + Metro + Pajji */}
            <img
              src="/images/banners/banner2.jpg"
              alt="Chander Vihar — A Stronger Community"
              className="absolute inset-0 w-full h-full object-cover object-right-top"
            />

            {/* Blend gradient on left edge (joins white panel) */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/10 to-transparent pointer-events-none" />

            {/* Cursive tagline overlay — top-left of image panel */}
            <div className="absolute top-8 left-10 sm:left-14 z-10">
              <p
                className="text-white leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
                style={{
                  fontFamily: "'Georgia','Times New Roman',serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)',
                }}
              >
                A Stronger<br />
                Chander Vihar<br />
                Together
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3 QUICK-ACCESS CARDS ── */}
      <section className="bg-white border-b border-slate-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
            {content.quick_label}
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
            {content.quick_cards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.title}
                  onClick={() => onOpenInquiry && onOpenInquiry(card.title)}
                  className="group text-left bg-slate-50 hover:bg-white border border-slate-200 hover:border-dpxTeal/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm"
                      style={{ background: card.bg, border: `1px solid ${card.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <div>
                      <p className="font-black text-dpxNavy text-sm leading-tight">{card.title}</p>
                      <p className="text-xs font-semibold mt-0.5" style={{ color: card.color }}>{card.titleHi}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1 mb-4">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: card.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs font-black" style={{ color: card.color }}>{card.cta}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: card.color }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

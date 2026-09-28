'use client';

import { ArrowRight } from 'lucide-react';

export default function ServicesSection({ content, isHi, onOpenInquiry }) {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.services_label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight leading-tight">
            {isHi
              ? <><span>खरीदें, बेचें, किराए पर — </span><span className="text-dpxOrange">Godown, Shop & Support</span></>
              : <><span>Buy, Sell, Rent & </span><span className="text-dpxOrange">Godown / Shop / Support</span></>
            }
          </h2>
          <p className="text-slate-500 mt-2 text-sm font-normal max-w-xl">
            {isHi
              ? 'Residential aur commercial — dono ke liye Chander Vihar & Nilothi mein property connections.'
              : 'Residential and commercial — property connections across Chander Vihar & Nilothi.'}
          </p>
        </div>

        {/* Services Grid — 3 cols on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-dpxTeal/50 hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                    style={{ background: s.bg, border: `1px solid ${s.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3 className="font-black text-dpxNavy text-lg mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenInquiry && onOpenInquiry(s.title)}
                    className="w-full py-2.5 px-3.5 rounded-xl text-xs font-black uppercase tracking-wider backdrop-blur-sm border transition-all duration-300 flex items-center justify-between"
                    style={{ background: `${s.color}10`, borderColor: `${s.color}25`, color: s.color }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = s.color; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `${s.color}10`; e.currentTarget.style.borderColor = `${s.color}25`; e.currentTarget.style.color = s.color; }}
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

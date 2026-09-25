'use client';

import { ArrowRight } from 'lucide-react';

export default function ServicesSection({ content, isHi, onOpenInquiry }) {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.services_label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dpxNavy tracking-tight leading-tight">
            <span>{isHi ? 'खरीदें, बेचें, किराए पर या ' : 'Buy, Sell, Rent & '}</span>
            <span className="text-dpxOrange">{isHi ? 'प्रॉपर्टी सहायता' : 'Property Support'}</span>
          </h2>
        </div>

        {/* Services Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-dpxTeal/50 hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-dpxTealLight text-dpxTeal flex items-center justify-center mb-5 group-hover:bg-dpxTeal group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-dpxNavy text-xl mb-2.5 tracking-tight">{s.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenInquiry && onOpenInquiry(s.title)}
                    className="w-full py-2.5 px-3.5 rounded-xl text-xs font-black uppercase tracking-wider bg-white group-hover:bg-dpxNavy group-hover:text-white border border-slate-200/80 group-hover:border-dpxNavy transition-all duration-300 flex items-center justify-between shadow-xs"
                  >
                    <span className="text-dpxNavy group-hover:text-white transition-colors">
                      {s.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 text-dpxTeal group-hover:text-white transition-transform group-hover:translate-x-1" />
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

'use client';

import { ArrowRight, Home, Key, TrendingUp, Headphones, Warehouse, Store } from 'lucide-react';

const CARD_IMAGES = [
  '/images/card-buy.jpg',
  '/images/card-rent.jpg',
  '/images/card-sell.jpg',
  '/images/card-civic.jpg',
  '/images/card-buy.jpg',
  '/images/card-rent.jpg',
];

const CARD_TAGS = [
  { en: 'PURCHASE & VERIFIED', hi: 'खरीद व सत्यापित' },
  { en: 'FAMILY & EXECUTIVE', hi: 'पारिवारिक व कार्यकारी' },
  { en: 'DIRECT OWNER LISTING', hi: 'मालिक से सीधा संपर्क' },
  { en: 'GODOWN & COMMERCIAL', hi: 'गोदाम व शेड' },
  { en: 'SHOP & BUSINESS', hi: 'दुकान व व्यावसायिक' },
  { en: 'LEGAL & CIVIC DESK', hi: 'कानूनी व नागरिक डेस्क' },
];

export default function ServicesSection({ content, isHi, onOpenInquiry }) {
  return (
    <section id="services" className="bg-slate-50/50 py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.services_label}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-dpxNavy tracking-tight leading-tight">
              {isHi ? (
                <>
                  खरीदें, बेचें, किराए पर & <span className="text-dpxOrange">संपत्ति सहायता</span>
                </>
              ) : (
                <>
                  Buy, Sell, Rent & <span className="text-dpxOrange">Property Support</span>
                </>
              )}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              {isHi
                ? 'चंदर विहार और निलोठी के लिए समर्पित स्थानीय संपत्ति नेटवर्क — खरीदारों, मकान मालिकों और किरायेदारों को सीधे व पारदर्शी तरीके से जोड़ता है।'
                : "Chander Vihar's primary hyper-local property network connecting buyers, sellers, tenants, and owners with direct guidance."}
            </p>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((s, idx) => {
            const Icon = s.icon;
            const imgPath = CARD_IMAGES[idx % CARD_IMAGES.length];
            const tag = CARD_TAGS[idx % CARD_TAGS.length];

            return (
              <button
                key={s.title}
                onClick={() => onOpenInquiry && onOpenInquiry(s.title)}
                className="group text-left relative flex flex-col justify-between rounded-[28px] border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 w-full min-h-[480px] sm:min-h-[520px] cursor-pointer"
              >
                {/* ── FULL-HEIGHT BACKGROUND IMAGE ── */}
                <img
                  src={imgPath}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* ── TOP LIGHT GRADIENT MASK (For Crisp Dark Text Visibility) ── */}
                <div className="absolute inset-x-0 top-0 h-[68%] bg-gradient-to-b from-slate-50/95 via-slate-50/80 to-transparent pointer-events-none" />

                {/* ── BOTTOM DARK GRADIENT MASK (For Crisp White CTA Visibility) ── */}
                <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                {/* ── TOP CONTENT CONTAINER ── */}
                <div className="relative z-10 p-7 sm:p-8">
                  {/* Cyan Soft Icon Badge Container */}
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100/90 text-dpxTeal border border-cyan-200/60 flex items-center justify-center mb-5 backdrop-blur-xs group-hover:bg-dpxTeal group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Eyebrow Tag */}
                  <p className="text-[11px] font-black uppercase tracking-widest text-dpxTeal mb-1.5">
                    {isHi ? tag.hi : tag.en}
                  </p>

                  {/* Main Title */}
                  <h3 className="font-black text-dpxNavy text-2xl sm:text-[26px] mb-2.5 tracking-tight group-hover:text-dpxTeal transition-colors">
                    {s.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
                    {s.desc}
                  </p>
                </div>

                {/* ── BOTTOM ACTION BAR (White Bold Title + Right Arrow) ── */}
                <div className="relative z-10 p-7 sm:p-8 flex items-center justify-between">
                  <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-cyan-200 transition-colors">
                    {s.cta}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

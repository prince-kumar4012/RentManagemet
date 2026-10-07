'use client';

import { MapPin, Building2, Users, ShieldCheck } from 'lucide-react';

export default function AboutIntroSection({ content, isHi }) {
  const localFocusItems = [
    {
      icon: MapPin,
      label: isHi ? 'चंदर विहार' : 'Chander Vihar',
      desc: isHi ? 'हमारा मुख्य स्थानीय फोकस और कम्युनिटी।' : 'Our primary focus area and community',
    },
    {
      icon: Building2,
      label: isHi ? 'विश्वसनीय जानकारी' : 'Reliable Information',
      desc: isHi ? 'प्रॉपर्टी मामलों पर स्पष्ट और प्रामाणिक मार्गदर्शन।' : 'Clear and genuine guidance on property matters.',
    },
    {
      icon: Users,
      label: isHi ? 'स्थानीय प्रॉपर्टी नेटवर्क' : 'Local Property Network',
      desc: isHi ? 'निवासियों, खरीदारों और विक्रेताओं को जोड़ना।' : 'Connecting with residents, buyers and sellers',
    },
    {
      icon: ShieldCheck,
      label: isHi ? 'कम्युनिटी कनेक्शन' : 'Community Connection',
      desc: isHi ? 'कम्युनिटी द्वारा, कम्युनिटी के लिए निर्मित।' : 'Built by the community, for the community',
    },
  ];

  const renderTitle = (title) => {
    if (!title) return title;
    if (title.includes('Matters.')) {
      const parts = title.split('Matters.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Matters.</span>
        </>
      );
    }
    if (title.includes('मायने रखती है।') || title.includes('महत्वपूर्ण है।')) {
      const parts = title.split(title.includes('महत्वपूर्ण है।') ? 'महत्वपूर्ण है।' : 'मायने रखती है।');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">{title.includes('महत्वपूर्ण है।') ? 'महत्वपूर्ण है।' : 'मायने रखती है।'}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column Text & Feature List */}
        <div className="lg:col-span-7">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            ✦ {content.about_eyebrow} ✦
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-tight tracking-tight mb-5">
            {renderTitle(content.about_title)}
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
            <p>{content.about_body}</p>
            <p className="font-bold text-slate-800">{content.about_body2}</p>
          </div>

          {/* 4 Feature Items Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {localFocusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100/80 border border-cyan-200/60 flex items-center justify-center shrink-0 text-[#00A3AD] mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-[#0F172A] leading-snug">{item.label}</h3>
                    <p className="text-slate-500 text-xs font-normal leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column Image */}
        <div className="lg:col-span-5">
          <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 group relative">
            <img
              src="/images/chander-vihar-street.jpg"
              alt="Chander Vihar Locality Street View"
              className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = '/images/banners/banner-fullwidth.jpg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <p className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-1">CHANDER VIHAR, WEST DELHI</p>
              <p className="text-sm font-semibold text-white/90">A thriving residential locality connected with trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

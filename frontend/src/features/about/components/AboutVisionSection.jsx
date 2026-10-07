'use client';

import { CheckCircle2, Users, Home, Building2, Globe } from 'lucide-react';

export default function AboutVisionSection({ content, isHi }) {
  const communityGroups = [
    { icon: Users, label: isHi ? 'प्रॉपर्टी तलाशने वाले' : 'Property Seekers' },
    { icon: Home, label: isHi ? 'प्रॉपर्टी मालिक' : 'Property Owners' },
    { icon: Building2, label: isHi ? 'स्थानीय व्यवसाय' : 'Local Businesses' },
    { icon: Globe, label: isHi ? 'स्थानीय कम्युनिटी' : 'Local Community' },
  ];

  const focusPoints = isHi
    ? [
        'कम्युनिटी जानकारी',
        'रियल एस्टेट मार्गदर्शन',
        'किराया व लीज सहायता',
        'स्थानीय बाजार अंतर्दृष्टि',
        'मजबूत व जुड़ी हुई कम्युनिटी',
      ]
    : [
        'Community Information',
        'Real Estate Guidance',
        'Rental & Lease Support',
        'Local Market Insights',
        'Stronger & Connected Community',
      ];

  const renderTitle = (title) => {
    if (!title) return title;
    if (title.includes('Community.')) {
      const parts = title.split('Community.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Community.</span>
        </>
      );
    }
    if (title.includes('कम्युनिटी का निर्माण।') || title.includes('निर्माण।')) {
      const parts = title.split(title.includes('कम्युनिटी का निर्माण।') ? 'कम्युनिटी का निर्माण।' : 'निर्माण।');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">{title.includes('कम्युनिटी का निर्माण।') ? 'कम्युनिटी का निर्माण।' : 'निर्माण।'}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Row 1: Main Header & Vision Body */}
        <div className="w-full">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.vision_eyebrow}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4">
            {renderTitle(content.vision_title)}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal w-full">
            {content.vision_body}
          </p>
        </div>

        {/* Row 2: Key Focus Areas Grid */}
        <div>
          <p className="text-[#0F172A] font-extrabold text-xs uppercase tracking-widest mb-4">
            {isHi ? 'हमारे मुख्य फोकस क्षेत्र' : 'OUR KEY FOCUS AREAS'}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {focusPoints.map((pt) => (
              <div key={pt} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#00A3AD] shrink-0" />
                <span className="text-slate-800 font-bold text-xs sm:text-sm leading-snug">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Our Community Message Card Container */}
        <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-br from-cyan-50/70 to-slate-50 border border-cyan-100 space-y-6 shadow-md">
          <div className="w-full">
            <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight mb-1.5">
              {isHi ? 'हमारी कम्युनिटी सोच' : 'Our Community Message'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal w-full">
              {isHi
                ? 'एक मजबूत property ecosystem तब बनता है जब लोगों को सही कनेक्शन आसानी से मिल सके।'
                : 'A strong property ecosystem is created when people can find the right connections easily.'}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {communityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100/80 border border-cyan-200/60 flex items-center justify-center shrink-0 text-[#00A3AD]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-extrabold text-[#0F172A] text-xs sm:text-sm">{group.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

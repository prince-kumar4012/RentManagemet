'use client';

import { CheckCircle2, Building2, Home, BarChart3, Users } from 'lucide-react';

export default function AboutWhyMattersSection({ content, isHi }) {
  const rightCardItems = [
    {
      icon: Building2,
      label: isHi ? 'संपत्ति खरीद व बिक्री' : 'Property Buying & Selling',
      desc: isHi ? 'खरीदारों और विक्रेताओं के लिए सहायता।' : 'Assistance for buyers and sellers.',
    },
    {
      icon: Home,
      label: isHi ? 'किराया / लीज सहायता' : 'Rental / Lease Support',
      desc: isHi ? 'किराये की संपत्तियों के लिए मार्गदर्शन।' : 'Guidance for rental properties',
    },
    {
      icon: BarChart3,
      label: isHi ? 'स्थानीय बाजार जानकारी' : 'Local Market Information',
      desc: isHi ? 'वर्तमान संपत्ति प्रवृत्तियों की समझ।' : 'Insights about current property trends',
    },
    {
      icon: Users,
      label: isHi ? 'सामुदायिक सहायता' : 'Community Support',
      desc: isHi ? 'समुदाय को सही निर्णय लेने में मदद।' : 'Helping the community make informed decisions.',
    },
  ];

  const checkList = isHi
    ? [
        'शांतिपूर्ण रिहायशी वातावरण',
        'उत्कृष्ट कनेक्टिविटी और पहुंच',
        'आवश्यक सेवाएं और सुविधाएं पास में',
        'एक सहायक और सक्रिय स्थानीय समुदाय',
      ]
    : [
        'Peaceful residential environment',
        'Good connectivity and accessibility',
        'Essential services and facilities nearby',
        'A supportive and active local community',
      ];

  const renderTitle = (title) => {
    if (!title) return title;
    if (title.includes('Call Home.')) {
      const parts = title.split('Call Home.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Call Home.</span>
        </>
      );
    }
    if (title.includes('अपना घर कहते हैं।')) {
      const parts = title.split('अपना घर कहते हैं।');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">अपना घर कहते हैं।</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.why_eyebrow}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-tight tracking-tight mb-5">
            {renderTitle(content.why_title)}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {content.why_body}
          </p>

          <div className="space-y-3 pt-2">
            {checkList.map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-800 font-bold text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-[#00A3AD] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Card Box */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[28px] bg-gradient-to-br from-cyan-50/70 to-slate-50 border border-cyan-100/80 shadow-md space-y-4">
          {rightCardItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-100/80 border border-cyan-200/60 flex items-center justify-center shrink-0 text-[#00A3AD] mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-[#0F172A] leading-snug">{item.label}</h3>
                  <p className="text-slate-500 text-xs font-normal leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

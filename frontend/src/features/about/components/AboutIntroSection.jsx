'use client';

import { LocalitiesGrid } from '@/components/common';

export default function AboutIntroSection({ content, isHi }) {
  const localFocusItems = [
    { label: isHi ? 'चंदर विहार' : 'Chander Vihar', desc: isHi ? 'हमारा मुख्य स्थानीय फोकस और कम्युनिटी।' : 'Our primary local focus and community.' },
    { label: isHi ? 'निलोठी' : 'Nilothi', desc: isHi ? 'आसपास के रिहायशी क्षेत्र से जुड़ाव।' : 'Connecting with the surrounding residential area.' },
    { label: isHi ? 'स्थानीय प्रॉपर्टी नेटवर्क' : 'Local Property Network', desc: isHi ? 'प्रॉपर्टी seekers, owners और प्रोफेशनल्स को जोड़ना।' : 'Bringing together property seekers, owners and professionals.' },
    { label: isHi ? 'कम्युनिटी कनेक्शन' : 'Community Connection', desc: isHi ? 'स्थानीय कम्युनिटी के भीतर meaningful relationships बनाना।' : 'Building meaningful relationships within the local community.' },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.about_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy leading-tight tracking-tight mb-4">
            {content.about_title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">{content.about_body}</p>
          <p className="text-slate-600 text-base leading-relaxed">{content.about_body2}</p>
        </div>
        <div className="border-l-2 border-slate-200 pl-6 space-y-6">
          <p className="text-dpxNavy text-xs font-black uppercase tracking-widest mb-4">
            {isHi ? 'हमारा स्थानीय फोकस' : 'Our Local Focus'}
          </p>
          {localFocusItems.map((item) => (
            <div key={item.label}>
              <p className="font-black text-sm text-dpxNavy mb-1">{item.label}</p>
              <p className="text-slate-600 text-xs font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Localities Grid */}
      <div className="max-w-7xl mx-auto mt-12">
        <LocalitiesGrid variant="light" />
      </div>
    </section>
  );
}

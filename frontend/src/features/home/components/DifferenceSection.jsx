'use client';

import { MapPin, Users, Zap, Eye, Heart, Globe, Home } from 'lucide-react';

const FALLBACK_CARDS = {
  en: [
    { icon: MapPin, title: 'One Local Network', desc: 'A focused network built around Chander Vihar and nearby areas.' },
    { icon: Users, title: 'Human Connection', desc: 'We believe meaningful conversations create better property experiences.' },
    { icon: Zap, title: 'Simple Process', desc: 'No complicated journey. Just share, connect, discuss, and move forward.' },
    { icon: Eye, title: 'Transparent Approach', desc: 'We value clarity, communication, and trust at every step.' },
    { icon: Heart, title: 'Community Mindset', desc: 'We focus on relationships that go beyond a single property conversation.' },
    { icon: Globe, title: 'Local Perspective', desc: 'We keep the conversation connected to the local area and its people.' },
  ],
  hi: [
    { icon: MapPin, title: 'एक समर्पित स्थानीय नेटवर्क', desc: 'चंदर विहार, निलोठी और आसपास के क्षेत्रों पर केंद्रित नेटवर्क।' },
    { icon: Users, title: 'मानवीय संबंध', desc: 'सार्थक बातचीत बेहतर संपत्ति अनुभव का निर्माण करती है।' },
    { icon: Zap, title: 'सरल एवं सुगम प्रक्रिया', desc: 'कोई जटिल यात्रा नहीं। बस साझा करें, जुड़ें, चर्चा करें और आगे बढ़ें।' },
    { icon: Eye, title: 'पारदर्शी दृष्टिकोण', desc: 'हम हर कदम पर स्पष्टता, संचार और निष्पक्षता को प्राथमिकता देते हैं।' },
    { icon: Heart, title: 'सामुदायिक भावना', desc: 'हम उन संबंधों पर ध्यान केंद्रित करते हैं जो केवल एक सौदे तक सीमित नहीं हैं।' },
    { icon: Globe, title: 'स्थानीय दृष्टिकोण', desc: 'हमारा ध्यान सदैव इस क्षेत्र के निवासियों और उनकी प्राथमिकताओं पर रहता है।' },
  ],
};

export default function DifferenceSection({ content }) {
  const diffPoints = content?.diff_points || (content?.diff_eyebrow?.includes('जुड़ें') ? FALLBACK_CARDS.hi : FALLBACK_CARDS.en);
  const isHi = content?.diff_eyebrow?.includes('जुड़ें') || content?.diff_title?.includes('अंतर');

  return (
    <section id="difference" className="bg-[#F8FCFD] py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-cyan-100/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#00A3AD] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3">
            {content?.diff_eyebrow || (isHi ? 'हमसे क्यों जुड़ें' : 'WHY CONNECT WITH US')}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            {isHi ? (
              <>CVP Exchange का <span className="text-[#FF6B00]">अंतर।</span></>
            ) : (
              <>{content?.diff_title || 'The CVP Exchange Difference.'}</>
            )}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            {content?.diff_subtitle || (isHi
              ? 'मानवीय संबंधों, सरल प्रक्रिया और सामुदायिक विश्वास पर निर्मित एक केंद्रित स्थानीय नेटवर्क।'
              : 'A focused local network built on human connection, simple process and community trust.')}
          </p>
        </div>

        {/* Feature Grid (2 rows x 3 columns matching mockup) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {diffPoints.map((card) => {
            const Icon = card.icon || MapPin;

            return (
              <div
                key={card.title}
                className="flex items-start gap-4 p-6 sm:p-7 rounded-[24px] bg-white border border-slate-100/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Circular Cyan Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#E0F7FA]/80 text-[#00A3AD] flex items-center justify-center shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Card Title & Body Text */}
                <div className="flex-1">
                  <h3 className="font-extrabold text-[#0F172A] text-lg sm:text-xl mb-1.5 tracking-tight group-hover:text-[#00A3AD] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

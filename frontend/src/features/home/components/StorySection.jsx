'use client';

import Link from 'next/link';
import { ArrowRight, ThumbsUp, Users, Share2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function StorySection({ content, isHi }) {
  const pillars = isHi
    ? [
        {
          icon: Users,
          title: 'जन प्राथमिकता',
          desc: 'निवासी जो हमारे पड़ोस में रहते हैं, कार्य करते हैं और निवेश करते हैं।',
        },
        {
          icon: Share2,
          title: 'पारदर्शी मार्ग',
          desc: 'बिना किसी अनुचित कमीशन के। खरीदार और विक्रेता का सीधा परिचय।',
        },
        {
          icon: ShieldCheck,
          title: 'पड़ोसी सत्यापन',
          desc: 'नागरिक रिकॉर्ड और स्थानीय निवासियों के आधार पर सत्यापित संपत्तियां।',
        },
        {
          icon: HeartHandshake,
          title: 'नागरिक उत्तरदायित्व',
          desc: 'स्थानीय सड़कों के रख-रखाव, प्रकाश व्यवस्था और स्वच्छता हेतु प्रतिबद्धता।',
        },
      ]
    : [
        {
          icon: Users,
          title: '100% People First',
          desc: 'Residents who live, work, and invest directly in our neighborhood future.',
        },
        {
          icon: Share2,
          title: 'Transparent Routes',
          desc: 'Zero commission padding. Straightforward seller-buyer introductions.',
        },
        {
          icon: ShieldCheck,
          title: 'Neighbor Verification',
          desc: 'Every property vetted against civic registry records and street association inputs.',
        },
        {
          icon: HeartHandshake,
          title: 'Civic Responsibility',
          desc: 'Profits & time reinvested into local road upkeep, sanitation, and streetlights.',
        },
      ];

  return (
    <section id="story" className="bg-[#F0F7FD] py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Narrative Column (Exact match to media_1791213700965.png) */}
        <div className="lg:col-span-6">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content?.story_eyebrow || (isHi ? 'हमारी नींव' : 'OUR FOUNDATION')}
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-tight tracking-tight mb-5">
            {isHi ? (
              <>
                एक स्थानीय सोच — <span className="text-[#FF9900] block">एक दूरदर्शी दृष्टि</span>
              </>
            ) : (
              <>
                A Local Idea With a <span className="text-[#FF9900] block">Bigger Vision</span>
              </>
            )}
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
            <p>
              {content?.story_body ||
                (isHi
                  ? 'हर कॉलोनी की अपनी पहचान, अपने संबंध और विश्वास के अपने मानदंड होते हैं। चंदर विहार भी इससे अलग नहीं है। दशकों से यहां संपत्ति खरीदना अथवा किराए पर लेना अनिश्चित कीमतों और अज्ञात बिचौलियों का एक कठिन अनुभव रहा है।'
                  : 'Every locality has its own heartbeat, relationships, and unwritten rules of trust. Chander Vihar is no different. Over decades, buying or renting here often turned into an intimidating maze of speculative prices and anonymous brokers.')}
            </p>
            <p className="font-bold text-slate-800">
              {content?.story_body2 ||
                (isHi
                  ? 'CVP Exchange की स्थापना पड़ोसियों को आपस में सीधे जोड़ने के लिए की गई थी। हमारा मानना है कि स्वस्थ रियल एस्टेट की शुरुआत नागरिक अखंडता से होती है — अच्छी सड़कें, कार्यरत जल आपूर्ति, स्पष्ट स्वामित्व इतिहास और एक सच्चा विश्वास जिस पर आप भरोसा कर सकें।'
                  : 'CVP Exchange was created to bridge neighbors directly. We believe healthy real estate begins with civic integrity: well-lit streets, working water pipelines, honest ownership history, and a handshake you can count on.')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>{isHi ? 'हमारी टीम से मिलें' : 'Meet The Community Team'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <div className="inline-flex items-center gap-2 text-[#00A3AD] font-bold text-xs sm:text-sm">
              <ThumbsUp className="w-4 h-4 text-[#00A3AD] fill-current" />
              <span className="text-slate-700 font-bold">
                {isHi ? '1,200+ परिवारों को सहायता' : '1,200+ Families Assisted'}
              </span>
            </div>
          </div>
        </div>

        {/* Right 2x2 Frosted Overlay Cards Grid on Locality Photo */}
        <div className="lg:col-span-6">
          <div className="relative rounded-[28px] overflow-hidden p-5 sm:p-6 min-h-[420px] lg:min-h-[460px] shadow-xl border border-slate-200/90 flex flex-col justify-end">
            {/* Background Locality Image */}
            <img
              src="/images/chander-vihar-street.jpg"
              alt="Chander Vihar Neighborhood"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.src = '/images/banners/banner-fullwidth.jpg'; }}
            />
            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

            {/* 2x2 Glassmorphism Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#00A3AD] text-white flex items-center justify-center mb-3 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-[#0F172A] text-base tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

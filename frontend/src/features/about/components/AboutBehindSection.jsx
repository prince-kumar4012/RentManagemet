'use client';

import Link from 'next/link';
import { CheckCircle2, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { FacebookIcon } from '@/components/common/Icons';

export default function AboutBehindSection({ content, isHi }) {
  const checkPoints = isHi
    ? [
        'विस्तृत प्रॉपर्टी परामर्श सहायता',
        'स्थानीय क्षेत्र का ज्ञान',
        'विश्वसनीय और पारदर्शी जानकारी',
        'एक पीपल-फर्स्ट दृष्टिकोण',
      ]
    : [
        'Wide Property Consultation Support',
        'Local Area Knowledge',
        'Reliable and Transparent Information',
        'A People-Focused Approach',
      ];

  return (
    <section id="behind" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Founder Portrait (Balanced height & 24px rounded corners) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[420px] h-[460px] sm:h-[500px] lg:h-[520px] rounded-[24px] overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
            <img
              src="/images/sukhvinder-pajji.jpg"
              alt={content.behind_name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="font-extrabold text-xl sm:text-2xl leading-tight mb-0.5">{content.behind_name}</h3>
              <p className="text-[#FF9900] text-xs font-bold uppercase tracking-wider">
                {isHi ? 'संस्थापक व कम्युनिटी लीडर' : 'Founder & Community Lead'}
              </p>
            </div>
          </div>
        </div>

        {/* Section Text Content (Balanced vertical rhythm & premium typography) */}
        <div className="lg:col-span-7">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            ✦ {content.behind_eyebrow} ✦
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-2 tracking-tight">
            {content.behind_title}
          </h2>
          
          <p className="text-[#FF9900] font-bold text-sm sm:text-base mb-5 leading-snug">
            {content.behind_subtitle}
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {content.behind_body}
          </p>

          {/* Clean 2-column benefits list */}
          <div className="grid sm:grid-cols-2 gap-y-3.5 gap-x-6 my-6 pt-1 pb-1">
            {checkPoints.map((pt) => (
              <div key={pt} className="flex items-center gap-2.5 text-slate-800 font-bold text-sm sm:text-base">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#00A3AD] shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Editorial Quote with left teal accent line */}
          {content.behind_quote && (
            <blockquote className="border-l-3 border-[#00A3AD] pl-4 sm:pl-5 py-0.5 my-7">
              <p className="text-[#0F172A] font-extrabold text-base sm:text-lg italic leading-relaxed">
                {content.behind_quote}
              </p>
            </blockquote>
          )}

          {/* Personal Message with clean top divider line */}
          {content.behind_message && (
            <div className="pt-6 border-t border-slate-100 mt-7">
              <p className="text-[#FF9900] text-xs font-black uppercase tracking-widest mb-2">
                {content.behind_message_label}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic font-normal">
                {content.behind_message}
              </p>
              <p className="text-[#0F172A] font-bold text-sm sm:text-base mt-3">
                — {content.behind_name}, <span className="text-[#00A3AD] font-semibold">{isHi ? 'चंदर विहार' : 'Chander Vihar'}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Banners */}
      <div className="max-w-5xl mx-auto mt-16 space-y-6">
        {/* Banner 1: Chander Vihar Guide */}
        <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-200 text-center">
          <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2 tracking-tight">
            {isHi ? 'चंदर विहार एरिया गाइड एवं प्रशासनिक विवरण' : 'Chander Vihar Area & Civic Initiatives Guide'}
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-5 font-normal">
            {isHi
              ? 'क्षेत्र की प्रशासनिक जानकारी, नागरिक सेवाएं, प्रवेश द्वार एवं ज़मीनी कार्य जानने के लिए पढ़ें।'
              : 'Explore civic info, property services, local updates, and resources for a stronger Chander Vihar community.'}
          </p>
          <Link
            href="/chander-vihar-initiatives"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all"
          >
            <span>{isHi ? 'पूरा एरिया गाइड देखें' : 'View Full Chander Vihar Guide'}</span>
            <ArrowRight className="w-4 h-4 text-[#FF9900]" />
          </Link>
        </div>

        {/* Banner 2: Facebook Community */}
        {content.behind_facebook_url && (
          <div className="p-6 sm:p-8 rounded-[24px] bg-cyan-50/50 border border-cyan-100 text-center">
            <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2 tracking-tight">
              {content.behind_facebook_heading}
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-5 font-normal">
              {content.behind_facebook_desc}
            </p>
            <a
              href={content.behind_facebook_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#00A3AD] hover:bg-[#008A93] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all"
            >
              <FacebookIcon className="w-4 h-4 fill-current text-white" />
              <span>{content.behind_facebook_cta}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

'use client';

import { CheckCircle2 } from 'lucide-react';

export default function ChanderViharOverviewSection({ content, isHi }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Founder Portrait (Balanced height & 24px rounded corners) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[420px] h-[460px] sm:h-[500px] lg:h-[520px] rounded-[24px] overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
            <img
              src="/images/sukhvinder-pajji.jpg"
              alt="Sukhvinder Pajji"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="font-extrabold text-xl sm:text-2xl leading-tight mb-0.5">
                Sukhvinder Pajji (Gullu Ji)
              </h3>
              <p className="text-[#FF9900] text-xs font-bold uppercase tracking-wider">
                {isHi ? 'संस्थापक व स्थानीय जन सेवा प्रमुख' : 'Founder & Local Community Lead'}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Un-boxed Narrative & Founder Overview */}
        <div className="lg:col-span-7">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            ✦ {isHi ? 'संस्थापक दृष्टिकोण व विजन' : 'FOUNDER & LOCAL NETWORK VISION'} ✦
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-2">
            {content.founder_section_title}
          </h2>
          <p className="text-[#FF9900] font-bold text-sm sm:text-base mb-5 leading-snug">
            {content.founder_role}
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {content.founder_bio}
          </p>

          {/* Clean 2-column benefits list */}
          <div className="my-6">
            <h3 className="font-extrabold text-[#0F172A] text-base sm:text-lg mb-2 tracking-tight">
              {content.approach_title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
              {content.approach_body}
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-1 pb-1">
              {content.what_we_do.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-800 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#00A3AD] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Disclaimer block with left orange accent line */}
          <div className="border-l-3 border-[#FF9900] pl-4 sm:pl-5 py-0.5 mt-7">
            <p className="text-[#FF9900] text-xs font-black uppercase tracking-widest mb-1.5">
              {content.disclaimer_title}
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              {content.disclaimer_body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

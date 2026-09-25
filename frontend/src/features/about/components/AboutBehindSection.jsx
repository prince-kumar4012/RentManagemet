'use client';

import { Quote, ExternalLink } from 'lucide-react';

export default function AboutBehindSection({ content, isHi }) {
  return (
    <section id="behind" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Founder Portrait Card */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="relative h-[420px] w-full overflow-hidden">
              <img
                src="/images/sukhvinder-pajji.jpg"
                alt={content.behind_name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>

            {/* Bottom Badge */}
            <div className="p-5 text-center bg-white border-t border-slate-100">
              <h3 className="font-black text-dpxNavy text-xl tracking-tight mb-1">{content.behind_name}</h3>
              <p className="text-dpxTeal text-xs font-bold uppercase tracking-wider">
                {isHi ? 'चंदर विहार प्रॉपर्टी एक्सचेंज के पीछे की सोच' : 'Founder & Community Lead'}
              </p>
            </div>
          </div>
        </div>

        {/* Section Text Content */}
        <div>
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {content.behind_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy leading-tight mb-3 tracking-tight">
            {content.behind_title}
          </h2>
          <p className="text-dpxOrange font-bold text-sm mb-6">{content.behind_subtitle}</p>
          <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">{content.behind_body}</p>

          <p className="text-dpxNavy font-black text-sm mb-3 uppercase tracking-wider">{content.behind_idea}</p>
          <ul className="space-y-3 mb-8">
            {content.behind_points.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-dpxTeal shrink-0" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <Quote className="w-6 h-6 text-dpxTeal mb-2 opacity-80" />
            <p className="text-dpxNavy font-bold text-base leading-snug italic mb-2">{content.behind_quote}</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">{content.behind_belief}</p>

          <div className="border-l-4 border-dpxOrange pl-5 bg-amber-50/50 py-3 pr-4 rounded-r-xl">
            <p className="text-dpxOrange text-[10px] font-black uppercase tracking-widest mb-1">
              {content.behind_message_label}
            </p>
            <p className="text-slate-700 text-sm leading-relaxed italic">{content.behind_message}</p>
            <p className="text-dpxOrange font-black text-sm mt-2.5">— {content.behind_name}</p>
          </div>
        </div>
      </div>

      {/* Ground-Level Civic & Social Initiatives Grid Cards */}
      {content.behind_initiatives && (
        <div className="max-w-7xl mx-auto mt-16 pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-amber-100 text-dpxOrange text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              {isHi ? 'ज़मीनी पहल व समाज सेवा' : 'Ground-Level Impact'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-dpxNavy tracking-tight mb-3">
              {content.behind_initiatives_title}
            </h3>
            {content.behind_initiatives_subtitle && (
              <p className="text-slate-600 text-sm font-medium">{content.behind_initiatives_subtitle}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.behind_initiatives.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-dpxTeal/40 hover:shadow-md rounded-xl p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-dpxTealLight text-dpxTeal border border-dpxTeal/20">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-black text-dpxNavy text-base mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Facebook Community Link Card */}
      {content.behind_facebook_url && (
        <div className="max-w-4xl mx-auto mt-16 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-8 sm:p-10 text-center shadow-xs">
          <h4 className="text-xl sm:text-2xl font-black text-dpxNavy mb-3 tracking-tight">
            {content.behind_facebook_heading}
          </h4>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
            {content.behind_facebook_desc}
          </p>
          <a
            href={content.behind_facebook_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-dpxTeal hover:bg-[#008f98] text-white font-black text-sm px-8 py-3.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>{content.behind_facebook_cta}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </section>
  );
}

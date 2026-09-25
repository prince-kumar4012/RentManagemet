'use client';

import { ExternalLink } from 'lucide-react';

export default function ChanderViharFacebookSection({ content }) {
  if (!content.facebook_url) return null;

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center shadow-sm">
        <h3 className="text-xl sm:text-2xl font-black text-dpxNavy mb-3 tracking-tight">
          {content.facebook_heading}
        </h3>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          {content.facebook_desc}
        </p>
        <a
          href={content.facebook_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-dpxTeal hover:bg-[#008f98] text-white font-black text-sm px-8 py-3.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
        >
          <span>{content.facebook_cta}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

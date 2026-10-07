'use client';

import { ExternalLink } from 'lucide-react';
import { FacebookIcon } from '@/components/common/Icons';

export default function ChanderViharFacebookSection({ content }) {
  if (!content.facebook_url) return null;

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 text-center shadow-sm">
          {/* Cyan/Teal Icon Container */}
          <div className="w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-dpxTeal mx-auto mb-5">
            <FacebookIcon className="w-7 h-7 fill-current" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-dpxNavy mb-3 tracking-tight">
            {content.facebook_heading}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
            {content.facebook_desc}
          </p>
          <a
            href={content.facebook_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xs transition-all"
          >
            <span>{content.facebook_cta}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

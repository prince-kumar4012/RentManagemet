'use client';

import { Facebook, Youtube, Camera, ExternalLink, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function MediaSection({ content }) {
  return (
    <section id="media" className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.media_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-4">
            {content.media_title}
          </h2>
          <p className="text-slate-600 text-base font-normal leading-relaxed">
            {content.media_body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Facebook */}
          <a
            href={SITE_CONFIG.socials.facebook.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500/50 p-6 transition-all duration-300 hover:shadow-lg flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-black text-dpxNavy text-base mb-2">{content.media_facebook_label}</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{content.media_facebook_desc}</p>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
              <span>{SITE_CONFIG.socials.facebook.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* YouTube */}
          <a
            href={SITE_CONFIG.socials.youtube.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-2xl border border-slate-200 hover:border-red-500/50 p-6 transition-all duration-300 hover:shadow-lg flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-black text-dpxNavy text-base mb-2">{content.media_youtube_label}</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{content.media_youtube_desc}</p>
            <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
              <span>{SITE_CONFIG.socials.youtube.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Photo Gallery — Coming Soon */}
          <div className="group bg-white rounded-2xl border border-slate-200 hover:border-dpxTeal/50 p-6 transition-all duration-300 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-dpxTealLight flex items-center justify-center mb-4 group-hover:bg-dpxTeal group-hover:scale-105 transition-all">
              <Camera className="w-6 h-6 text-dpxTeal group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-black text-dpxNavy text-base mb-2">{content.media_photo_label}</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{content.media_photo_desc}</p>
            <div className="bg-dpxTealLight/60 border border-dpxTeal/20 rounded-xl px-3 py-2 text-center">
              <span className="text-dpxTeal text-xs font-black">{content.media_coming_soon}</span>
            </div>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="mt-8 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 backdrop-blur-sm">
                <Play className="w-6 h-6 text-red-500" />
              </div>
              <div className="min-w-0">
                <p className="text-slate-900 font-black text-sm">Video Updates — Colony & Community</p>
                <p className="text-slate-500 text-xs mt-0.5">Local events, social work aur property updates ke videos</p>
              </div>
            </div>
            <a
              href={SITE_CONFIG.socials.youtube.url}
              target="_blank"
              rel="noreferrer"
              className="bg-red-500/10 backdrop-blur-md border border-red-400/30 text-red-600 hover:bg-red-500/20 hover:border-red-400/50 px-5 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Youtube className="w-4 h-4" />
              YouTube Pe Dekho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

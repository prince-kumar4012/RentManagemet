'use client';

import { Camera, Video, ExternalLink, Play } from 'lucide-react';
import { FacebookIcon, YouTubeIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

const FB_GALLERY_PREVIEWS = [
  '/images/community-work/pajji-community-work-05.jpeg',
  '/images/community-work/pajji-community-work-06.jpeg',
  '/images/community-work/pajji-community-work-07.jpeg',
  '/images/community-work/pajji-community-work-08.jpeg',
];

const YT_VIDEO_PREVIEWS = [
  '/images/community-work/pajji-community-work-01.jpeg',
  '/images/community-work/pajji-community-work-02.jpeg',
  '/images/community-work/pajji-community-work-03.jpeg',
  '/images/community-work/pajji-community-work-04.jpeg',
];

export default function MediaSection({ content }) {
  const isHi = content?.media_eyebrow?.includes('समाचार') || content?.media_title?.includes('ज़मीन');

  return (
    <section id="media" className="bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.media_eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-dpxNavy tracking-tight mb-3">
            {content.media_title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            {content.media_body}
          </p>
        </div>

        {/* Both Cards side-by-side in 1 Row on Desktop */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Official Facebook Community & Photo Updates */}
          <a
            href={SITE_CONFIG.socials.facebook.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <FacebookIcon className="w-6 h-6 fill-current text-white" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1877F2] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isHi ? 'ज़मीनी कार्य तस्वीरें' : 'Ground Action Photos'}</span>
                </span>
              </div>

              <h3 className="font-black text-dpxNavy text-xl sm:text-2xl mb-3 tracking-tight group-hover:text-[#1877F2] transition-colors">
                {content.media_facebook_label} {isHi ? 'व फोटो अपडेट' : '& Photo Updates'}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal min-h-[48px]">
                {content.media_facebook_desc} {content.media_photo_desc}
              </p>

              {/* Photo Gallery Grid Preview */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {isHi ? 'ज़मीनी गतिविधियों की झलकियां' : 'Ground Activity Photos Preview'}
                </p>
                <div className="grid grid-cols-4 gap-2.5">
                  {FB_GALLERY_PREVIEWS.map((src, i) => (
                    <div key={i} className="h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative group/img">
                      <img
                        src={src}
                        alt="Chander Vihar Community Action"
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solid CTA Button */}
            <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-slate-500 font-bold text-xs truncate">
                {SITE_CONFIG.socials.facebook.handle}
              </span>
              <span className="inline-flex items-center gap-2 bg-[#1877F2] group-hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors shrink-0">
                <span>{isHi ? 'फेसबुक पेज देखें' : 'Open Facebook Page'}</span>
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Card 2: Official YouTube Channel */}
          <a
            href={SITE_CONFIG.socials.youtube.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-red-400 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <YouTubeIcon className="w-6 h-6 fill-current text-white" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full">
                  <Video className="w-3.5 h-3.5" />
                  <span>{isHi ? 'आधिकारिक यूट्यूब' : 'Official YouTube'}</span>
                </span>
              </div>

              <h3 className="font-black text-dpxNavy text-xl sm:text-2xl mb-3 tracking-tight group-hover:text-red-600 transition-colors">
                {content.media_youtube_label}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal min-h-[48px]">
                {content.media_youtube_desc}
              </p>

              {/* Video Thumbnails Grid Preview */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {isHi ? 'सामुदायिक वीडियो झलकियां' : 'Community Video Highlights Preview'}
                </p>
                <div className="grid grid-cols-4 gap-2.5">
                  {YT_VIDEO_PREVIEWS.map((src, i) => (
                    <div key={i} className="h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 relative group/img">
                      <img
                        src={src}
                        alt="Community Video Highlight"
                        className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xs group-hover/img:scale-110 transition-transform">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solid CTA Button */}
            <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-slate-500 font-bold text-xs truncate">
                {SITE_CONFIG.socials.youtube.handle}
              </span>
              <span className="inline-flex items-center gap-2 bg-red-600 group-hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors shrink-0">
                <span>{isHi ? 'यूट्यूब चैनल देखें' : 'Visit YouTube Channel'}</span>
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

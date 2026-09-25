'use client';

import { MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LOCALITIES_CONTENT from './localities.content';

export default function LocalitiesGrid({ variant = 'footer' }) {
  const { lang } = useLanguage();
  const c = LOCALITIES_CONTENT[lang] || LOCALITIES_CONTENT.en;

  if (variant === 'footer') {
    return (
      <div className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-dpxTeal" />
          <h4 className="text-white font-black text-xs uppercase tracking-widest">
            {c.title}
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
          {c.items.map((loc) => (
            <div
              key={loc}
              className="hover:text-dpxTeal transition-colors cursor-pointer flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-dpxTeal transition-colors shrink-0" />
              <span className="truncate">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-dpxTeal" />
        <h3 className="font-black text-dpxNavy text-xs sm:text-sm uppercase tracking-widest">
          {c.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5">
        {c.items.map((loc) => (
          <div
            key={loc}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-dpxTeal transition-colors cursor-pointer group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-dpxTeal/60 group-hover:bg-dpxTeal shrink-0" />
            <span className="truncate">{loc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

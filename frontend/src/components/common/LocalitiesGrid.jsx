'use client';

import { GoogleMapsIcon } from '@/components/common/Icons';
import { useLanguage } from '@/context/LanguageContext';
import LOCALITIES_CONTENT from './localities.content';

export default function LocalitiesGrid({ variant = 'footer' }) {
  const { isHi } = useLanguage();
  const lang = isHi ? 'hi' : 'en';
  const c = LOCALITIES_CONTENT[lang] || LOCALITIES_CONTENT.en;

  if (variant === 'footer') {
    return (
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-4">
          <GoogleMapsIcon className="w-4 h-4 text-[#00A3AD] fill-current" />
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest">
            {c.title}
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2.5 text-xs font-medium text-slate-400">
          {c.items.map((loc) => (
            <div
              key={loc}
              className="hover:text-[#00A3AD] transition-colors cursor-pointer flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#00A3AD] transition-colors shrink-0" />
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
        <GoogleMapsIcon className="w-4 h-4 text-[#00A3AD] fill-current" />
        <h3 className="font-extrabold text-dpxNavy text-xs sm:text-sm uppercase tracking-widest">
          {c.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5">
        {c.items.map((loc) => (
          <div
            key={loc}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#00A3AD] transition-colors cursor-pointer group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD]/60 group-hover:bg-[#00A3AD] shrink-0" />
            <span className="truncate">{loc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

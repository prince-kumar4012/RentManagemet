'use client';

import { Users, MapPin, FileText, Trophy } from 'lucide-react';

const STATS = {
  en: [
    { icon: Users,    value: '500+', label: 'People Connected',   sub: 'Property & Community',    color: '#00A3AD' },
    { icon: MapPin,   value: '6+',   label: 'Focus Areas',        sub: 'Chander Vihar to Mundka', color: '#FF9900' },
    { icon: FileText, value: 'Free', label: 'Sarkari Help Desk',  sub: 'PM-UDAY, Voter ID & more',color: '#22c55e' },
    { icon: Trophy,   value: '1st',  label: 'Aitihasik Marathon', sub: 'Chander Vihar Community', color: '#AE2721' },
  ],
  hi: [
    { icon: Users,    value: '500+', label: 'लोग जुड़े',          sub: 'Property & Community',    color: '#00A3AD' },
    { icon: MapPin,   value: '6+',   label: 'Focus Areas',        sub: 'चंदर विहार से मुंडका',    color: '#FF9900' },
    { icon: FileText, value: 'Free', label: 'सरकारी Help Desk',   sub: 'PM-UDAY, Voter ID & more',color: '#22c55e' },
    { icon: Trophy,   value: '1st',  label: 'ऐतिहासिक Marathon', sub: 'चंदर विहार Community',    color: '#AE2721' },
  ],
};

export default function StatsSection({ isHi }) {
  const stats = isHi ? STATS.hi : STATS.en;

  return (
    <section className="bg-white border-y border-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}
              >
                <Icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <div>
                <p className="font-black text-xl leading-none mb-0.5" style={{ color: s.color }}>{s.value}</p>
                <p className="text-slate-800 text-xs font-bold leading-none">{s.label}</p>
                <p className="text-slate-400 text-[10px] font-medium mt-0.5 leading-tight">{s.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

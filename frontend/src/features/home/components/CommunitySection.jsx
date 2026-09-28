'use client';

import { Users } from 'lucide-react';

export default function CommunitySection({ isHi }) {
  const tags = isHi
    ? ['Property Seekers', 'Property Owners', 'Godown Seekers', 'Shop Owners', 'Sarkari Help चाहिए', 'Community Members']
    : ['Property Seekers', 'Property Owners', 'Godown Seekers', 'Shop Owners', 'Sarkari Help Seekers', 'Community Members'];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="w-12 h-12 rounded-xl bg-dpxTealLight text-dpxTeal flex items-center justify-center mx-auto mb-5">
          <Users className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-dpxNavy mb-4 tracking-tight">
          {isHi
            ? 'चंदर विहार केवल एक इलाका नहीं — यह हमारी Community है।'
            : 'Chander Vihar Is Not Just a Locality — It Is Our Community.'}
        </h2>
        <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          {isHi
            ? 'Property, सरकारी काम, या community support — CVP Exchange और Gullu ji की team सबके लिए available है।'
            : 'Property, Sarkari kaam, ya community support — CVP Exchange aur Gullu ji ki team sab ke liye available hai.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-dpxTeal/40 rounded-xl px-6 py-3.5 shadow-xs transition-all duration-200 cursor-default"
            >
              <span className="font-bold text-dpxNavy text-sm tracking-wide">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

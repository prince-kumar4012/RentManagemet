'use client';

import { Users } from 'lucide-react';

export default function CommunitySection({ isHi }) {
  const tags = isHi
    ? ['Property Seekers', 'Property Owners', 'Godown Seekers', 'Shop Owners', 'Sarkari Help चाहिए', 'Community Members']
    : ['Property Seekers', 'Property Owners', 'Godown Seekers', 'Shop Owners', 'Sarkari Help Seekers', 'Community Members'];

  return (
    <section className="bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="w-11 h-11 rounded-lg bg-slate-100 text-dpxTeal flex items-center justify-center mx-auto mb-4">
          <Users className="w-5 h-5" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-dpxNavy mb-3 tracking-tight">
          {isHi
            ? 'चंदर विहार केवल एक इलाका नहीं — यह हमारी Community है।'
            : 'Chander Vihar Is Not Just a Locality — It Is Our Community.'}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          {isHi
            ? 'Property, सरकारी काम, या community support — CVP Exchange और Gullu ji की team सबके लिए available है।'
            : 'Property, Sarkari kaam, ya community support — CVP Exchange aur Gullu ji ki team sab ke liye available hai.'}
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-slate-100/80 px-4 py-2 rounded-md cursor-default"
            >
              <span className="font-semibold text-dpxNavy text-xs sm:text-sm tracking-wide">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';

export default function ContactHeroSection({ content }) {
  const renderTitle = (title) => {
    if (!title) return title;
    if (title.includes('Better Property Conversations.')) {
      const parts = title.split('Better Property Conversations.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Better Property Conversations.</span>
        </>
      );
    }
    if (title.includes('Property Requirement.')) {
      const parts = title.split('Property Requirement.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Property Requirement.</span>
        </>
      );
    }
    if (title.includes('प्रॉपर्टी जरूरत पर बात करें।') || title.includes('आवश्यकता पर बात करें।')) {
      const target = title.includes('आवश्यकता पर बात करें।') ? 'आवश्यकता पर बात करें।' : 'प्रॉपर्टी जरूरत पर बात करें।';
      const parts = title.split(target);
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">{target}</span>
        </>
      );
    }
    if (title.includes('—')) {
      const parts = title.split('—');
      return (
        <>
          {parts[0]}— <span className="text-[#FF9900]">{parts[1]}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative bg-[#0F172A] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">


        {/* Eyebrow Badge */}
        {content.hero_eyebrow && (
          <div className="block mb-4">
            <span className="text-cyan-400 text-xs font-black uppercase tracking-widest">
              ✦ {content.hero_eyebrow} ✦
            </span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
          {renderTitle(content.hero_title)}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
          {content.hero_body}
        </p>
      </div>
    </section>
  );
}

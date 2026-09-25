'use client';

export default function HowWeWorkHeroSection({ content }) {
  return (
    <section className="bg-dpxNavy py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-dpxTeal/20 text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {content.hero_eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
          {content.hero_title}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {content.hero_body}
        </p>
      </div>
    </section>
  );
}

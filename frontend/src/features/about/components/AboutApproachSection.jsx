'use client';

export default function AboutApproachSection({ content }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.approach_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight">
            {content.approach_title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.approach_points.map((point, i) => (
            <div key={point.title}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-dpxTeal font-black text-xs">0{i + 1}.</span>
                <h3 className="font-black text-dpxNavy text-base">{point.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

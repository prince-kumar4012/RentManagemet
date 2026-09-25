'use client';

export default function HowWeWorkGoodConnectionSection({ content }) {
  if (!content.gc_questions) return null;

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.gc_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-4">
            {content.gc_title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-normal">{content.gc_body}</p>
        </div>

        <div className="border-l-2 border-slate-200 pl-6 space-y-3">
          {content.gc_questions.map((q, i) => (
            <div key={q} className="flex items-start gap-3">
              <span className="text-dpxTeal font-bold text-xs mt-0.5">0{i + 1}.</span>
              <p className="font-bold text-dpxNavy text-sm">{q}</p>
            </div>
          ))}
          <p className="text-slate-500 text-xs italic pt-2 font-normal">{content.gc_closing}</p>
        </div>
      </div>
    </section>
  );
}

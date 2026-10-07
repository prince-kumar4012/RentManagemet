'use client';

export default function HowWeWorkGoodConnectionSection({ content }) {
  if (!content.gc_questions) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.gc_eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight mb-4">
              {content.gc_title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">{content.gc_body}</p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {content.gc_questions.map((q, i) => (
              <div key={q} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 text-dpxTeal font-black text-xs flex items-center justify-center shrink-0">
                  0{i + 1}
                </span>
                <p className="font-bold text-dpxNavy text-sm sm:text-base leading-snug">{q}</p>
              </div>
            ))}
            <p className="text-dpxOrange text-xs sm:text-sm font-bold italic pt-2">
              {content.gc_closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



'use client';

export default function HowWeWorkWhoSection({ content }) {
  if (!content.who_items) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.who_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-dpxNavy tracking-tight mb-3">
            {content.who_title}
          </h2>
        </div>

        {/* Max 3 cards per row on desktop matching design system */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.who_items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 text-dpxTeal flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5.5 h-5.5 text-dpxTeal" />
                </div>
                <div>
                  <h3 className="font-black text-dpxNavy text-base mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



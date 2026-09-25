'use client';

export default function ChanderViharWorkSection({ content }) {
  if (!content.work_items) return null;

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.work_eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-3">
            {content.work_title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">{content.work_subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.work_items.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 border border-slate-200 hover:border-dpxTeal/40 hover:bg-white hover:shadow-md rounded-xl p-6 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-dpxTealLight text-dpxTeal border border-dpxTeal/20">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-black text-dpxNavy text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

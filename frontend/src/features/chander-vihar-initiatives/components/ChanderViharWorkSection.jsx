'use client';

export default function ChanderViharWorkSection({ content }) {
  if (!content.work_items) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.work_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-3">
            {content.work_title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">{content.work_subtitle}</p>
        </div>

        {/* Work items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.work_items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-[24px] border border-slate-200/90 bg-white hover:border-cyan-200 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <div className="mb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#00A3AD]">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-extrabold text-[#0F172A] text-lg sm:text-xl mb-2.5 leading-snug tracking-tight group-hover:text-[#00A3AD] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

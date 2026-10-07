'use client';

export default function AboutGlanceSection({ content }) {
  const renderTitle = (title) => {
    if (!title) return title;
    if (title.includes('Property Environment.')) {
      const parts = title.split('Property Environment.');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">Property Environment.</span>
        </>
      );
    }
    if (title.includes('प्रॉपर्टी वातावरण।') || title.includes('वातावरण।')) {
      const parts = title.split(title.includes('प्रॉपर्टी वातावरण।') ? 'प्रॉपर्टी वातावरण।' : 'वातावरण।');
      return (
        <>
          {parts[0]}<span className="text-[#FF9900]">{title.includes('प्रॉपर्टी वातावरण।') ? 'प्रॉपर्टी वातावरण।' : 'वातावरण।'}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="bg-slate-50/70 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            ✦ {content.glance_eyebrow} ✦
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {renderTitle(content.glance_title)}
          </h2>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.glance_items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 sm:p-7 rounded-[24px] border border-slate-200/80 bg-white shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-100/80 text-[#00A3AD] border border-cyan-200/60 flex items-center justify-center shrink-0 group-hover:bg-[#00A3AD] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0F172A] text-lg tracking-tight mb-1.5 group-hover:text-[#00A3AD] transition-colors">{item.title}</h3>
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

'use client';

export default function DifferenceSection({ content }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-dpxTealLight text-dpxTeal text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {content.diff_eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight mb-4">
            {content.diff_title}
          </h2>
          <p className="text-slate-600 text-base font-normal">{content.diff_subtitle}</p>
        </div>

        {/* Enterprise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.diff_points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-dpxTeal/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-dpxTealLight text-dpxTeal flex items-center justify-center mb-5 group-hover:bg-dpxTeal group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-dpxNavy mb-2 text-lg tracking-tight">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

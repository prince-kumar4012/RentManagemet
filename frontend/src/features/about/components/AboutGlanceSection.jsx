'use client';

export default function AboutGlanceSection({ content }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.glance_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy tracking-tight">
            {content.glance_title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.glance_items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-dpxTeal" />
                </div>
                <div>
                  <h3 className="font-black text-dpxNavy text-base mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

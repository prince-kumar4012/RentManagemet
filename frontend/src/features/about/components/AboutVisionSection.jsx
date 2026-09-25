'use client';

export default function AboutVisionSection({ content, isHi }) {
  const communityGroups = isHi
    ? ['प्रॉपर्टी तलाशने वाले', 'प्रॉपर्टी मालिक', 'स्थानीय कंसल्टेंट्स', 'स्थानीय कम्युनिटी']
    : ['Property Seekers', 'Property Owners', 'Local Consultants', 'Local Community'];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.vision_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy leading-tight tracking-tight mb-4">
            {content.vision_title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-6">{content.vision_body}</p>
          <p className="text-dpxNavy font-black mb-3 text-sm uppercase tracking-wider">{content.vision_direction}</p>
          <div className="space-y-2">
            {content.vision_points.map((pt, i) => (
              <div key={pt} className="flex items-center gap-3">
                <span className="text-dpxTeal font-bold text-xs">0{i + 1}.</span>
                <span className="text-dpxNavy font-bold text-sm">{pt}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-l-2 border-slate-200 pl-6 space-y-4">
          <h3 className="text-lg font-black text-dpxNavy">
            {isHi ? 'हमारी कम्युनिटी सोच' : 'Our Community Message'}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            {isHi
              ? 'एक मजबूत property ecosystem तब बनता है जब लोगों को सही कनेक्शन आसानी से मिल सके।'
              : 'A strong property ecosystem is created when people can find the right connections easily.'}
          </p>
          <div className="space-y-2">
            {communityGroups.map((group, i) => (
              <div key={group} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-dpxTeal shrink-0" />
                <span className="font-bold text-dpxNavy text-sm">{group}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

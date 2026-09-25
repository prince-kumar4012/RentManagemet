'use client';

import { Users } from 'lucide-react';

export default function CommunitySection({ isHi }) {
  const tags = isHi
    ? ['प्रॉपर्टी तलाशने वाले', 'प्रॉपर्टी मालिक', 'खरीदार और विक्रेता', 'किरायेदार और मकान मालिक', 'प्रॉपर्टी प्रोफेशनल्स']
    : ['Property Seekers', 'Property Owners', 'Buyers & Sellers', 'Tenants & Landlords', 'Property Professionals'];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="w-12 h-12 rounded-xl bg-dpxTealLight text-dpxTeal flex items-center justify-center mx-auto mb-5">
          <Users className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-dpxNavy mb-4 tracking-tight">
          {isHi
            ? 'चंदर विहार केवल एक इलाका नहीं है — यह एक कम्युनिटी है।'
            : 'Chander Vihar Is Not Just a Locality — It Is a Community.'}
        </h2>
        <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          {isHi
            ? 'कम्युनिटी तब मजबूत बनती है जब उसमें रहने वाले लोग एक-दूसरे पर भरोसा कर सकें, खुलकर बातचीत कर सकें और सही जानकारी के साथ फैसले ले सकें।'
            : 'Communities grow stronger when people can trust one another, communicate openly and make informed decisions.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-dpxTeal/40 rounded-xl px-6 py-3.5 shadow-xs transition-all duration-200 cursor-default"
            >
              <span className="font-bold text-dpxNavy text-sm tracking-wide">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

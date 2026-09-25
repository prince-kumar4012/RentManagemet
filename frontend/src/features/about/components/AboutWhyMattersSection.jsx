'use client';

export default function AboutWhyMattersSection({ content, isHi }) {
  const standForItems = [
    { label: isHi ? 'प्रॉपर्टी व्यक्तिगत है' : 'Property Is Personal', body: isHi ? 'एक घर किसी परिवार के लिए महत्वपूर्ण फैसला हो सकता है।' : 'A home can be an important decision for a family.' },
    { label: isHi ? 'रिश्ते मायने रखते हैं' : 'Relationships Matter', body: isHi ? 'बेहतर कनेक्शन बेहतर प्रॉपर्टी बातचीत बनाते हैं।' : 'Better connections create better property conversations.' },
    { label: isHi ? 'विश्वास की नींव' : 'Trust Is the Foundation', body: isHi ? 'हर meaningful प्रॉपर्टी कनेक्शन भरोसे पर बनता है।' : 'Every meaningful property connection is built on trust.' },
    { label: isHi ? 'समुदाय की शक्ति' : 'Community Strength', body: isHi ? 'एक मजबूत local network सभी को फायदा पहुंचाता है।' : 'A strong local network benefits everyone.' },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-dpxTeal font-bold text-xs uppercase tracking-widest mb-2">
            {content.why_eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dpxNavy leading-tight tracking-tight mb-4">
            {content.why_title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">{content.why_body}</p>
          <p className="text-dpxNavy font-black mb-2 text-sm">{content.why_philosophy}</p>
          <ul className="space-y-2 mb-4">
            {content.why_points.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-dpxTeal shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs italic font-normal">
            {content.why_support}
          </p>
        </div>
        
        <div className="border-l-2 border-slate-200 pl-6 space-y-4">
          <p className="text-dpxNavy text-xs font-black uppercase tracking-widest mb-4">
            {isHi ? 'हम क्यों करते हैं यह काम' : 'What We Stand For'}
          </p>
          {standForItems.map((item) => (
            <div key={item.label}>
              <p className="font-black text-dpxNavy text-sm mb-1">{item.label}</p>
              <p className="text-slate-600 text-xs font-normal">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

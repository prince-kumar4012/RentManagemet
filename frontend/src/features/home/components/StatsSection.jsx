'use client';

import { Star } from 'lucide-react';

const TESTIMONIALS = {
  en: [
    {
      id: 1,
      stars: 5,
      review: "Gullu ji and team helped us with PM-UDAY documentation and property guidance. Transparent, genuine local support!",
      name: "Jagdish Prasad Sharma",
      role: "Property Owner, Chander Vihar",
      initials: "JS",
      color: "bg-cyan-50 text-[#00A3AD] border-cyan-100",
    },
    {
      id: 2,
      stars: 5,
      review: "Best local network for renting and commercial godowns in Nilothi Extn. Directly connected me with honest owners.",
      name: "Amit Pal",
      role: "Business Owner, Nilothi Extn",
      initials: "AP",
      color: "bg-amber-50 text-[#FF9900] border-amber-100",
    },
    {
      id: 3,
      stars: 5,
      review: "From traffic management at Khanda Sahib Chowk to colony safety, Gullu bhai is always there for the public.",
      name: "Simranjeet Kaur",
      role: "Resident, Ward 38",
      initials: "SK",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: 4,
      stars: 5,
      review: "Found a comfortable 2BHK rental floor in Ranjit Vihar without any hassle or middlemen confusion. Very transparent process!",
      name: "Rajesh Kumar Verma",
      role: "Resident & Tenant, Ranjit Vihar",
      initials: "RV",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      id: 5,
      stars: 5,
      review: "Helped me get a prime commercial shop space on Shukar Bazar Road for my retail business. Direct owner interaction!",
      name: "Harvinder Singh",
      role: "Shop Owner, Shukar Bazar Road",
      initials: "HS",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      id: 6,
      stars: 5,
      review: "Team Chander Vihar provided prompt assistance for senior citizen pension forms and street light fixes in our lane.",
      name: "Sunita Sharma",
      role: "Senior Citizen & Resident, D-Block",
      initials: "SS",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
  ],
  hi: [
    {
      id: 1,
      stars: 5,
      review: "गुल्लू जी और टीम ने हमें PM-UDAY रजिस्ट्री और संपत्ति सलाह में मदद की। पूरी तरह पारदर्शी और सच्चा सपोर्ट!",
      name: "जगदीश प्रसाद शर्मा",
      role: "मकान मालिक, चंदर विहार",
      initials: "JS",
      color: "bg-cyan-50 text-[#00A3AD] border-cyan-100",
    },
    {
      id: 2,
      stars: 5,
      review: "निलोठी एक्सटेंशन में किराए और गोदाम के लिए सबसे बढ़िया स्थानीय नेटवर्क। सीधे सच्चे मकान मालिकों से जोड़ा।",
      name: "अमित पाल",
      role: "कारोबारी, निलोठी एक्सटेंशन",
      initials: "AP",
      color: "bg-amber-50 text-[#FF9900] border-amber-100",
    },
    {
      id: 3,
      stars: 5,
      review: "खांडा साहिब चौक पर ट्रैफिक सुधार से लेकर महिलाओं की सुरक्षा तक, गुल्लू भाई हमेशा जनता के साथ रहते हैं।",
      name: "सिमरनजीत कौर",
      role: "निवासी, वार्ड 38",
      initials: "SK",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: 4,
      stars: 5,
      review: "रंजीत विहार में बिना किसी बिचौलिया परेशानी के 2BHK किराए का मकान मिला। बहुत ही पारदर्शी प्रक्रिया!",
      name: "राजेश कुमार वर्मा",
      role: "किराएदार एवं निवासी, रंजीत विहार",
      initials: "RV",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      id: 5,
      stars: 5,
      review: "शुक्र बाजार रोड पर मेरी खुदरा दुकान के लिए कमर्शियल स्पेस दिलाने में मदद की। मालिक से सीधा संवाद!",
      name: "हरविंदर सिंह",
      role: "दुकान मालिक, शुक्र बाजार रोड",
      initials: "HS",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      id: 6,
      stars: 5,
      review: "टीम चंदर विहार ने हमारी गली में वरिष्ठ नागरिक पेंशन और स्ट्रीट लाइट की समस्या का तुरंत समाधान कराया।",
      name: "सुनीता शर्मा",
      role: "वरिष्ठ नागरिक एवं निवासी, डी-ब्लॉक",
      initials: "SS",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
  ],
};

export default function StatsSection({ isHi }) {
  const reviews = isHi ? TESTIMONIALS.hi : TESTIMONIALS.en;
  // Duplicate array for seamless infinite right-to-left scroll loop
  const marqueeList = [...reviews, ...reviews];

  return (
    <section className="bg-white py-14 sm:py-18 overflow-hidden border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-2.5">
            {isHi ? 'जनता का भरोसा' : 'COMMUNITY REVIEWS'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dpxNavy tracking-tight mb-2.5">
            {isHi ? (
              <>
                सामुदायिक भरोसा ही <span className="text-[#FF9900]">हमारी पहचान</span>
              </>
            ) : (
              <>
                Rooted in <span className="text-[#FF9900]">Community Trust</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            {isHi
              ? 'चंदर विहार और निलोठी के निवासियों, मकान मालिकों और समाजसेवियों का सच्चा अनुभव।'
              : 'Real feedback from local residents, property owners, and community members in Chander Vihar.'}
          </p>
        </div>

        {/* Constrained Marquee Track Inside Container */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Left & Right Soft Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Flex Container */}
          <div className="animate-marquee flex gap-5 sm:gap-6">
            {marqueeList.map((r, idx) => (
              <div
                key={`${r.id}-${idx}`}
                className="w-[270px] sm:w-[320px] shrink-0 flex flex-col justify-between p-5 sm:p-6 rounded-[24px] border border-slate-200/90 bg-white hover:border-cyan-200 shadow-2xs hover:shadow-lg transition-all duration-300 relative group cursor-pointer"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-3 text-amber-400">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Review Paragraph */}
                  <p className="text-slate-700 text-xs leading-relaxed mb-4 font-normal italic">
                    "{r.review}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 font-extrabold text-xs shadow-2xs ${r.color}`}>
                    {r.initials}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-extrabold text-dpxNavy text-xs sm:text-sm tracking-tight truncate">{r.name}</h4>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] font-medium truncate">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, X, HeartHandshake, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const DESCRIPTIONS = [
  { en: 'Public Help Desk & Community Guidance', hi: 'जन सहायता एवं मार्गदर्शन शिविर' },
  { en: 'PM-UDAY Registry Documentation Assistance', hi: 'PM-UDAY रजिस्ट्री व दस्तावेज़ सहायता' },
  { en: 'Shri Khanda Sahib Chowk Traffic Management', hi: 'श्री खांडा साहिब चौक ट्रैफ़िक प्रबंधन' },
  { en: 'Civic Sewer Line & Drainage Inspection', hi: 'सीवर लाइन व जल निकासी निरीक्षण' },
  { en: 'Chander Vihar Resident Welfare Meeting', hi: 'चंदर विहार निवासी कल्याण सभा' },
  { en: 'Voter ID & Aadhaar Correction Help Camp', hi: 'वोटर आईडी व आधार संशोधन शिविर' },
  { en: 'Festival Cleanliness & Swachhata Drive', hi: 'त्योहार स्वच्छता एवं सफाई अभियान' },
  { en: 'Senior Citizens Support & Pension Help', hi: 'वरिष्ठ नागरिक सहायता व पेंशन शिविर' },
  { en: 'Youth Sports & Aitihasik Marathon Drive', hi: 'युवा खेल व ऐतिहासिक मैराथन आयोजन' },
  { en: 'Colony Street Light & Safety Inspection', hi: 'स्ट्रीट लाइट व महिला सुरक्षा निरीक्षण' },
  { en: 'Community Public Grievance Meeting', hi: 'जनसमस्या निवारण एवं सामुदायिक बैठक' },
  { en: 'Local Business & Shopkeepers Support', hi: 'स्थानीय दुकानदार व व्यापार प्रोत्साहन' },
];

const ALL_32_IMAGES = Array.from({ length: 32 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  const descObj = DESCRIPTIONS[i % DESCRIPTIONS.length];
  return {
    id: i + 1,
    src: `/images/community-work/pajji-community-work-${num}.jpeg`,
    title: descObj.en,
    titleHi: descObj.hi,
  };
});

export default function CommunityGallerySection({ isHi }) {
  const [expanded, setExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  useEffect(() => {
    if (activeImageIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
      if (e.key === 'ArrowRight') setActiveImageIndex((prev) => (prev < ALL_32_IMAGES.length - 1 ? prev + 1 : prev));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const displayedImages = expanded ? ALL_32_IMAGES : ALL_32_IMAGES.slice(0, 12);

  return (
    <section id="community-gallery" className="bg-slate-50/50 py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {isHi ? 'ज़मीनी कार्य एवं झलकियां' : 'GROUND ACTION GALLERY'}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-dpxNavy tracking-tight mb-3">
            {isHi ? (
              <>
                सुखविंदर सिंह गुल्लू जी एवं टीम चंदर विहार के <span className="text-[#FF9900]">ज़मीनी कार्य</span>
              </>
            ) : (
              <>
                Sukhvinder Singh Gullu Ji &amp; Team Chander Vihar's <span className="text-[#FF9900]">Ground Work</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            {isHi
              ? 'चंदर विहार एवं निलोठी में जन सहायता, PM-UDAY गाइडेंस, ट्रैफिक समाधान, और कॉलोनी विकास की तस्वीरें।'
              : 'Photos of community support, PM-UDAY guidance, traffic management, and civic work across Chander Vihar & Nilothi.'}
          </p>
        </div>

        {/* Image Grid (3 columns per row on desktop matching mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={img.src}
                  alt={isHi ? img.titleHi : img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-dpxNavy rounded-full px-5 py-2.5 text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4 text-[#00A3AD]" />
                    <span>{isHi ? 'बड़ा देखें' : 'View Photo'}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white border-t border-slate-100">
                <p className="text-dpxNavy text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                  {isHi ? img.titleHi : img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Expand / Collapse Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 bg-[#00A3AD] hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
          >
            <span>
              {expanded
                ? (isHi ? 'कम तस्वीरें दिखाएं' : 'Show Fewer Photos')
                : (isHi ? 'और तस्वीरें देखें' : 'View More Photos')}
            </span>
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10 text-white w-full max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold text-slate-200 tracking-wider">
              <span>{activeImageIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span>{ALL_32_IMAGES.length}</span>
            </div>
            <button
              onClick={() => setActiveImageIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 shadow-md"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            disabled={activeImageIndex === 0}
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => Math.max(0, prev - 1));
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-dpxNavy disabled:opacity-20 flex items-center justify-center transition-all shadow-2xl border border-white/40 active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            disabled={activeImageIndex === ALL_32_IMAGES.length - 1}
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => Math.min(ALL_32_IMAGES.length - 1, prev + 1));
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-dpxNavy disabled:opacity-20 flex items-center justify-center transition-all shadow-2xl border border-white/40 active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Center Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex flex-col items-center justify-center relative my-auto p-2"
          >
            <img
              src={ALL_32_IMAGES[activeImageIndex].src}
              alt={isHi ? ALL_32_IMAGES[activeImageIndex].titleHi : ALL_32_IMAGES[activeImageIndex].title}
              className="max-h-[68vh] sm:max-h-[72vh] max-w-[85vw] sm:max-w-[75vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Floating Dark Pill Caption */}
            <div className="mt-4 px-5 py-2.5 rounded-full bg-dpxNavy/90 border border-white/15 text-center max-w-xl shadow-xl backdrop-blur-md">
              <p className="text-white text-xs sm:text-sm font-bold tracking-tight">
                {isHi ? ALL_32_IMAGES[activeImageIndex].titleHi : ALL_32_IMAGES[activeImageIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

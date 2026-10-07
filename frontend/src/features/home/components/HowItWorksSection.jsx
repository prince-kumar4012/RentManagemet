'use client';

import { ArrowRight, MessageSquare, FileSearch, Users, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Share Requirement',
    body: 'Message or call us with your budget, floor preference, or selling timeline in Chander Vihar.',
    badgeBg: 'bg-[#00A3AD]',
  },
  {
    num: '02',
    icon: FileSearch,
    title: 'We Match & Screen',
    body: 'Our local council scans verified properties and checks documentation before scheduling any visit.',
    badgeBg: 'bg-[#0284C7]',
  },
  {
    num: '03',
    icon: Users,
    title: 'Direct Introduction',
    body: 'We share suitable leads directly with the owner or buyer. Discuss openly with real local market benchmarks.',
    badgeBg: 'bg-[#00A3AD]',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Move Forward Safe',
    body: 'Complete registry, NOC, mutation transfer and direct guidance from our neighbourhood legal desk.',
    badgeBg: 'bg-[#0284C7]',
  },
];

export default function HowItWorksSection({ content, onOpenInquiry }) {
  const stepIcons = [MessageSquare, FileSearch, Users, ShieldCheck];
  const stepBadges = ['bg-[#00A3AD]', 'bg-[#0284C7]', 'bg-[#00A3AD]', 'bg-[#0284C7]'];

  const stepsList = content?.hiw_steps?.slice(0, 4).map((s, idx) => ({
    num: s.num || `0${idx + 1}`,
    icon: stepIcons[idx % stepIcons.length],
    title: s.title,
    body: s.body,
    badgeBg: stepBadges[idx % stepBadges.length],
  })) || STEPS;

  return (
    <section id="how-it-works" className="relative bg-gradient-to-b from-[#F2FBFC] via-[#EDF8FA] to-[#F5FCFD] py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-cyan-100/60">
      
      {/* Background Soft Cyan Blur Blobs */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#CCF2F6]/70 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -left-12 bottom-0 w-64 h-64 bg-[#BCEBF0]/50 rounded-full filter blur-2xl pointer-events-none" />

      {/* Bottom Right Architectural Blueprint Vector Illustration */}
      <div className="absolute right-0 bottom-0 w-80 h-64 opacity-30 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 300 240" fill="none" stroke="#00A3AD" strokeWidth="1">
          <rect x="190" y="50" width="90" height="170" strokeDasharray="3 3" />
          <line x1="190" y1="90" x2="280" y2="90" strokeDasharray="2 2" />
          <line x1="190" y1="130" x2="280" y2="130" strokeDasharray="2 2" />
          <line x1="190" y1="170" x2="280" y2="170" strokeDasharray="2 2" />
          <rect x="205" y="62" width="22" height="18" />
          <rect x="245" y="62" width="22" height="18" />
          <rect x="205" y="102" width="22" height="18" />
          <rect x="245" y="102" width="22" height="18" />
          <rect x="205" y="142" width="22" height="18" />
          <rect x="245" y="142" width="22" height="18" />
          <circle cx="140" cy="205" r="28" strokeDasharray="2 2" />
          <line x1="112" y1="205" x2="168" y2="205" />
          <line x1="140" y1="177" x2="140" y2="233" />
          <path d="M 50 225 Q 110 175, 170 215" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00A3AD]/40"></span>
            <span className="text-[#00A3AD] text-xs sm:text-sm font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <span className="text-[10px]">✦</span> {content?.hiw_eyebrow || 'STREAMLINED FLOW'} <span className="text-[10px]">✦</span>
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00A3AD]/40"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-snug mb-4">
            {content?.hiw_title ? (
              content.hiw_title.includes('4 Simple Steps') || content.hiw_title.includes('4 सरल चरणों') ? (
                <>
                  <span>{content.hiw_title.replace(/4 (Simple Steps|सरल चरणों में)/, '').trim()}</span>
                  <span className="text-[#FF6B00] block mt-1.5 sm:mt-2">
                    {content.hiw_title.includes('4 सरल चरणों') ? '4 सरल चरणों में' : '4 Simple Steps'}
                  </span>
                </>
              ) : (
                content.hiw_title
              )
            ) : (
              <>
                <span>Your Property Connection in</span>
                <span className="text-[#FF6B00] block mt-1.5 sm:mt-2">4 Simple Steps</span>
              </>
            )}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
            {content?.hiw_body || 'No convoluted brokerage bureaucracy. We keep every interaction clean, structured, and fast.'}
          </p>
        </div>

        {/* 4 Connected Horizontal Steps Container */}
        <div className="relative mb-16">
          
          {/* Desktop Wavy Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] z-0 pointer-events-none">
            <svg className="w-full h-16" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 50 Q 125 15 250 50 T 500 50 T 750 50 T 1000 50"
                stroke="#4ECCD3"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="375" cy="35" r="3.5" fill="#4ECCD3" />
              <circle cx="625" cy="35" r="3.5" fill="#4ECCD3" />
              <circle cx="875" cy="35" r="3.5" fill="#4ECCD3" />
            </svg>
          </div>

          {/* 4 Steps Columns Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {stepsList.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  
                  {/* Outer Circle Icon Container with Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-full border-2 border-[#00A3AD] bg-white flex items-center justify-center shadow-xs group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-cyan-50/80 flex items-center justify-center text-[#00A3AD]">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>

                    {/* Step Number Circle Badge */}
                    <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 ${step.badgeBg} text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-white shadow-xs`}>
                      {step.num}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-extrabold text-[#0F172A] text-lg sm:text-xl mb-2.5 tracking-tight group-hover:text-[#00A3AD] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Body Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal max-w-[240px] mx-auto">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center CTA Button */}
        <div className="text-center relative z-10">
          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Rent')}
            className="inline-flex items-center gap-2.5 bg-[#00A3AD] hover:bg-[#008A93] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{content?.hiw_cta || 'Start a Conversation Today'}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}

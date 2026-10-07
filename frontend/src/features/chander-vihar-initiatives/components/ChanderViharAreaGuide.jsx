'use client';

import {
  Building2, Vote, MapPin, Bus, GraduationCap, Store,
  Building, Compass, Shield, User, LandPlot, Utensils, FileText, Landmark, UserCheck
} from 'lucide-react';

const ADMIN_ICONS = [
  MapPin,
  Compass,
  Building2,
  Vote,
  Building,
  FileText,
  Landmark,
  Shield,
];

export default function ChanderViharAreaGuide({ content, isHi }) {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ── 1. ADMINISTRATIVE & CIVIC INFORMATION ──────────────── */}
        <section id="administrative-info">
          {/* Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.admin_eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              {content.admin_title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">{content.admin_subtitle}</p>
          </div>

          {/* Top Specification Panel (Clean Description Grid - Zero Nested Card Borders) */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50/70 border border-slate-200/80 mb-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-8">
              {content.admin_details.map((detail, idx) => {
                const Icon = ADMIN_ICONS[idx % ADMIN_ICONS.length];

                return (
                  <div key={detail.label} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-white border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD] shadow-2xs mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#00A3AD] text-[11px] font-black uppercase tracking-widest mb-1">
                        {detail.label}
                      </p>
                      <p className="text-[#0F172A] font-extrabold text-sm sm:text-base leading-snug break-words">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Section: Officials Directory (Clean Single-Layer Cards) */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00A3AD]">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg sm:text-xl tracking-tight">
                {isHi ? 'मुख्य प्रशासनिक व नागरिक कार्यालय' : 'Key Administrative & Civic Offices'}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.officials.map((official) => (
                <div
                  key={official.role}
                  className="p-6 sm:p-7 rounded-[24px] border border-slate-200/90 bg-white hover:border-cyan-200 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Role Tag & Party Tag */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-[#00A3AD] text-[11px] font-black uppercase tracking-widest leading-snug">
                        {official.role}
                      </span>
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/60 shrink-0">
                        {official.party}
                      </span>
                    </div>

                    {/* Official Name */}
                    <h4 className="font-extrabold text-[#0F172A] text-lg mb-2.5 tracking-tight">
                      {official.name}
                    </h4>

                    {/* Plain Text Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {official.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. HISTORY & EVOLUTION ──────────────── */}
        <section id="history" className="pt-6">
          <div className="p-8 sm:p-10 rounded-[28px] bg-slate-50/80 border border-slate-200/90">
            <div className="max-w-3xl mb-8">
              <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
                {content.history_eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                {content.history_title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                {content.history_body}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {content.history_points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 mt-0.5 text-[#00A3AD]">
                    <LandPlot className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CONNECTIVITY & 3 ENTRY POINTS ───────────────────────── */}
        <section id="connectivity">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.transport_eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              {content.transport_title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">{content.transport_subtitle}</p>
          </div>

          {/* 3 Entry Points */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {content.entry_points.map((ep) => (
              <div key={ep.name} className="p-6 rounded-[24px] border border-slate-200/90 bg-white shadow-2xs hover:shadow-xl transition-all group">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#00A3AD] mb-2">
                  {ep.name}
                </p>
                <h3 className="font-extrabold text-[#0F172A] text-lg mb-2">{ep.route}</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">{ep.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Railway */}
            <div className="p-6 sm:p-8 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <div className="flex items-center gap-3 mb-4 text-[#0F172A] font-extrabold text-base">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <Bus className="w-4 h-4" />
                </div>
                <span>Railway Connectivity</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">{content.railway}</p>
            </div>

            {/* Metro */}
            <div className="p-6 sm:p-8 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <div className="flex items-center gap-3 mb-4 text-[#0F172A] font-extrabold text-base">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <Compass className="w-4 h-4" />
                </div>
                <span>Metro Stations</span>
              </div>
              <ul className="space-y-2.5">
                {content.metro_stations.map((m) => (
                  <li key={m} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#00A3AD]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 4. SCHOOLS & EDUCATION ECOSYSTEM ───────────────────────── */}
        <section id="schools" className="pt-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.schools_eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {content.schools_title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base sm:text-lg mb-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>Schools in Chander Vihar &amp; Nilothi</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.schools_local.map((sch) => (
                  <li key={sch} className="text-xs font-bold text-slate-800 flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80">
                    <span className="w-2 h-2 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{sch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base sm:text-lg mb-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <Building className="w-4 h-4" />
                </div>
                <span>Nearby Prominent Schools (~3 km)</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.schools_nearby.map((sch) => (
                  <li key={sch} className="text-xs font-bold text-slate-800 flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80">
                    <span className="w-2 h-2 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{sch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. MARKETS, SUPERMARKETS & DINING ───────────────────────── */}
        <section id="markets">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.markets_eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              {content.markets_title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-white shadow-2xs">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <Store className="w-4 h-4" />
                </div>
                <span>Local Shopping &amp; Weekly Markets</span>
              </h3>
              <ul className="space-y-2.5">
                {content.markets_local.map((m) => (
                  <li key={m} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-white shadow-2xs">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <Building2 className="w-4 h-4" />
                </div>
                <span>Supermarkets &amp; Stores</span>
              </h3>
              <ul className="space-y-2.5">
                {content.supermarkets.map((m) => (
                  <li key={m} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-white shadow-2xs">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#00A3AD]">
                  <Utensils className="w-4 h-4" />
                </div>
                <span>Dining &amp; Bakeries</span>
              </h3>
              <ul className="space-y-2.5">
                {content.dining.map((m) => (
                  <li key={m} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 6. RELIGIOUS PLACES & SPIRITUAL HERITAGE ────────────────── */}
        <section id="religious" className="pt-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.religious_eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {content.religious_title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gurudwaras */}
            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 pb-2 border-b border-slate-200">Gurudwaras</h3>
              <div className="space-y-3">
                {content.gurudwaras.map((g) => (
                  <div key={g.name}>
                    <p className="font-bold text-[#00A3AD] text-xs mb-1">{g.name}</p>
                    <p className="text-slate-600 text-[11px] font-normal leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Temples */}
            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 pb-2 border-b border-slate-200">Temples &amp; Mandirs</h3>
              <ul className="space-y-2.5">
                {content.temples.map((t) => (
                  <li key={t} className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Churches */}
            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 pb-2 border-b border-slate-200">Churches</h3>
              <ul className="space-y-2.5">
                {content.churches.map((c) => (
                  <li key={c} className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mosque */}
            <div className="p-6 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4 pb-2 border-b border-slate-200">Mosques</h3>
              <ul className="space-y-2.5">
                {content.mosque.map((m) => (
                  <li key={m} className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3AD] shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 7. NEARBY AREAS & COLONIES ──────────────────────────────── */}
        <section id="nearby-areas">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
              {content.areas_eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              {content.areas_title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4">Immediate Nearby Colonies (Nilothi Region)</h3>
              <div className="flex flex-wrap gap-2">
                {content.immediate_areas.map((area) => (
                  <span key={area} className="text-[#0F172A] text-xs font-bold bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-xl shadow-2xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[24px] border border-slate-200/90 bg-slate-50/80">
              <h3 className="font-extrabold text-[#0F172A] text-base mb-4">Major Surrounding West Delhi Localities</h3>
              <div className="flex flex-wrap gap-2">
                {content.major_localities.map((area) => (
                  <span key={area} className="text-[#0F172A] text-xs font-bold bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-xl shadow-2xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

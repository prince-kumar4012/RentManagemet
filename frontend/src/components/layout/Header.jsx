'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/config/site.config';

const NAV_LINKS = {
  en: [
    { label: 'Home',             href: '/' },
    { label: 'Hamara Safar',     href: '/#hamara-safar' },
    { label: 'About',            href: '/about' },
    { label: 'CV Impact',        href: '/chander-vihar-initiatives' },
    { label: 'How We Work',      href: '/how-we-work' },
    { label: 'Contact',          href: '/contact' },
  ],
  hi: [
    { label: 'होम',              href: '/' },
    { label: 'हमारा सफर',        href: '/#hamara-safar' },
    { label: 'हमारे बारे में',   href: '/about' },
    { label: 'CV विकास',         href: '/chander-vihar-initiatives' },
    { label: 'कैसे काम करते हैं', href: '/how-we-work' },
    { label: 'संपर्क',           href: '/contact' },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle } = useLanguage();
  const links = NAV_LINKS[lang];

  return (
    <>
      {/* ── TOP BAR ──────────────────────────────────────────── */}
      <div className="bg-dpxNavy text-slate-300 text-xs py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-slate-400 font-medium">
            {lang === 'en'
              ? `${SITE_CONFIG.tagline} — ${SITE_CONFIG.founderName}`
              : `${SITE_CONFIG.taglineHi} — ${SITE_CONFIG.founderName}`}
          </span>
          <div className="flex items-center gap-4 font-semibold">
            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="flex items-center gap-1.5 hover:text-dpxTeal transition"
            >
              <Phone className="w-3.5 h-3.5 text-dpxOrange" />
              {SITE_CONFIG.rawPhone}
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-green-400 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ──────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
          {/* Logo / Brand */}
          <Link href="/" className="shrink-0 flex flex-col leading-none">
            <span className="font-black text-dpxNavy text-lg tracking-tight leading-none">
              {SITE_CONFIG.shortName}
            </span>
            <span className="text-dpxTeal text-[10px] font-bold tracking-wider mt-0.5 leading-none">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 text-xs lg:text-sm font-extrabold text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`px-2.5 py-2 lg:px-3.5 rounded-xl transition-all whitespace-nowrap ${
                  pathname === link.href
                    ? 'text-dpxTeal bg-dpxTealLight'
                    : 'hover:text-dpxTeal hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs + Lang Toggle */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-600 hover:border-dpxTeal hover:text-dpxTeal transition text-xs font-black"
              title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'en' ? 'हिंदी' : 'English'}
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              {lang === 'en' ? 'WhatsApp Us' : 'WhatsApp करें'}
            </a>

            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="btn-dpx-teal px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md"
            >
              <Phone className="w-4 h-4 shrink-0" />
              {lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-dpxNavy" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-6 py-6 shadow-xl border-t border-slate-100">
            <nav className="flex flex-col gap-1 mb-5 font-extrabold text-base">
              {links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 rounded-xl transition ${
                    pathname === link.href
                      ? 'bg-dpxTealLight text-dpxTeal'
                      : 'hover:bg-slate-100 text-dpxNavy'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => { toggle(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 py-3 rounded-xl font-bold text-sm"
              >
                <Globe className="w-4 h-4" />
                {lang === 'en' ? 'हिंदी में देखें' : 'View in English'}
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white text-center py-3.5 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {lang === 'en' ? 'WhatsApp Us' : 'WhatsApp करें'}
              </a>
              <a
                href={`tel:${SITE_CONFIG.rawPhone}`}
                className="btn-dpx-primary text-center py-3.5 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

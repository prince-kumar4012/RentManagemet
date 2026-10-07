'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { WhatsAppIcon, PhoneIcon } from '@/components/common/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/config/site.config';

const NAV_LINKS = {
  en: [
    { label: 'Home',             href: '/' },
    { label: 'About Us',         href: '/about' },
    { label: 'CV Initiatives',   href: '/chander-vihar-initiatives' },
    { label: 'How We Work',      href: '/how-we-work' },
    { label: 'Contact',          href: '/contact' },
  ],
  hi: [
    { label: 'मुख्य पृष्ठ',      href: '/' },
    { label: 'हमारे बारे में',   href: '/about' },
    { label: 'चंदर विहार कार्य', href: '/chander-vihar-initiatives' },
    { label: 'कार्यप्रणाली',      href: '/how-we-work' },
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
          <span className="text-slate-300 font-medium">
            {lang === 'en'
              ? `${SITE_CONFIG.tagline} — ${SITE_CONFIG.founderName}`
              : `${SITE_CONFIG.taglineHi} — ${SITE_CONFIG.founderName}`}
          </span>
          <div className="flex items-center gap-4 font-semibold">
            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="flex items-center gap-1.5 hover:text-dpxTeal transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-dpxOrange fill-current" />
              <span>{SITE_CONFIG.rawPhone}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ──────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link href="/" className="shrink-0 flex items-center group">
            <img
              src="/logo.png"
              alt={SITE_CONFIG.name}
              className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? 'text-dpxTeal bg-slate-100 font-bold'
                    : 'hover:text-dpxTeal hover:bg-slate-50'
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
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-dpxTeal hover:text-dpxTeal transition text-xs font-bold"
              title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
              <span>{lang === 'en' ? 'WhatsApp Us' : 'व्हाट्सएप करें'}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="bg-dpxTeal hover:bg-dpxTealDark text-white px-3.5 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 shrink-0 fill-current" />
              <span>{lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white px-5 py-5 border-t border-slate-100 shadow-lg">
            <nav className="flex flex-col gap-1 mb-4 font-semibold text-sm">
              {links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-lg transition ${
                    pathname === link.href
                      ? 'bg-slate-100 text-dpxTeal font-bold'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
              <button
                onClick={() => { toggle(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 py-2.5 rounded-lg font-bold text-xs"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'en' ? 'हिंदी में देखें' : 'View in English'}</span>
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 text-white text-center py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>{lang === 'en' ? 'WhatsApp Us' : 'व्हाट्सएप करें'}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.rawPhone}`}
                className="bg-dpxTeal text-white text-center py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 fill-current" />
                <span>{lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

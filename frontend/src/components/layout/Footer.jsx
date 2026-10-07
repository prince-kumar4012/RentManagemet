'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LocalitiesGrid } from '@/components/common';
import {
  WhatsAppIcon, PhoneIcon, EmailIcon, GoogleMapsIcon,
  InstagramIcon, FacebookIcon, YouTubeIcon
} from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

const FOOTER_CONTENT = {
  en: {
    tagline: 'Chander Vihar & Nilothi, West Delhi',
    desc: 'Chander Vihar Property Exchange is a dedicated local property network built on transparent communication, verified local connections, and community trust.',
    copyright: '© 2026 Chander Vihar Property Exchange. All Rights Reserved.',
    
    quick_title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Chander Vihar', href: '/about' },
      { label: 'Chander Vihar Impact', href: '/chander-vihar-initiatives' },
      { label: 'Our Story', href: '/about#story' },
      { label: 'Behind CVP', href: '/about#behind' },
      { label: 'How It Works', href: '/how-we-work' },
      { label: 'What We Do', href: '/how-we-work#services' },
      { label: 'Contact Us', href: '/contact' },
    ],

    contact_title: 'Contact Information',
    follow_title: 'Social Media',
    focus_title: 'Our Primary Focus Area',
    focus_locality: 'Chander Vihar & Nilothi, West Delhi',
    services: 'Buy · Sell · Rent · Godown & Shed · Shop & Commercial · Property Support',

    bottom_left: 'Chander Vihar & Nilothi — Connected through people, relationships and trust.',
    bottom_right: 'Local Knowledge · Trusted Connections · Better Property Conversations',
  },

  hi: {
    tagline: 'चंदर विहार एवं निलोठी, पश्चिमी दिल्ली',
    desc: 'चंदर विहार प्रॉपर्टी एक्सचेंज एक समर्पित स्थानीय संपत्ति नेटवर्क है, जो पारदर्शी संवाद, सत्यापित स्थानीय संपर्कों और सामुदायिक विश्वास पर आधारित है।',
    copyright: '© 2026 चंदर विहार प्रॉपर्टी एक्सचेंज। सर्वाधिकार सुरक्षित।',

    quick_title: 'मुख्य लिंक',
    links: [
      { label: 'मुख्य पृष्ठ', href: '/' },
      { label: 'चंदर विहार परिचय', href: '/about' },
      { label: 'चंदर विहार विकास कार्य', href: '/chander-vihar-initiatives' },
      { label: 'हमारी कहानी', href: '/about#story' },
      { label: 'संस्थापक परिचय', href: '/about#behind' },
      { label: 'कार्यप्रणाली', href: '/how-we-work' },
      { label: 'हमारी सेवाएं', href: '/how-we-work#services' },
      { label: 'संपर्क करें', href: '/contact' },
    ],

    contact_title: 'संपर्क जानकारी',
    follow_title: 'सोशल मीडिया',
    focus_title: 'हमारा मुख्य कार्य क्षेत्र',
    focus_locality: 'चंदर विहार एवं निलोठी, पश्चिमी दिल्ली',
    services: 'खरीदें · बेचें · किराया · गोदाम व शेड · दुकान व कमर्शियल · संपत्ति सहायता',

    bottom_left: 'चंदर विहार एवं निलोठी — लोगों, संबंधों और विश्वास से जुड़ा हुआ।',
    bottom_right: 'स्थानीय अनुभव · विश्वसनीय संपर्क · बेहतर संपत्ति चर्चा',
  },
};

export default function Footer() {
  const { isHi } = useLanguage();
  const c = isHi ? FOOTER_CONTENT.hi : FOOTER_CONTENT.en;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block group mb-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Chander Vihar Property Exchange Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-white p-1.5 shadow-md transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <p className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide">
                  {c.tagline}
                </p>
              </div>
            </div>
          </Link>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-md font-normal">
            {c.desc}
          </p>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 max-w-md">
            <p className="text-xs text-dpxTeal font-bold uppercase tracking-wider mb-1">{c.focus_title}</p>
            <p className="text-white text-xs font-bold mb-1">{c.focus_locality}</p>
            <p className="text-slate-400 text-[11px] font-normal">{c.services}</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
            {c.quick_title}
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {c.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-dpxTeal transition font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
            {c.contact_title}
          </h4>
          <div className="space-y-3.5 text-xs sm:text-sm">
            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition font-medium"
            >
              <PhoneIcon className="w-4 h-4 text-dpxTeal shrink-0 fill-current" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 font-semibold text-slate-200 hover:text-emerald-400 transition"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
              <span>{SITE_CONFIG.rawWhatsapp} (WhatsApp)</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2.5 text-slate-400 hover:text-dpxTeal transition break-all font-normal"
            >
              <EmailIcon className="w-4 h-4 text-dpxTeal shrink-0 fill-current" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <div className="flex items-start gap-2.5 text-slate-400 font-normal">
              <GoogleMapsIcon className="w-4 h-4 text-dpxTeal shrink-0 fill-current mt-0.5" />
              <span>{SITE_CONFIG.address}</span>
            </div>
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
            {c.follow_title}
          </h4>
          <div className="space-y-3 mb-6">
            <a
              href={SITE_CONFIG.socials.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center shrink-0">
                <InstagramIcon className="w-4 h-4 text-white fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {SITE_CONFIG.socials.instagram.handle}
                </p>
                <p className="text-[10px] text-slate-400 font-normal">Instagram</p>
              </div>
            </a>
            <a
              href={SITE_CONFIG.socials.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center shrink-0">
                <FacebookIcon className="w-4 h-4 text-white fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {SITE_CONFIG.socials.facebook.handle}
                </p>
                <p className="text-[10px] text-slate-400 font-normal">Facebook</p>
              </div>
            </a>
            <a
              href={SITE_CONFIG.socials.youtube.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition"
            >
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
                <YouTubeIcon className="w-4 h-4 text-white fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {SITE_CONFIG.socials.youtube.handle}
                </p>
                <p className="text-[10px] text-slate-400 font-normal">YouTube</p>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Localities Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-slate-800">
        <LocalitiesGrid />
      </div>

      {/* Footer Bottom Metadata Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-normal">
        <p className="text-center sm:text-left">{c.bottom_left}</p>
        <p className="text-center sm:text-right text-slate-400 font-medium">{c.copyright}</p>
      </div>
    </footer>
  );
}

import { Rubik, Noto_Sans_Devanagari } from 'next/font/google';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { Header, BodyWrapper } from '@/components/layout';
import { LocalitiesGrid } from '@/components/common';
import { LanguageProvider } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/config/site.config';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-rubik',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-devanagari',
  display: 'swap',
});

export const metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Chander Vihar', href: '/about' },
  { label: 'Chander Vihar Impact', href: '/chander-vihar-initiatives' },
  { label: 'Our Story', href: '/about#story' },
  { label: 'Behind CVP', href: '/about#behind' },
  { label: 'How It Works', href: '/how-we-work' },
  { label: 'What We Do', href: '/how-we-work#services' },
  { label: 'Contact Us', href: '/contact' },
];

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${rubik.variable} ${notoDevanagari.variable} ${rubik.className}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#11284A" />
      </head>
      <body className="bg-dpxBg text-dpxNavy antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <BodyWrapper>
            <Header />

            <main className="flex-grow">{children}</main>

            {/* ── FOOTER ────────────────────────────────────────────── */}
            <footer className="bg-dpxNavy text-slate-300 pt-14 pb-8 border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                  <div className="mb-4">
                    <p className="text-white font-black text-xl leading-tight tracking-tight">
                      {SITE_CONFIG.shortName}
                    </p>
                    <p className="text-dpxTeal text-xs font-bold tracking-wide mt-0.5">
                      {SITE_CONFIG.name}
                    </p>
                    <p className="text-slate-500 text-[10px] mt-1 font-semibold uppercase tracking-widest">
                      {SITE_CONFIG.tagline}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400 mb-5">
                    {SITE_CONFIG.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    © 2026 {SITE_CONFIG.name}. All Rights Reserved.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-black mb-4 border-b-2 border-dpxTeal pb-1.5 w-max text-sm">
                    Quick Links
                  </h4>
                  <ul className="space-y-2 text-sm font-semibold">
                    {FOOTER_LINKS.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href} className="hover:text-dpxTeal transition text-slate-400">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-black mb-4 border-b-2 border-dpxOrange pb-1.5 w-max text-sm">
                    Contact
                  </h4>
                  <div className="space-y-3.5 text-sm">
                    <a
                      href={`tel:${SITE_CONFIG.rawPhone}`}
                      className="flex items-center gap-2.5 font-bold text-slate-200 hover:text-dpxTeal transition"
                    >
                      <Phone className="w-4 h-4 text-dpxOrange shrink-0" />
                      {SITE_CONFIG.phone}
                    </a>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 font-bold text-slate-200 hover:text-green-400 transition"
                    >
                      <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {SITE_CONFIG.rawWhatsapp} (WhatsApp)
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-2.5 text-slate-400 hover:text-dpxTeal transition break-all"
                    >
                      <Mail className="w-4 h-4 text-dpxTeal shrink-0" />
                      {SITE_CONFIG.email}
                    </a>
                    <div className="flex items-start gap-2.5 text-slate-400">
                      <MapPin className="w-4 h-4 text-dpxTeal shrink-0 mt-0.5" />
                      <span>{SITE_CONFIG.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-black mb-4 border-b-2 border-dpxTeal pb-1.5 w-max text-sm">
                    Follow Us
                  </h4>
                  <div className="space-y-3">
                    <a
                      href={SITE_CONFIG.socials.instagram.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-white">
                          {SITE_CONFIG.socials.instagram.handle}
                        </p>
                        <p className="text-[10px] text-slate-500">Instagram</p>
                      </div>
                    </a>
                    <a
                      href={SITE_CONFIG.socials.facebook.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-white">
                          {SITE_CONFIG.socials.facebook.handle}
                        </p>
                        <p className="text-[10px] text-slate-500">Facebook</p>
                      </div>
                    </a>
                    <a
                      href={SITE_CONFIG.socials.youtube.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
                        <Youtube className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-white">
                          {SITE_CONFIG.socials.youtube.handle}
                        </p>
                        <p className="text-[10px] text-slate-500">YouTube</p>
                      </div>
                    </a>
                  </div>
                  <div className="mt-5 bg-dpxTeal/10 border border-dpxTeal/20 rounded-xl p-3.5">
                    <p className="text-xs text-dpxTeal font-black mb-1">Our Focus Area</p>
                    <p className="text-xs text-slate-400">
                      {SITE_CONFIG.primaryLocality} &amp; {SITE_CONFIG.secondaryLocality}, {SITE_CONFIG.city}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {SITE_CONFIG.services.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-Localities Grid in Footer */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <LocalitiesGrid variant="footer" />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-500 font-semibold">
                  {SITE_CONFIG.primaryLocality} &amp; {SITE_CONFIG.secondaryLocality} — Connected through people, relationships and trust.
                </p>
                <p className="text-xs text-slate-600 font-semibold">
                  Local Knowledge · Trusted Connections · Better Property Conversations
                </p>
              </div>
            </footer>
          </BodyWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
